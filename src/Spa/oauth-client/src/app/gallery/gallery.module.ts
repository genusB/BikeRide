import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryService } from './gallery.service';

@NgModule({
  declarations: [IndexComponent],
  providers: [ GalleryService],
  imports: [
    CommonModule,
    RouterModule,
    GalleryRoutingModule
  ]
})
export class GalleryModule { }
