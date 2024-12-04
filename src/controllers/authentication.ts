import express from "express";
import { createUser, getUserByEmail } from "../db/users";
import { authentication, random } from "../helpers";

export const login = async (
  req: express.Request,
  res: express.Response
): Promise<any> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.sendStatus(400);
    }
    const user = await getUserByEmail(email).select(
      "+authentication.salt +authentication.password"
    );

    console.log({ user });

    if (!user) {
      res.sendStatus(400);
      res.end();
    }
    const expectdHash = authentication(user.authentication.salt, password);

    console.log({ expectdHash });

    if (user.authentication.password !== expectdHash) {
      res.sendStatus(403);
      res.end();
    }
    const salt = random();
    user.authentication.sessionToken = authentication(
      salt,
      user._id.toString()
    ); //buji nai
    await user.save();

    res.cookie("VIDEO", user.authentication.sessionToken, {
      domain: "localhost",
      path: "/",
    });

    console.log("end==>");

    res.status(200).json(user);
  } catch (error) {
    console.log("here");

    console.error(error);
    res.sendStatus(400);
  }
};

export const register = async (
  req: express.Request,
  res: express.Response
): Promise<any> => {
  // in new update i have to use : <Promise<any> to run this script otherwise it will always cause this error
  try {
    const { email, password, username } = req.body;

    if (!email || !password || !username) {
      return res.sendStatus(400);
    }
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return res.sendStatus(400);
    }
    const salt = random();
    const user = await createUser({
      email,
      username,
      authentication: {
        salt,
        password: authentication(salt, password),
      },
    });
    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
