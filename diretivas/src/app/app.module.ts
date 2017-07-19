import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { DiretiveNgswitchComponent } from './diretive-ngswitch/diretive-ngswitch.component';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgifComponent,
    DiretiveNgswitchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
