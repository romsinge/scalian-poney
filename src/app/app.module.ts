import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { PoneyComponent } from './components/poney/poney.component';
import { RainbowDirective } from './directives/rainbow.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { HealthPipe } from './pipes/health.pipe';
import { RaceService } from './services/race.service';
import { RaceComponent } from './components/race/race.component';


@NgModule({
  declarations: [
    AppComponent,
    PoneyComponent,
    RainbowDirective,
    HighlightDirective,
    HealthPipe,
    RaceComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [
    HealthPipe,
    RaceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
