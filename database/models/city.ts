import { DataTypes  } from "sequelize";
import db from "../conection";

const City = db.define('City', {
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

export default City;