import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import {
  player,
  players,
  gameRoom,
  gameRooms,
  RoomCreate,
  NewPlayer,
} from 'src/app/iAPI.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiURL = environment.apiLocalHost;

  constructor(private http: HttpClient) {}

  getPlayer(playerID: number): Observable<player> {
    return this.http.get<player>(this.apiURL + 'players/' + playerID);
  }

  getPlayers(): Observable<players> {
    return this.http.get<players>(this.apiURL + '/players');
  }

  getRoom(roomID: string): Observable<gameRoom> {
    return this.http.get<gameRoom>(this.apiURL + '/rooms/' + roomID);
  }

  getRooms(): Observable<gameRooms> {
    return this.http.get<gameRooms>(this.apiURL + '/rooms');
  }

  createRoom(roomName: string): Observable<RoomCreate> {
    let newRoom: RoomCreate = { room_name: roomName };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<RoomCreate>(this.apiURL + '/rooms', newRoom, {
      headers,
    });
  }

  createPlayer(playerName: string): Observable<NewPlayer> {
    let newPlayer: NewPlayer = { player_ID: '', playerName: playerName };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post<NewPlayer>(this.apiURL + '/newplayer', newPlayer, {
      headers,
    });
  }

  deleteRoom(roomID: string): Observable<gameRoom> {
    return this.http.delete<gameRoom>(this.apiURL + '/rooms/' + roomID);
  }
}
