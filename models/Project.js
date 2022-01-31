import { DataTypes, Model } from 'sequelize';

import db from '../db';

class Project extends Model {

}

const model = Project.init({
  id: {
    type: DataTypes.BIGINT(20).UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: { type: DataTypes.BIGINT(20).UNSIGNED },
  name: { type: DataTypes.STRING(255), allowNull: false },
  created_at: { type: DataTypes.DATE },
  updated_at: { type: DataTypes.DATE },
  deleted_at: { type: DataTypes.DATE, allowNull: true },
  created_by: { type: DataTypes.BIGINT(20).UNSIGNED, allowNull: true }
}, {
  scopes: {
    activeProjects() {
      return {
        where: { deleted_at: null }
      };
    }
  },
  sequelize: db,
  tableName: 'projects',
});
export default model;
