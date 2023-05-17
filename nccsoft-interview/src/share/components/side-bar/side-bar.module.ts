import { NgModule } from '@angular/core';
import { SideBarComponent } from './side-bar.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [SideBarComponent],
  exports: [SideBarComponent],
})
export class SideBarModule { }
