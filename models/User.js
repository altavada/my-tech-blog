import { Model, DataTypes } from 'sequelize';
import { compareSync, hash } from 'bcrypt';
import sequelize from '../config/connection';

class User extends Model {
  checkPassword(loginPw) {
    return compareSync(loginPw, this.password);
  }
};

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            }
        }
    },
    {
        hooks: {
            beforeCreate: async (newUser) => {
                newUser.password = await hash(newUser.password, 10);
                return newUser;
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'user'
    }
);

export default User;
