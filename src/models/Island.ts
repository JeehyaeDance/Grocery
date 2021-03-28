import {DataTypes, Model} from 'sequelize';
import {v4 as uuidv4} from 'uuid';
import {sequelize} from '../utility/database';

// relationships
import {User} from './User';

class Island extends Model {}

Island.init(
  {
    id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      defaultValue: uuidv4(),
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    ownerId: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      field: 'owner_id',
      references: {
        model: User,
        key: 'id',
      },
    },
  },
  {
    sequelize,
    tableName: 'islands',
  }
);

export {Island};
