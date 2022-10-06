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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var HomePage_1 = require("./views/Pages/HomePage");
var Login_1 = require("./views/Pages/Login");
var User_1 = require("./views/Pages/User");
var Article_1 = require("./views/Pages/Article");
var axios_1 = require("axios");
function AnimatedRoutes() {
    var navigate = react_router_dom_1.useNavigate();
    var _a = react_1.useState([]), userList = _a[0], setUserList = _a[1];
    var _b = react_1.useState(), currentUser = _b[0], setCurrentUser = _b[1];
    var _c = react_1.useState([]), articleList = _c[0], setArticleList = _c[1];
    var _d = react_1.useState(), article = _d[0], setArticle = _d[1];
    var _e = react_1.useState(''), articleSearchTerm = _e[0], setArticleSearchTerm = _e[1];
    var _f = react_1.useState(''), loginUserId = _f[0], setLoginUserId = _f[1];
    function handleCreate(e) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, firstName, password, lastName, email, position, workSpace, newUser, data, ok, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        e.preventDefault();
                        _a = e.target.elements, firstName = _a.firstName, password = _a.password, lastName = _a.lastName, email = _a.email, position = _a.position, workSpace = _a.workSpace;
                        firstName = firstName.value;
                        lastName = lastName.value;
                        password = password.value;
                        email = email.value;
                        position = position.value;
                        workSpace = workSpace.value;
                        if (!firstName || !lastName || !password || !email || !position || !workSpace)
                            throw new Error('One of the arguments are not provided in handleCreate in AnimatedRoutes');
                        newUser = {
                            firstName: firstName,
                            lastName: lastName,
                            password: password,
                            email: email,
                            position: position,
                            workSpace: workSpace
                        };
                        return [4 /*yield*/, axios_1["default"].post('/api/users/add-user', newUser)];
                    case 1:
                        data = (_b.sent()).data;
                        ok = data.ok;
                        if (!ok)
                            throw new Error('ok is not true');
                        navigate('/Home');
                        e.target.reset();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        console.error(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    function handleLogin(e) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, email, password, data, ok, userId, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        e.preventDefault();
                        _a = e.target.elements, email = _a.email, password = _a.password;
                        email = email.value;
                        password = password.value;
                        return [4 /*yield*/, axios_1["default"].post('/api/users/login', {
                                email: email,
                                password: password
                            })];
                    case 1:
                        data = (_b.sent()).data;
                        ok = data.ok, userId = data.userId;
                        setLoginUserId(userId);
                        if (!ok)
                            throw new Error('ok is not true');
                        navigate('/Home');
                        e.target.reset();
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _b.sent();
                        console.error(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    function handleGetUsers(id) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1["default"].post('/api/users/get-users', {
                                id: id
                            })];
                    case 1:
                        data = (_a.sent()).data;
                        if (data.userList) {
                            setUserList(data.userList);
                            return [2 /*return*/];
                        }
                        if (data.thisUser) {
                            setCurrentUser(data.thisUser);
                            return [2 /*return*/];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        console.log({
                            error: error_3
                        });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    function handleOpenUser(id) {
        try {
            navigate("/User/" + id);
        }
        catch (error) {
            console.error(error);
        }
    }
    function handleCreateNewArticle(e) {
        return __awaiter(this, void 0, void 0, function () {
            var title, content, data, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        e.preventDefault();
                        title = e.target.newArticleTitle.value;
                        content = e.target.newArticleContent.value;
                        return [4 /*yield*/, axios_1["default"].post('/api/articles/create', {
                                title: title,
                                content: content
                            })];
                    case 1:
                        data = (_a.sent()).data;
                        if (!data.error) {
                            getAllArticles();
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        console.error(error_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    function getAllArticles(ownerId) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1["default"].post('/api/articles/get-articles', {
                                ownerId: ownerId
                            })];
                    case 1:
                        data = (_a.sent()).data;
                        setArticleList(data.result);
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        console.error(error_5);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    function handleSetSingleArticle(article) {
        setArticle(article);
        navigate("/Article/" + article._id);
    }
    function handleSearchArticles(searchTerm) {
        if (!searchTerm) {
            return articleList;
        }
        return articleList.filter(function (article) { return article.title.toLowerCase().includes(searchTerm.toLowerCase()); });
    }
    var filteredArticleList = handleSearchArticles(articleSearchTerm);
    function handleSearchTerm(e) {
        setArticleSearchTerm(e.target.value);
    }
    function handleUpdateArticle(ev) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, updateArticleTitle, updateArticleContent;
            return __generator(this, function (_b) {
                try {
                    ev.preventDefault();
                    _a = ev.target.elements, updateArticleTitle = _a.updateArticleTitle, updateArticleContent = _a.updateArticleContent;
                    updateArticleTitle = updateArticleTitle.value;
                    updateArticleContent = updateArticleContent.value;
                    // const {data} = await axios.patch('/api/articles/update-article', {updateArticleTitle, updateArticleContent, articleId});
                    getAllArticles(loginUserId);
                }
                catch (error) {
                    console.log(error);
                }
                return [2 /*return*/];
            });
        });
    }
    function handleDeleteArticle(
    // ownerId: string, articleId: string
    ) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    // const {data} = await axios.delete('/api/articles/delete-article', {data:{ownerId: ownerId, articleId: articleId}});
                    getAllArticles(loginUserId);
                }
                catch (error) {
                    console.log(error);
                }
                return [2 /*return*/];
            });
        });
    }
    return (React.createElement(framer_motion_1.AnimatePresence, null,
        React.createElement(react_router_dom_1.Routes, null,
            React.createElement(react_router_dom_1.Route, { path: '/', element: React.createElement(Login_1["default"], { handleLogin: handleLogin, handleCreate: handleCreate }) }),
            React.createElement(react_router_dom_1.Route, { path: 'Home', element: React.createElement(HomePage_1["default"], { handleDeleteArticle: handleDeleteArticle, handleUpdateArticle: handleUpdateArticle, userList: userList, handleGetUsers: handleGetUsers, handleOpenUser: handleOpenUser, handleCreateNewArticle: handleCreateNewArticle, getAllArticles: getAllArticles, articleList: filteredArticleList, handleSetSingleArticle: handleSetSingleArticle, handleSearchTerm: handleSearchTerm }) }),
            React.createElement(react_router_dom_1.Route, { path: 'User' },
                React.createElement(react_router_dom_1.Route, { path: ':userId', element: React.createElement(User_1["default"], { handleDeleteArticle: handleDeleteArticle, handleUpdateArticle: handleUpdateArticle, handleGetUsers: handleGetUsers, currentUser: currentUser, getAllArticles: getAllArticles, articleList: filteredArticleList, handleSetSingleArticle: handleSetSingleArticle, handleSearchTerm: handleSearchTerm, loginUserId: loginUserId }) })),
            React.createElement(react_router_dom_1.Route, { path: 'Article' },
                React.createElement(react_router_dom_1.Route, { path: ':articleId', element: React.createElement(Article_1["default"], { article: article }) })))));
}
exports["default"] = AnimatedRoutes;
