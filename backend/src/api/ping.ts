import { Request, Response } from "express";

export function ping(_: Request, res: Response) {
  res.json({"ping": "pong"});
}
