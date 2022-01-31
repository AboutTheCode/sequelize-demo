import db, { openConnection, closeConnection } from './db';
import { runMigrations } from './migration';
import User from './models/User';
import UserDetails from './models/UserDetails';
import Project from './models/Project';
import Skill from "./models/Skill";

async function bootstrap() {
  try {
    await openConnection();

    await runMigrations();

    console.info('Connected');

    await db.transaction(async () => {
      const user = new User({ username: 'Admin' });
      await user.save();

      const projects = [
        { name: 'Project 1', user_id: user.id },
        { name: 'Project 2', user_id: user.id }
      ];
      await Project.bulkCreate(projects);

      const skill = new Skill({ name: 'nodejs' });
      await skill.save();

      await user.addSkill(skill, { through: { year: 4 } });

      await Project.update({ deleted_at: Date.now() }, { where: { name: 'Project 1' } });

      console.info(await Project.scope('activeProjects').findAll());

      console.info(await User.findAll({
        where: {},
        include: [{
          required: false,
          where: { name: 'Project 1' },
          association: 'Projects'
        }]
      }));
    });

    await closeConnection();
  } catch (err) {
    console.error(err);
  }
}

bootstrap();
