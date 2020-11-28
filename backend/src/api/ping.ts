import { Request, Response } from "express";

export default function ping(_: Request, res: Response) {
  res.json({"ping": "pong"});
}
