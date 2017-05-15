import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {ContainerComponent} from './components/container/container.component';
import {ContainerDirective} from './components/container/container.directive';
import {GroupComponent} from './components/group/group.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ContainerDirective,
    GroupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
