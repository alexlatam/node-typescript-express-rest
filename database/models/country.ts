import { DataTypes  } from "sequelize";
import db from "../conection";

const Country = db.define('Country', {
    country: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default Country;