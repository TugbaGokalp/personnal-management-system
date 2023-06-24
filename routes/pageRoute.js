// express route'in calistirildigi dosya

import express from 'express';
import * as pageController from "../controllers/pageController.js"; // default olarak export edilmedigi icin bu sekide aldik

import * as authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").get(authMiddleware.authenticateToken, pageController.getIndexPage)
router.route("/about").get(pageController.getAboutPage);
router.route("/register").get(pageController.getRegisterPage);
router.route("/login").get(pageController.getLoginPage);

export default router;