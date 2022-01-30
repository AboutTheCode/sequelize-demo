import { DataTypes, Model } from 'sequelize';

import db from '../db';

class UserDetails extends Model {

}

const model = UserDetails.init({
  user_id: {
    type: DataTypes.BIGINT(20).UNSIGNED,
    primaryKey: true,
    unique: true
  },
  position: { type: DataTypes.STRING(255), allowNull: false },
  salary: { type: DataTypes.STRING(255), allowNull: false },
  english_level: { type: DataTypes.STRING(255), allowNull: false },
}, {
  sequelize: db,
  tableName: 'users_details',
});
export default model;
