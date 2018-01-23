import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormControlsComponent } from './form-controls/form-controls.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { TablesComponent } from './tables/tables.component';
import { ModalsPopupsComponent } from './modals-popups/modals-popups.component';
import { ButtonsIndicatorsComponent } from './buttons-indicators/buttons-indicators.component';

const routes: Routes = [
  {
    path: "forms",
    component: FormControlsComponent
  }, {
    path: 'navs',
    component: NavigationComponent
  }, {
    path: 'layouts',
    component: LayoutsComponent
  }, {
    path: 'buttons',
    component: ButtonsIndicatorsComponent
  }, {
    path: 'modals',
    component: ModalsPopupsComponent
  }, {
    path: 'tables',
    component: TablesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
