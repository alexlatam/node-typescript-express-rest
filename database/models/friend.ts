import { DataTypes  } from "sequelize";
import db from "../conection";

const Friend = db.define('Friend', {
    user_id1: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    user_id2: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
});

export default Friend;