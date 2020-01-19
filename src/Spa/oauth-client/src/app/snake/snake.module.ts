import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { SnakeRoutingModule } from './snake-routing.module';
import { SnakeService } from './snake.service';

@NgModule({
  declarations: [IndexComponent],
  providers: [ SnakeService],
  imports: [
    CommonModule,
    RouterModule,
    SnakeRoutingModule
  ]
})
export class SnakeModule { }
