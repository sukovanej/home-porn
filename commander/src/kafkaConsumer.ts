import { KafkaClient } from "@home-porn/kafka";
import { DeviceIdWithState } from "@home-porn/models";

import { Client } from "./client";

export async function startConsumer(kafkaClient: KafkaClient, client: Client): Promise<void> {
  await kafkaClient.consumeWriteState(
    async (deviceIdWithState: DeviceIdWithState) => {
      await client.writeState(deviceIdWithState.id, deviceIdWithState.state);
    }
  );
}
