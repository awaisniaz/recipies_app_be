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
exports.recipies_resolver = void 0;
const recipies_1 = __importDefault(require("../models/recipies"));
// import { GraphQLUpload } from 'graphql-upload'
exports.recipies_resolver = {
    // Upload: GraphQLUpload,
    Query: {
        add_recipies: (parent, args, context) => __awaiter(void 0, void 0, void 0, function* () {
            var _a, _b, _c;
            const newItem = new recipies_1.default(Object.assign({}, args === null || args === void 0 ? void 0 : args.input));
            console.log((_a = args === null || args === void 0 ? void 0 : args.input) === null || _a === void 0 ? void 0 : _a.ingredients);
            newItem.ingredients = (_c = (_b = args === null || args === void 0 ? void 0 : args.input) === null || _b === void 0 ? void 0 : _b.ingredients) === null || _c === void 0 ? void 0 : _c.split(',');
            const response = yield newItem.save();
            console.log(response);
            if (response) {
                return response;
            }
            else {
                return "Please try Again Something Went Wrong";
            }
        }),
        getRecipies: () => __awaiter(void 0, void 0, void 0, function* () {
            const recipies = yield (recipies_1.default === null || recipies_1.default === void 0 ? void 0 : recipies_1.default.find());
            console.log(recipies);
            if (recipies) {
                return recipies;
            }
            else {
                return "Some technical Error Please Try Again";
            }
        }),
        getRecipiesById: (parent, args, context) => __awaiter(void 0, void 0, void 0, function* () {
            const id = args.input.id;
            console.log(id);
            const recipie = yield recipies_1.default.findOne({ _id: id });
            if (recipie) {
                return recipie;
            }
            return {};
        })
    },
    // Mutation: {
    //     uploadImages: async (parent, args) => {
    //         const { file } = args
    //         return file
    //     }
    // }
};
//# sourceMappingURL=recipies_resolver.js.map