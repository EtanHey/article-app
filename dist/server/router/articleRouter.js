"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const articleCont_1 = require("../controller/articleCont");
router
    .post('/create', articleCont_1.createArticle)
    .post('/get-articles', articleCont_1.getArticles)
    .patch('/update-article', articleCont_1.updateArticle)
    .delete('/delete-article', articleCont_1.deleteArticle);
exports.default = router;
//# sourceMappingURL=articleRouter.js.map