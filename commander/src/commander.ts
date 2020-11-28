import { DeviceType, DeviceState, EspId } from "@home-porn/models";

export class Commander {
  constructor() {}

  async readState(deviceType: DeviceType): DeviceState {
    // TODO: ESPHome REST API get
    const state = true;
    return state;
  }

  async writeState(espId: EspId, deviceState: DeviceState) {
    // TODO: ESPHome REST API post 
  }
}
