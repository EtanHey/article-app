"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var framer_motion_1 = require("framer-motion");
var Back_1 = require("../Components/Back");
var UserNavBar_1 = require("../Components/UserNavBar");
var AllArticles_1 = require("../Components/AllArticles");
function User(props) {
    var _a = react_1.useTransition(), isPending = _a[0], startTransition = _a[1];
    var params = react_router_dom_1.useParams();
    var userId = params.userId;
    var handleGetUsers = props.handleGetUsers, currentUser = props.currentUser, getAllArticles = props.getAllArticles, articleList = props.articleList, handleSetSingleArticle = props.handleSetSingleArticle, handleSearchTerm = props.handleSearchTerm, loginUserId = props.loginUserId, handleUpdateArticle = props.handleUpdateArticle, handleDeleteArticle = props.handleDeleteArticle;
    react_1.useEffect(function () {
        startTransition(function () {
            handleGetUsers(userId);
            getAllArticles(userId);
        });
        return function () { };
    }, []);
    return (React.createElement(framer_motion_1.motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 2 } },
        React.createElement(Back_1["default"], null),
        React.createElement(UserNavBar_1["default"], { currentUser: currentUser }),
        userId,
        React.createElement("p", null, "here"),
        isPending ? React.createElement("p", null, "Loading...") : React.createElement(AllArticles_1["default"], { handleUpdateArticle: handleUpdateArticle, handleDeleteArticle: handleDeleteArticle, articleList: articleList, handleSetSingleArticle: handleSetSingleArticle, handleSearchTerm: handleSearchTerm, currentUser: currentUser, loginUserId: loginUserId })));
}
exports["default"] = User;
