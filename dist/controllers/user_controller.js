"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
const getUsers = (req, res) => {
    res.json({
        ok: true,
        msg: 'getUsers'
    });
};
exports.getUsers = getUsers;
const getUser = (req, res) => {
    res.json({
        ok: true,
        msg: 'getUser'
    });
};
exports.getUser = getUser;
const createUser = (req, res) => {
    const { name, email, password } = req.body;
    res.json({
        ok: true,
        msg: 'createUser'
    });
};
exports.createUser = createUser;
const updateUser = (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    res.json({
        ok: true,
        msg: 'updateUser'
    });
};
exports.updateUser = updateUser;
const deleteUser = (req, res) => {
    const { id } = req.params;
    res.json({
        ok: true,
        msg: 'deleteUser'
    });
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=user_controller.js.map