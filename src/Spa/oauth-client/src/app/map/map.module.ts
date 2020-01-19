import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { MapRoutingModule } from './map-routing.module';
import { MapService } from './map.service';

@NgModule({
  declarations: [IndexComponent],
  providers: [ MapService],
  imports: [
    CommonModule,
    RouterModule,
    MapRoutingModule
  ]
})
export class MapModule { }
