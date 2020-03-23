import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolsComponent } from './tools.component';
import { MaterialModule } from '../shared/modules/material.module';
import { toolsRouting } from './tools.routing';

@NgModule({
  imports: [CommonModule, MaterialModule, toolsRouting],
  declarations: [ToolsComponent],
  exports: [ToolsComponent]
})
export class ToolsModule {}
