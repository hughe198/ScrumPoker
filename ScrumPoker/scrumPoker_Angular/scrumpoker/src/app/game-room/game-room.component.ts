import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from '../api.service';
import { gameRoom } from '../iAPI.interface';

@Component({
  selector: 'app-game-room',
  templateUrl: './game-room.component.html',
  styleUrls: ['./game-room.component.scss'],
})
export class GameRoomComponent implements OnInit {
  @Input() roomKey: string = '';

  @Output() closeRoomEmitter: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  roomDetails!: gameRoom;
  roomName: string = '';
  visible = true;

  constructor(private apiService: ApiService) {}

  initialiseRoom(roomID: string) {
    this.apiService.getRoom(roomID).subscribe((data: gameRoom) => {
      this.roomDetails = data;
      this.roomName = this.roomDetails.room_name;
    });
  }

  ngOnInit(): void {
    this.initialiseRoom(this.roomKey);
  };
  closeRoom(){
    this.closeRoomEmitter.emit(true);
    this.visible = false;

};
};