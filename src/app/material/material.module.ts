import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatProgressSpinnerModule, MatIconModule, MatNativeDateModule } from '@angular/material';
//forms modules
import { MatButtonModule, MatInputModule, MatCheckboxModule, MatDatepickerModule, MatSelectModule, MatFormFieldModule, MatRadioModule, MatSliderModule, MatSlideToggleModule, MatAutocompleteModule } from '@angular/material';
//navigation
import {MatToolbarModule, MatMenuModule, MatSidenavModule } from '@angular/material';
//layout modules
import { MatExpansionModule, MatListModule, MatCardModule, MatGridListModule, MatStepperModule, MatTabsModule } from '@angular/material';
//popups
import { MatDialogModule, MatTooltipModule } from '@angular/material';
//table
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
//buttons
import { MatButtonToggleModule, MatChipsModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, 
    MatCardModule, MatIconModule, MatCheckboxModule, MatExpansionModule, MatDatepickerModule,
    MatNativeDateModule, MatSelectModule, MatFormFieldModule, MatRadioModule, MatSliderModule,
    MatSlideToggleModule, MatMenuModule, MatSidenavModule, MatListModule, MatGridListModule,
    MatStepperModule, MatTabsModule, MatDialogModule, MatTooltipModule, MatTableModule, 
    MatPaginatorModule, MatSortModule, MatButtonToggleModule, MatChipsModule, 
    MatAutocompleteModule], 
  exports: [MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, 
    MatCardModule, MatIconModule, MatCheckboxModule, MatExpansionModule, MatDatepickerModule, 
    MatNativeDateModule, MatSelectModule, MatFormFieldModule, MatRadioModule, MatSliderModule, 
    MatSlideToggleModule, MatMenuModule, MatSidenavModule, MatListModule, MatGridListModule, 
    MatStepperModule, MatTabsModule, MatDialogModule, MatTooltipModule, MatTableModule, 
    MatPaginatorModule, MatSortModule, MatButtonToggleModule, MatChipsModule, 
    MatAutocompleteModule]
})
export class MaterialModule { }
