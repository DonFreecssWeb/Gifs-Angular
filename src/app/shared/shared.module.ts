import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchBoxComponent } from '../gifs/components/search-box/search-box.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';



@NgModule({
  declarations: [
    SidebarComponent,
    LazyImageComponent
   
  ],
  imports: [
    CommonModule
  ],
    exports: [
      SidebarComponent,
      LazyImageComponent
    ]
  
})
export class SharedModule { }
