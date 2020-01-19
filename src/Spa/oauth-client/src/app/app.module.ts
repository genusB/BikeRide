import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// used to create fake backend
import { FakeBackendProvider } from './shared/mocks/fake-backend-interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ConfigService } from './shared/config.service';

import { AuthCallbackComponent } from './auth-callback/auth-callback.component';


/* Module Imports */
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { AccountModule } from './account/account.module';
import { ShellModule } from './shell/shell.module';
import { TopSecretModule } from './top-secret/top-secret.module';
import { SharedModule } from './shared/shared.module';
import { MapModule} from './map/map.module';
import { MeetingModule } from './meeting/meeting.module';
import { BadmakerModule } from './badmaker/badmaker.module';
import { MathModule } from './mathGame/math.module';
import { TttModule } from './tic-tac-toe/ttt.module';
import { GalleryModule } from './gallery/gallery.module';
import { SnakeModule } from './snake/snake.module';
import { BrickModule } from './brick-breaker/brick.module';


@NgModule({
  declarations: [
    AppComponent,
    AuthCallbackComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    HomeModule,
    MapModule,
    MeetingModule,
    BadmakerModule,
    MathModule,
    TttModule,
    GalleryModule,
    SnakeModule,
    BrickModule,
    AccountModule,
    TopSecretModule,
    AppRoutingModule,
    ShellModule,
    SharedModule,
  ],
  providers: [
    ConfigService,
    // provider used to create fake backend
    FakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
