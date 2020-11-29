import process from "process";

export class Settings {
  kafkaClientId: string;
  kafkaBrokers: string[];

  constructor() {
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
