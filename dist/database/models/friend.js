"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conection_1 = __importDefault(require("../conection"));
const Friend = conection_1.default.define('Friend', {
    user_id1: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    user_id2: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
});
exports.default = Friend;
//# sourceMappingURL=friend.js.map