"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const country_controller_1 = require("../controllers/country_controller");
const router = (0, express_1.Router)();
router.get("/", country_controller_1.getCountries);
router.get("/:id", country_controller_1.getCountry);
router.post("/:id", country_controller_1.createCountry);
router.put("/:id", country_controller_1.updateCountry);
router.delete("/:id", country_controller_1.deleteCountry);
exports.default = router;
//# sourceMappingURL=state_routes.js.map