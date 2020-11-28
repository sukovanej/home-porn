import { Kafka } from "kafkajs";

import { DeviceIdWithState } from "@home-porn/models";

import { ConsumerCallback } from "./types";

export class KafkaClient {
  private clientId: string;
  private brokers: string[];
  private client: Kafka;

  constructor(clientId: string, brokers: string[]) {
    this.clientId = clientId;
    this.brokers = brokers;
    this.client = new Kafka({ clientId: this.clientId, brokers: this.brokers });
  }

  async produceWriteState(deviceIdWithState: DeviceIdWithState) {
    this.produceMessage("write_state", JSON.stringify(deviceIdWithState));
  }

  async produceReadState(deviceIdWithState: DeviceIdWithState) {
    this.produceMessage("read_state", JSON.stringify(deviceIdWithState));
  }

  async consumeReadState(callback: ConsumerCallback) {
    this.consumeTopic("read_state", callback);
  }

  async consumeWriteState(callback: ConsumerCallback) {
    this.consumeTopic("write_state", callback);
  }

  private async produceMessage(topic: string, message: string) {
    const producer = this.client.producer();
    await producer.connect();
    await producer.send({
      topic,
      messages: [{ value: message }],
    });
    await producer.disconnect();
  }

  private async consumeTopic(topic: string, callback: ConsumerCallback) {
    const consumer = this.client.consumer({ groupId: "test-group" });

    await consumer.connect();
    await consumer.subscribe({ topic: topic });

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        callback(JSON.parse(message.value!.toString()));
        consumer.disconnect();
      },
    });
  }
}
