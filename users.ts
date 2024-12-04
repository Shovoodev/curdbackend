import express from "express";

import { deleteUser, getAllUsers, updateUser } from "./src/controllers/users";

import { isAuthenticated, isOwner } from "./src/middlewares/index";

export default (router: express.Router) => {
  router.get("/users", isAuthenticated, getAllUsers);
  router.delete("/users/:id", isAuthenticated, isOwner, deleteUser);
  router.patch("/users/:id", isAuthenticated, isOwner, updateUser);
};
