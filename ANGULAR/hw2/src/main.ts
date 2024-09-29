
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";

platformBrowserDynamic().bootstrapModule(AppModule)
// .then(d => console.log(d, 'bootstrapeModule'))
.catch(error => console.log(error, 'bootstrapeModule'))



