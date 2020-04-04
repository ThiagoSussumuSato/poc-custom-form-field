import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomSelectComponent } from './custom-select.component';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CustomSelectComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    CustomSelectComponent
  ]
})
export class CustomSelectModule { }
