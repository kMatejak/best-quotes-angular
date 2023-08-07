import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [AppComponent, MenuComponent],
  imports: [],
  providers: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}