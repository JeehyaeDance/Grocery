import {DataTypes, Model} from 'sequelize';
import {v4 as uuidv4} from 'uuid';
import {sequelize} from '../utility/database';

// relationships
import {User} from './User';
import {Island} from './Island';

class GroceryList extends Model {}

GroceryList.init(
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
    isPrivate: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
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
    islandId: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      field: 'island_id',
      references: {
        model: Island,
        key: 'id',
      },
    },
  },
  {
    sequelize,
    tableName: 'lists',
  }
);

export {GroceryList};
