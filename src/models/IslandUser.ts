import {DataTypes, Model} from 'sequelize';
import {v4 as uuidv4} from 'uuid';
import {sequelize} from '../utility/database';
import {Island} from './Island';
import {User} from './User';

class IslandUser extends Model {}

IslandUser.init(
  {
    id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      defaultValue: uuidv4(),
    },
    islandId: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      field: 'island_id',
      references: {
        model: Island,
        key: 'id',
      },
    },
    userId: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      field: 'user_id',
      references: {
        model: User,
        key: 'id',
      },
    },
  },
  {
    sequelize,
    tableName: 'island_users',
  }
);

export {IslandUser};
