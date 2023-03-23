"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user_controller");
const router = (0, express_1.Router)();
router.get("/", user_controller_1.getUsers);
router.get("/:id", user_controller_1.getUser);
router.post("/", user_controller_1.createUser);
router.get("/:id", user_controller_1.updateUser);
router.get("/:id", user_controller_1.deleteUser);
exports.default = router;
//# sourceMappingURL=user_routes.js.map