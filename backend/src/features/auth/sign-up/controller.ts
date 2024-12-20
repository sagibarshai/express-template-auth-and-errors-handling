import { NextFunction, Request, Response } from "express";
import { NewUserPayload, InsertUserModel, SelectUserModel } from "../models";
import { BadRequestError } from "../../../errors";
import { toHash } from "../../../utils/hashes";
import { createTokenAndSetCookie, deleteTokenCookie } from "../../../utils/jwt";

interface SignUpRequest extends Request {
  body: NewUserPayload;
}

export const signUpController = async (req: SignUpRequest, res: Response, next: NextFunction) => {
  try {
    const hashedPassword = toHash(req.body.password);
    const isUserExists = await SelectUserModel(req.body.email);
    if (isUserExists) {
      deleteTokenCookie(req);
      return next(BadRequestError([{ message: `User with email ${req.body.email} already exists`, field: "email" }]));
    }
    const safeUser = await InsertUserModel({ ...req.body, password: hashedPassword });

    createTokenAndSetCookie(safeUser, req);

    res.status(201).send(safeUser);
  } catch (err) {
    next(err);
  }
};
