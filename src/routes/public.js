import express from "express";
import validate from "express-validation";

import * as userController from "../controllers/user/user.controller";
import * as userValidator from "../controllers/user/user.validator";

const router = express.Router();

//= ===============================
// Public routes
//= ===============================

router.post("/login", validate(userValidator.login), userController.login);
router.post(
  "/register",
  validate(userValidator.register),
  userController.register
);

router.post(
  "/test-email",

  userController.testEmail
);

router.get("/alive", userController.aliveTest);
module.exports = router;
