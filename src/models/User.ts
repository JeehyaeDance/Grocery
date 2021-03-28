import {DataTypes, Model} from 'sequelize';
import {v4 as uuidv4} from 'uuid';
import {sequelize} from '../utility/database';

class User extends Model {}

User.init(
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    hashedPassword: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'hashed_password',
    },
  },
  {
    sequelize,
    tableName: 'users',
  }
);

export {User};
