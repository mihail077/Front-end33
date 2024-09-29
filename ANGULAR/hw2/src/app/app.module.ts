import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { SecondModule } from "./second/second.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        SecondModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}