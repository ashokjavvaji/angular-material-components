import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormControlsComponent } from './form-controls/form-controls.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { ButtonsIndicatorsComponent } from './buttons-indicators/buttons-indicators.component';
import { ModalsPopupsComponent, DemoSimpleDialog } from './modals-popups/modals-popups.component';
import { TablesComponent } from './tables/tables.component';


@NgModule({
  declarations: [
    AppComponent,
    FormControlsComponent,
    NavigationComponent,
    LayoutsComponent,
    ButtonsIndicatorsComponent,
    ModalsPopupsComponent,
    TablesComponent,
    DemoSimpleDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule//All the modules for Material Design will be available here.
  ],
  providers: [],
  entryComponents: [DemoSimpleDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
