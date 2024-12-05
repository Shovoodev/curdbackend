import express from "express";
import authentication from "./authentication";
import users from "../../users";
import expenses from "./expenses";
import typeexpenses from "./typeexpensesrouter";

const router = express.Router();

export default (): express.Router => {
  authentication(router);
  users(router);
  expenses(router);
  typeexpenses(router);
  return router;
};
