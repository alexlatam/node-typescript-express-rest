import { Router } from "express";
import { createUser, deleteUser, getUser, getUsers, updateUser, restoreUser } from "../controllers/user_controller";

const router = Router();

router.get("/",       getUsers );
router.get("/:id",    getUser );
router.post("/",      createUser );
router.put("/:id",    updateUser );
router.delete("/:id", deleteUser );
router.post("/:id",   restoreUser );

export default router;