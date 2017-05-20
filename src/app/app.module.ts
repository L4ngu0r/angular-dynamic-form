import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {ContainerComponent} from './components/container/container.component';
import {ContainerDirective} from './components/container/container.directive';
import {GroupComponent} from './components/group/group.component';
import {RenderComponent} from './components/render/render.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ContainerDirective,
    GroupComponent,
    RenderComponent
  ],
  entryComponents: [
    RenderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
