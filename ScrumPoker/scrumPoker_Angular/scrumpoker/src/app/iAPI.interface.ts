export interface RoomCreate {
  room_name: string;
}
export interface PlayerID {
  playerID: number;
}

export interface NewPlayer {
  player_ID: string;
  playerName: string;
}
export interface Vote {
  playerID: number;
  roomID: string;
  vote: number;
}
export interface gameRoom {
  room_name: string;
  players: [];
}
export interface gameRooms {
  [key: number]: gameRoom;
}

export interface players {
  playerID: { player_name: string };
}
export interface player {
  player_name: string;
}
// from pydantic import BaseModel

// class RoomCreate(BaseModel):
//     room_name:str

// class PlayerID(BaseModel):
//     playerID:int

// class NewPlayer(BaseModel):
//     playerName:str

// class Vote(BaseModel):
//     playerID:int
//     roomID:str
//     vote:int

// class ClearVotes(BaseModel):
//     roomID:str
