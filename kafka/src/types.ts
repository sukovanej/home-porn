import { DeviceIdWithState } from "@home-porn/models";

export type ConsumerCallback = (deviceIdWithState: DeviceIdWithState) => Promise<void>;
