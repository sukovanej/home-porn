import createApp from "./api/factory";

import Settings from "./settings";

const settings = new Settings();
const app = createApp(settings);

app.listen(settings.listenPort, () => {
  console.log(`App is listening on port ${settings.listenPort}!`);
});
