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
exports.deleteArticle = exports.updateArticle = exports.getArticles = exports.createArticle = void 0;
const articleModel_1 = __importDefault(require("../model/articleModel"));
const jwt_simple_1 = __importDefault(require("jwt-simple"));
const secret = process.env.JWT_SECRET;
const createArticle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userInformation } = req.cookies;
        const { title, content } = req.body;
        if (title.length < 2)
            throw new Error('Please insert a title longer than 2 characters');
        if (!userInformation)
            throw new Error('no userInformation in createArticle in articleCont');
        const decodedInformation = jwt_simple_1.default.decode(userInformation, secret);
        const articleParams = {
            title,
            content,
            ownerId: decodedInformation.id,
            firstName: decodedInformation.firstName,
            lastName: decodedInformation.lastName,
            position: decodedInformation.position,
            workSpace: decodedInformation.workSpace,
        };
        const newArticle = new articleModel_1.default(articleParams);
        const articleInformation = yield newArticle.save();
        res.send({ ok: true, article: articleInformation });
    }
    catch (error) {
        console.error(error.message);
        res.send({ ok: false, error: error.message });
    }
});
exports.createArticle = createArticle;
function getArticles(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { ownerId } = req.body;
            if (!ownerId) {
                const result = yield articleModel_1.default.find({});
                res.send({ ok: true, result });
                return;
            }
            if (ownerId) {
                const result = yield articleModel_1.default.find({ ownerId });
                res.send({ ok: true, result });
                return;
            }
        }
        catch (error) {
            console.error(error.message);
            res.send({ ok: false, error: error.message });
        }
    });
}
exports.getArticles = getArticles;
function updateArticle(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { updateArticleTitle, updateArticleContent, articleId } = req.body;
            if (!updateArticleTitle || !updateArticleContent || !articleId)
                throw new Error('something is missing at updateArticle -articleCont');
            const updatedArticle = yield articleModel_1.default.updateOne({ _id: articleId }, { title: updateArticleTitle, content: updateArticleContent });
            console.log(updatedArticle);
            res.send({ ok: true, updatedArticle });
        }
        catch (error) {
            console.log(error);
            res.send({ ok: false, error: error.message });
        }
    });
}
exports.updateArticle = updateArticle;
function deleteArticle(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { articleId, ownerId } = req.body;
            const loggedInUser = req.cookies;
            const { userInformation } = loggedInUser;
            const loggedInUserId = jwt_simple_1.default.decode(userInformation, secret).id;
            if (!loggedInUser || !ownerId)
                throw new Error('Login and try again deleteArticle -articleCont');
            if (ownerId === loggedInUserId) {
                const deletedArticle = yield articleModel_1.default.findOneAndDelete({ _id: articleId });
                console.log(deletedArticle);
                res.send({ ok: true, deletedArticle: deletedArticle });
            }
        }
        catch (error) {
            console.log(error);
            res.send({ ok: false, error: error.message });
        }
    });
}
exports.deleteArticle = deleteArticle;
//# sourceMappingURL=articleCont.js.map