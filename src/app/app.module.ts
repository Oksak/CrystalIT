import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { AutomatedBusinessComponent } from './automated-business/automated-business.component';
import { MainThemesComponent } from './main-themes/main-themes.component';
import { FormBlockComponent } from './form-block/form-block.component';
import { AdvantageCompanyComponent } from './advantage-company/advantage-company.component';
import { StagesComponent } from './stages/stages.component';
import {ScrollToModule} from 'ng2-scroll-to';
import { CountdownTimerModule } from 'ngx-countdown-timer';






@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    AutomatedBusinessComponent,
    MainThemesComponent,
    FormBlockComponent,
    AdvantageCompanyComponent,
    StagesComponent,
  ],
  imports: [
    BrowserModule,
    ScrollToModule.forRoot(),
    CountdownTimerModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
