import { Request, Response } from "express";

import { KafkaClient } from "@home-porn/kafka";

export class DevicesController {
  constructor(private readonly kafkaClient: KafkaClient) {}

  patchState(req: Request, res: Response) {
    const { deviceId } = req.params;
    const { state } = req.body;
    this.kafkaClient.produceWriteState({ deviceId, state });
    res.json({ status: "ok" });
  }
}
