"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = exports.updatePost = exports.createPost = exports.getPost = exports.getPostsByUserId = exports.getPosts = void 0;
const user_1 = __importDefault(require("../database/models/user"));
const getPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield user_1.default.findAll({
        where: { status: true }
    });
    res.json({ posts });
});
exports.getPosts = getPosts;
const getPostsByUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_1.default.findAll({
        where: { status: true, user_id: req.params.id }
    });
    res.json({ users });
});
exports.getPostsByUserId = getPostsByUserId;
const getPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const post = yield user_1.default.findByPk(id);
    if (post) {
        return res.json(post);
    }
    res.status(404).json({
        msg: `No existe un post con el id ${id}`
    });
});
exports.getPost = getPost;
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const post = new user_1.default(body);
        yield post.save();
        res.json(post);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.createPost = createPost;
const updatePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const post = yield user_1.default.findByPk(id);
        if (!post) {
            return res.status(400).json({
                msg: 'No existe un post con el id ' + id
            });
        }
        yield user_1.default.update(body);
        res.json(post);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.updatePost = updatePost;
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const post = yield user_1.default.findByPk(id);
        if (!post) {
            return res.status(400).json({
                msg: 'No existe un usuario con el id ' + id
            });
        }
        yield user_1.default.update({ status: false });
        res.json(post);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.deletePost = deletePost;
//# sourceMappingURL=post_controller%20copy.js.map