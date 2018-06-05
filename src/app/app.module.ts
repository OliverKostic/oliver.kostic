import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';


import { AppComponent } from './app.component';


import { MDBBootstrapModule } from './../../angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { TileGridComponent } from './tile-grid/tile-grid.component';
import { TileBioComponent } from './tile-bio/tile-bio.component';
import { TileAppinfoComponent } from './tile-appinfo/tile-appinfo.component';
import { TileContactComponent } from './tile-contact/tile-contact.component';
import { TileHobbyComponent } from './tile-hobby/tile-hobby.component';

import { registerLocaleData } from '@angular/common';
import localeSk from '@angular/common/locales/sk';
import localeSkExtra from '@angular/common/locales/extra/sk';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


registerLocaleData(localeSk, 'sk-SK', localeSkExtra);

const appRoutes: Routes = [
  { path: 'home', component: TileGridComponent, data: {state: 'home'} },
  { path: 'bio', component: TileBioComponent, data: {state: 'nw'} },
  { path: 'hobby', component: TileHobbyComponent, data: {state: 'ne'} },
  { path: 'appinfo', component: TileAppinfoComponent, data: {state: 'sw'} },
  { path: 'contact', component: TileContactComponent, data: {state: 'se'} },
  { path: '', redirectTo: '/home', pathMatch: 'full', data: {state: 'home'} }
];



@NgModule({
  declarations: [
    AppComponent,
    TileGridComponent,
    TileBioComponent,
    TileAppinfoComponent,
    TileContactComponent,
    TileHobbyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'sk' }],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
