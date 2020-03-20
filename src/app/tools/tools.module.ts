import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolsComponent } from './tools.component';
import { MaterialModule } from '../shared/modules/material.module';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [ToolsComponent],
  exports: [ToolsComponent],
})
export class ToolsModule {}
