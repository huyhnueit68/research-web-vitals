import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CRMGoogleAnalytiscService } from './service/crmgoogle-analytisc.service';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGoogleAnalyticsModule.forRoot('MEASUREMENT-ID'),
    NgxGoogleAnalyticsRouterModule
  ],
  providers: [CRMGoogleAnalytiscService],
  bootstrap: [AppComponent]
})
export class AppModule { }
