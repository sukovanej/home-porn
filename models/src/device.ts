export enum DeviceType {
  Light = "light",
  Blinds = "blinds",
  Thermometer = "thermometer",
}

export type LightState = boolean;
export interface BlindsState {}
export type ThermometerState = number;
export type DeviceState = LightState | BlindsState | ThermometerState;

export type DeviceId = string;
export type RoomId = number;
export type EspId = string;

export interface DeviceIdWithState {
  id: DeviceId;
  state: DeviceState;
}

export interface Device extends DeviceIdWithState {
    espId: EspId;
  roomId: RoomId;
  name: string;
  type: DeviceType;
}
