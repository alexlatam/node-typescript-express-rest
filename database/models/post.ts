import { DataTypes  } from "sequelize";
import db from "../conection";

const Post = db.define('Post', {
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

export default Post;