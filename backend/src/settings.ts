import process from "process";

export default class Settings {
  listenPort: number;

  constructor() {
    const listenPortStr = process.env.BACKEND_LISTEN_PORT;

    if (listenPortStr === undefined) {
      console.error(`listePort not defined ${listenPortStr}`);
      process.exit(1);
    }

    this.listenPort = parseInt(listenPortStr, 10);
  }
}
