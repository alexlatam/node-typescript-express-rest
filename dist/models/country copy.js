"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conection_1 = __importDefault(require("../database/conection"));
const Country = conection_1.default.define('Country', {
    country: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
});
exports.default = Country;
//# sourceMappingURL=country%20copy.js.map