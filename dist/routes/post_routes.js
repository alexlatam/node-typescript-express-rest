"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_controller_1 = require("../controllers/post_controller");
const router = (0, express_1.Router)();
router.get("/", post_controller_1.getPosts);
router.get("/:id", post_controller_1.getPost);
router.get("/user/:id", post_controller_1.getPostsByUserId);
router.post("/:id", post_controller_1.createPost);
router.put("/:id", post_controller_1.updatePost);
router.delete("/:id", post_controller_1.deletePost);
exports.default = router;
//# sourceMappingURL=post_routes.js.map