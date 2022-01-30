import { DataTypes, Model } from 'sequelize';

import db from '../db';

class UserRefSkill extends Model {

}

const model = UserRefSkill.init({
  user_id: {
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
  tableName: 'users_ref_skills',
});
export default model;
