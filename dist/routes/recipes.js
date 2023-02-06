"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const recipies_1 = require("../controller/recipies");
const multer_settings_1 = __importDefault(require("../middlewares/multer-settings"));
const router = express_1.default.Router();
router.post('/add_recipies', recipies_1.recipes_controller === null || recipies_1.recipes_controller === void 0 ? void 0 : recipies_1.recipes_controller.add_recipies);
router.post('/add_recipies_image', multer_settings_1.default.single('file'), recipies_1.recipes_controller === null || recipies_1.recipes_controller === void 0 ? void 0 : recipies_1.recipes_controller.uploadPhotos);
exports.default = router;
//# sourceMappingURL=recipes.js.map