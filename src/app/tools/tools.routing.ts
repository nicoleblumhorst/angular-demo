import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ToolsComponent } from './tools.component';

export const routes: Routes = [
  { path: '', component: ToolsComponent },
  { path: 'tools', component: ToolsComponent }
];

export const toolsRouting: ModuleWithProviders = RouterModule.forChild(routes);
