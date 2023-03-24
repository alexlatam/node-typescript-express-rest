import { DataTypes  } from "sequelize";
import db from "../conection";

const Like = db.define('Like', {
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

export default Like;