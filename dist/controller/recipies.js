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
exports.recipes_controller = void 0;
const recipies_1 = __importDefault(require("../models/recipies"));
exports.recipes_controller = {
    add_recipies: (req, res) => {
        res.send({
            "message": "Recipies Created Successfully",
            data: req === null || req === void 0 ? void 0 : req.body
        });
    },
    uploadPhotos: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        if (!req.file) {
            console.log("No file received");
            return res.send({
                success: false
            });
        }
        else {
            console.log(req === null || req === void 0 ? void 0 : req.file);
            const recipies = yield recipies_1.default.findOne({
                _id: "63da1b17dbe6be75a9a40740"
            });
            recipies.photos = [...recipies.photos, "http://localhost:3000/" + ((_a = req === null || req === void 0 ? void 0 : req.file) === null || _a === void 0 ? void 0 : _a.path)];
            console.log(recipies);
            yield recipies.save();
            console.log('file received');
            return res.send({
                success: true
            });
        }
    })
};
//# sourceMappingURL=recipies.js.map