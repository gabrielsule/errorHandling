import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';
import {
  HttpClientModule,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import {
  Globals
} from './help/Globals';
import {
  Interceptor
} from './help/interceptor';

import {
  AppComponent
} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    },
    Globals
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
