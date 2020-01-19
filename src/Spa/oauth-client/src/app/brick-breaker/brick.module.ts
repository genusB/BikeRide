import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { BrickRoutingModule } from './brick-routing.module';
import { BrickService } from './brick.service';

@NgModule({
  declarations: [IndexComponent],
  providers: [ BrickService],
  imports: [
    CommonModule,
    RouterModule,
    BrickRoutingModule
  ]
})
export class BrickModule { }
