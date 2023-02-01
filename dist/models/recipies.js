"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const recipies = new mongoose_1.default.Schema({
    name: String,
    description: String,
    ingredients: [String],
    type: String,
    categories: String,
    photos: [String]
}, {
    timestamps: true
});
const recipesModel = mongoose_1.default.model('Recipies', recipies);
exports.default = recipesModel;
//# sourceMappingURL=recipies.js.map