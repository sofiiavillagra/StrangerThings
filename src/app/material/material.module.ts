import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponent } from './material.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    MaterialComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
  ]
})
export class MaterialModule { }
