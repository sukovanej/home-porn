import { DeviceState, DeviceId } from "@home-porn/models";
import { KafkaClient } from "@home-porn/kafka";

import { Commander } from "./commander";
import { Repository } from "./repository";

export class Client {
  constructor(
    private kafkaClient: KafkaClient,
    private commander: Commander,
    private repository: Repository
  ) {}

  async readState(id: DeviceId) {
    const deviceType = this.repository.getDeviceTypeById(id);
    const state = this.commander.readState(deviceType);
    await this.kafkaClient.produceReadState({ id, state });
  }

  async writeState(id: DeviceId, deviceState: DeviceState) {
    const espId = this.repository.getEspIdByDeviceId(id);
    await this.commander.writeState(espId, deviceState);
  }
}
