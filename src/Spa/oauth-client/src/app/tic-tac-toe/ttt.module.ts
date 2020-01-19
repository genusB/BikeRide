import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { TttRoutingModule } from './ttt-routing.module';
import { TttService } from './ttt.service';

@NgModule({
  declarations: [IndexComponent],
  providers: [ TttService],
  imports: [
    CommonModule,
    RouterModule,
    TttRoutingModule
  ]
})
export class TttModule { }
