import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import 'hammerjs';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePage, LSystemPage, ThreeDGraphicPage, FlockingPage } from '@pages/facade';

let _routes: Routes = [
	{ path: "", component: HomePage },
	{ path: "home", component: HomePage },
  { path: "lsys", component: LSystemPage },
  { path: "threed", component: ThreeDGraphicPage },
  { path: "flocking", component: FlockingPage }
];

@NgModule({
  declarations: [
  	AppComponent,
    HomePage,
  	LSystemPage,
    ThreeDGraphicPage,
    FlockingPage
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MaterialModule, RouterModule.forRoot(_routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
