import createApp from "./api/factory";
import ping from './api/ping';

import Settings from './settings';

const settings = new Settings();
const app = createApp();

app.get("/ping", ping);
app.listen(settings.listenPort, () => { console.log('App is listening on port 3000!') });
