import {DataTypes, Model} from 'sequelize';
import {v4 as uuidv4} from 'uuid';
import {sequelize} from '../utility/database';

// relationships
import {User} from './User';
import {Island} from './Island';

class Invite extends Model {}

Invite.init(
  {
    id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      defaultValue: uuidv4(),
    },
    isAccepted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      field: 'is_accepted',
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    senderId: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      field: 'sender_id',
      references: {
        model: User,
        key: 'id',
      },
    },
    inviteeId: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      field: 'invitee_id',
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
    tableName: 'invites',
  }
);

export {Island};
