import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import {RenderComponent} from './components/render/render.component';
import {GroupComponent} from './components/group/group.component';
import {ContainerDirective} from './components/container/container.directive';
import {ContainerComponent} from './components/container/container.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ContainerComponent,
        ContainerDirective,
        GroupComponent,
        RenderComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Dynamic Angular Forms');
  }));
});
