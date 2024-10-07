"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postController_1 = require("../controllers/postController");
const checkAuth_1 = __importDefault(require("../middleware/checkAuth"));
const postsRoutes = express_1.default.Router();
postsRoutes.get("/communities", checkAuth_1.default, postController_1.getCommunities);
postsRoutes.post("/create", checkAuth_1.default, postController_1.createPost);
postsRoutes.post("/fetch", checkAuth_1.default, postController_1.fetchPosts);
postsRoutes.post("/like", checkAuth_1.default, postController_1.likePost);
postsRoutes.get("/fetch/:id", checkAuth_1.default, postController_1.fetchSinglePost);
postsRoutes.post("/comment", checkAuth_1.default, postController_1.createComment);
postsRoutes.post("/liked", checkAuth_1.default, postController_1.postLiked);
postsRoutes.post("/unlike", checkAuth_1.default, postController_1.unlikePost);
postsRoutes.post("/search", checkAuth_1.default, postController_1.searchPosts);
exports.default = postsRoutes;
