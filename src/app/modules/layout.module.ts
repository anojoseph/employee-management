import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    LayoutRoutingModule,
    CommonModule
  ]
})
export class LayoutModule { }
