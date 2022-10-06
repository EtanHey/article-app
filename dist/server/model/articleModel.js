"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ArticleSchema = new mongoose_1.default.Schema({
    ownerId: String,
    firstName: String,
    lastName: String,
    position: String,
    workSpace: String,
    title: String,
    content: String,
});
const Article = mongoose_1.default.model('articles', ArticleSchema);
exports.default = Article;
//# sourceMappingURL=articleModel.js.map