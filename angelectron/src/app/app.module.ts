import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { JQWidgetsModule } from './jqwidgets.module';
import { CommonModule } from '@angular/common';
import 'hammerjs';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePage, LSystemPage, ThreeDGraphicPage, FlockingPage, JQWDashboardPage, JQWKanbanPage } from '@pages/facade';

let _routes: Routes = [
	{ path: "", component: HomePage },
	{ path: "home", component: HomePage },
  { path: "lsys", component: LSystemPage },
  { path: "threed", component: ThreeDGraphicPage },
  { path: "flocking", component: FlockingPage },
  { path: "jqwdashb", component: JQWDashboardPage },
  { path: "jqwkanban", component: JQWKanbanPage }
];

@NgModule({
  declarations: [
  	AppComponent,
    HomePage,
  	LSystemPage,
    ThreeDGraphicPage,
    FlockingPage,
    JQWDashboardPage,
    JQWKanbanPage
  ],
  imports: [
    CommonModule, BrowserModule, BrowserAnimationsModule, MaterialModule, JQWidgetsModule, RouterModule.forRoot(_routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
