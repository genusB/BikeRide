import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { BadmakerRoutingModule } from './badmaker-routing.module';
import { BadmakerService } from './badmaker.service';

@NgModule({
  declarations: [IndexComponent],
  providers: [ BadmakerService],
  imports: [
    CommonModule,
    RouterModule,
    BadmakerRoutingModule
  ]
})
export class BadmakerModule { }
