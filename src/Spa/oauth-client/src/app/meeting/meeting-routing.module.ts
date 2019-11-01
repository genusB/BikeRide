import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/authentication/auth.guard';
import { IndexComponent } from './index/index.component';
import { Shell } from '../shell/shell.service';

const routes: Routes = [
Shell.childRoutes([
    { path: 'meeting', component: IndexComponent, canActivate: [AuthGuard] }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class MeetingRoutingModule { }