import { DataTypes, Model } from 'sequelize';
import UserDetails from './UserDetails';
import Project from './Project';
import Skill from './Skill';
import UserRefSkill from './UserRefSkill';

import db from '../db';

class User extends Model {

}

const model = User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
}, {
  sequelize: db,
  tableName: 'users',
});

model.hasOne(UserDetails, { as: 'Details', foreignKey: 'user_id' });
model.hasMany(Project, { as: 'Projects', foreignKey: 'user_id' });
model.belongsToMany(Skill, { as: 'Skills', through: UserRefSkill, foreignKey: 'user_id', otherKey: 'skill_id' });

export default model;
