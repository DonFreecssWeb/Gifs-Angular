import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchBoxComponent } from '../gifs/components/search-box/search-box.component';



@NgModule({
  declarations: [
    SidebarComponent
   
  ],
  imports: [
    CommonModule
  ],
    exports: [
      SidebarComponent
    ]
  
})
export class SharedModule { }
