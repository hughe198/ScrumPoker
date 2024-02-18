from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from ..db.database import Base

class User(Base):
    __tablename__ = "users"
    id = Column(Integer,primary_key=True,index=True)
    username =Column(String,unique=True,index = True)
    email = Column(String,unique=True,index = True, nullable=True)
    password = Column(String,index = True, nullable=True)
    
class Room(Base):
    __tablename__ = "rooms"
    id = Column(Integer,primary_key=True,index=True)
    name = Column(String,primary_key=True,index=True)
    creator_id = Column(Integer, ForeignKey("users.id"))
    
class Story(Base):
    __tablename__ = "stories"
    id = Column(Integer,primary_key=True,index=True)
    title = Column(String,index=True)
    description = Column(String,index = True)
    room_id = Column(Integer,ForeignKey('rooms.id'))
    
class Vote(Base):
    __tablename__ = "stories"
    id = Column(Integer,primary_key=True,index=True)
    value = Column(Integer)
    user_id = Column(Integer,ForeignKey('users.id'))
    story_id = Column(Integer,ForeignKey('stories.id'))
    
class Session(Base):
    __tablename__ = "stories"
    id = Column(Integer,primary_key=True,index=True)
    story_id = Column(Integer, ForeignKey('stories.id'))
    status = Column(String)