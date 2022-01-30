import { DataTypes, Model } from 'sequelize';
import UserDetails from './UserDetails';

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

model.hasOne(UserDetails, { as: 'Details' });
UserDetails.hasOne(UserDetails, { as: 'User' });

export default model;
