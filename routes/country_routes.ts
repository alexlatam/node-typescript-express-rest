import { Router } from "express";
import { 
    getCountries,
    getCountry,
    createCountry,
    updateCountry,
    deleteCountry,
} from "../controllers/country_controller";

const router = Router();

router.get("/",         getCountries );
router.get("/:id",      getCountry );
router.post("/:id",     createCountry );
router.put("/:id",      updateCountry );
router.delete("/:id",   deleteCountry );

export default router;