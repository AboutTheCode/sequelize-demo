import { DataTypes, Model } from 'sequelize';

import db from '../db';

class ProjectRefSkill extends Model {

}

const model = ProjectRefSkill.init({
  project_id: {
    type: DataTypes.BIGINT(20).UNSIGNED,
    primaryKey: true
  },
  skill_id: {
    type: DataTypes.BIGINT(20).UNSIGNED,
    primaryKey: true
  },
  years: { type: DataTypes.INTEGER.UNSIGNED }
}, {
  sequelize: db,
  tableName: 'projects_refs_skills',
});
export default model;
