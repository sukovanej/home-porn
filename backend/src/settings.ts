import process from "process";

export default class Settings {
  listenPort: number;
  kafkaClientId: string;
  kafkaBrokers: string[];

  constructor() {
    this.listenPort = parseInt(this.ensureEnv("BACKEND_LISTEN_PORT"), 10);
    this.kafkaClientId = this.ensureEnv("BACKEND_CLIENT_ID");
    this.kafkaBrokers = this.ensureEnv("BACKEND_BROKERS").split(",");
  }

  private ensureEnv(name: string): string {
    const variable = process.env[name];

    if (variable === undefined) {
      console.error(`Env-variable ${name}, must be defined. Found ${variable}`);
      process.exit(1);
    }

    return variable;
  }
}
