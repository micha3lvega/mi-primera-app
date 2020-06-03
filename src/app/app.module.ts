import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { PersonaComponent } from './persona/persona.component';
import { SimpleComponent } from './simple/simple.component';
import { BackTickComponent } from './back-tick/back-tick.component';

@NgModule({
  declarations: [AppComponent, PersonasComponent, PersonaComponent, SimpleComponent, BackTickComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
