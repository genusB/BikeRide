import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { MeetingRoutingModule } from './meeting-routing.module';
import { MeetingService } from './meeting.service';

@NgModule({
  declarations: [IndexComponent],
  providers: [ MeetingService],
  imports: [
    CommonModule,
    RouterModule,
    MeetingRoutingModule
  ]
})
export class MeetingModule { }
