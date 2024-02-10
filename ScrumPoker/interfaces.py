from pydantic import BaseModel

class RoomCreate(BaseModel):
    room_name:str

class PlayerID(BaseModel):
    playerID:int


class NewPlayer(BaseModel):
    playerName:str

class Vote(BaseModel):
    playerID:int
    roomID:int
    vote:int

class ClearVotes(BaseModel):
    roomID:int

    