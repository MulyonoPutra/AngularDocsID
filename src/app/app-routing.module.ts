import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddingNavigationComponent } from './pages/adding-navigation/adding-navigation.component';
import { DeployingApplicationsComponent } from './pages/deploying-applications/deploying-applications.component';
import { FormsForUserInputComponent } from './pages/forms-for-user-input/forms-for-user-input.component';
import { GettingStartedComponent } from './pages/getting-started/getting-started.component';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { ManagingDataComponent } from './pages/managing-data/managing-data.component';
import { SetupComponent } from './pages/setup/setup.component';
import { WhatIsAngularComponent } from './pages/what-is-angular/what-is-angular.component';

const routes: Routes = [
  { path: '', component: IntroductionComponent, pathMatch: 'full' },
  { path: 'introduction', component: IntroductionComponent },
  { path: 'what-is-angular', component: WhatIsAngularComponent },
  {
    path: 'start', component: GettingStartedComponent,
  },
  { path: 'adding-navigation', component: AddingNavigationComponent },
  { path: 'managing-data', component: ManagingDataComponent },
  { path: 'forms', component: FormsForUserInputComponent },
  { path: 'deploying-applications', component: DeployingApplicationsComponent },
  { path: 'setup', component: SetupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
