import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LobbyComponent } from './lobby/lobby.component';
import { GameRoomComponent } from './game-room/game-room.component';
import { PlayerComponent } from './player/player.component';
import { VoteCardComponent } from './vote-card/vote-card.component';
import { VoteResultComponent } from './vote-result/vote-result.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { UserManagementComponent } from './user-management/user-management.component';
import { LoginComponent } from './user-management/login/login.component';
import { RegistrationComponent } from './user-management/registration/registration.component';
import { UserProfileComponent } from './user-management/user-profile/user-profile.component';
import { SessionManagementComponent } from './session-management/session-management.component';
import { SessionListComponent } from './session-management/session-list/session-list.component';
import { SessionDetailComponent } from './session-management/session-detail/session-detail.component';
import { StoryManagementComponent } from './story-management/story-management.component';
import { StoryListComponent } from './story-management/story-list/story-list.component';
import { StoryDetailComponent } from './story-management/story-detail/story-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    LobbyComponent,
    GameRoomComponent,
    PlayerComponent,
    VoteCardComponent,
    VoteResultComponent,
    HeaderComponent,
    FooterComponent,
    UserManagementComponent,
    LoginComponent,
    RegistrationComponent,
    UserProfileComponent,
    SessionManagementComponent,
    SessionListComponent,
    SessionDetailComponent,
    StoryManagementComponent,
    StoryListComponent,
    StoryDetailComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
