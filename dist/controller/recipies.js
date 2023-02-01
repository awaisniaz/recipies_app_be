"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recipes_controller = void 0;
exports.recipes_controller = {
    add_recipies: (req, res) => {
        res.send({
            "message": "Recipies Created Successfully",
            data: req === null || req === void 0 ? void 0 : req.body
        });
    }
};
//# sourceMappingURL=recipies.js.map