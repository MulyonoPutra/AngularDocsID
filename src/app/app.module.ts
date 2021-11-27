import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/theme/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { MenuComponent } from './components/menu/menu.component';
import { WhatIsAngularComponent } from './pages/what-is-angular/what-is-angular.component';
import { GettingStartedComponent } from './pages/getting-started/getting-started.component';
import { AddingNavigationComponent } from './pages/adding-navigation/adding-navigation.component';
import { ManagingDataComponent } from './pages/managing-data/managing-data.component';
import { FormsForUserInputComponent } from './pages/forms-for-user-input/forms-for-user-input.component';
import { DeployingApplicationsComponent } from './pages/deploying-applications/deploying-applications.component';
import { SetupComponent } from './pages/setup/setup.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroductionComponent,
    MenuComponent,
    WhatIsAngularComponent,
    GettingStartedComponent,
    AddingNavigationComponent,
    ManagingDataComponent,
    FormsForUserInputComponent,
    DeployingApplicationsComponent,
    SetupComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, MaterialModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
