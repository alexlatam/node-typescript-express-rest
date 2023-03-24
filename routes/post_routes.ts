import { Router } from "express";
import { 
    getPosts,
    getPost,
    getPostsByUserId,
    createPost,
    updatePost,
    deletePost
} from "../controllers/post_controller";

const router = Router();

router.get("/",         getPosts );
router.get("/:id",      getPost );
router.get("/user/:id", getPostsByUserId );
router.post("/:id",     createPost );
router.put("/:id",      updatePost );
router.delete("/:id",   deletePost );

export default router;