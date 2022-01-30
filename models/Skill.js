import { DataTypes, Model } from 'sequelize';

import db from '../db';

class Skill extends Model {

}

const model = Skill.init({
  id: {
    type: DataTypes.BIGINT(20).UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  name: { type: DataTypes.STRING(255), allowNull: false }
}, {
  sequelize: db,
  tableName: 'skills',
});
export default model;
