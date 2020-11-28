import { DeviceType, DeviceId, EspId } from "@home-porn/models";

export class Repository {
  getDeviceTypeById(id: DeviceId): DeviceType {
    // TODO: implement
    return DeviceType.Light;
  }

  getEspIdByDeviceId(id: DeviceId): EspId {
    // TODO: implement
    return "";
  }
}
