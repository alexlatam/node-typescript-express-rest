import { Router } from "express";
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controllers/user_controller";

const router = Router();

router.get("/",    getUsers );
router.get("/:id", getUser );
router.post("/",   createUser );
router.get("/:id", updateUser );
router.get("/:id", deleteUser );






export default router;