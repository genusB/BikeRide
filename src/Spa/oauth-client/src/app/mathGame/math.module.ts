import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { MathRoutingModule } from './math-routing.module';
import { MathService } from './math.service';

@NgModule({
  declarations: [IndexComponent],
  providers: [ MathService],
  imports: [
    CommonModule,
    RouterModule,
    MathRoutingModule
  ]
})
export class MathModule { }
