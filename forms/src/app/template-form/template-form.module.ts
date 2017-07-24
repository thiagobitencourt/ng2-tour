import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TemplateFormComponent } from './template-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    SharedModule
  ],
  declarations: [TemplateFormComponent],
  exports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class TemplateFormModule { }
