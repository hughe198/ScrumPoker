import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { gameRooms } from '../iAPI.interface';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss'],
})
export class LobbyComponent implements OnInit {
  private apiURL = environment.apiLocalHost;
  gameRoomUpdate!: EventSource;
  inputValue: string = '';
  gameRooms: gameRooms = {};
  playerName: string = '';
  playerID: string = '';

  showLobby: Boolean = true;
  roomKey = '';
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getRooms();
    this.setupEventSource();
  }

  getRooms() {
    this.apiService.getRooms().subscribe(
      (data) => {
        console.log('Rooms fetched successfully:', data);
        this.gameRooms = data;
      },
      (error) => {
        console.error('Error fetching rooms:', error);
      }
    );
  }

  setupEventSource() {
    console.log('Setting up EventSource for game room updates...');
    this.gameRoomUpdate = new EventSource(this.apiURL + '/updategamerooms');

    this.gameRoomUpdate.onopen = (event) => {
      console.log('EventSource connection opened:', event);
    };

    this.gameRoomUpdate.onerror = (event) => {
      console.error('EventSource encountered an error:', event);
    };

    this.gameRoomUpdate.addEventListener('gameroom_update', (event) => {
      try {
        const parsedData = JSON.parse(event.data);
        console.log('Received gameroom_update event:', parsedData);
        if (parsedData && parsedData.game_rooms) {
          this.gameRooms = parsedData.game_rooms;
        }
      } catch (error) {
        console.error('Error parsing event data:', error);
      }
    });
  }

  createRoom() {
    this.apiService.createRoom(this.inputValue).subscribe(
      (response) => {
        console.log('POST Request Successful', response);
        this.getRooms();
      },
      (error) => {
        console.error('POST Request Error', error);
      }
    );
  }

  createPlayer() {
    this.apiService.createPlayer(this.playerName).subscribe(
      (response) => {
        console.log('POST Request Successful', response);
        this.playerID = response.player_ID;
      },
      (error) => {
        console.error('Error creating player', error);
      }
    );
  }

  enterRoom(roomID: string) {
    this.showLobby = false;
    this.roomKey = roomID;
  }

  closeRoom(): void {
    this.showLobby = true;
  }

  deleteRoom(roomID: string) {
    this.apiService.deleteRoom(roomID).subscribe((Response) => {
      console.log('Delete Request Successful', Response);
      this.getRooms();
    });
  }

  ngOnDestroy() {
    this.gameRoomUpdate.close();
  }
}
