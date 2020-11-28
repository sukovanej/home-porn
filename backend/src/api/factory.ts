import express from "express";

import { KafkaClient } from "@home-porn/kafka";

import Settings from "../settings";
import { ping } from "./ping";
import { DevicesController } from "./devices";

export default function createApp(settings: Settings): express.Application {
  // express
  const app = express();
  app.use(express.json());

  // dependencies
  const kafkaClient = new KafkaClient(
    settings.kafkaClientId,
    settings.kafkaBrokers
  );
  const devicesController = new DevicesController(kafkaClient);

  // register endpoints
  app.get("/ping", ping);
  app.patch("/devices/:deviceId/state", (req: express.Request, res: express.Response) => {
    devicesController.patchState(req, res);
  });

  return app;
}
