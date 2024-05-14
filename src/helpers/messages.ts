import type { Response } from "express";

export async function Failure(message: string, res: Response, status: number = 400): Promise<Response> {
  return res.send({ error: message }).status(status);
}
