# database.py
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

SQLALCMY_DATABASE_URL = "sqlite:///./sql_app.db" # Replace with PostgresSQL later
engine = create_engine(SQLALCMY_DATABASE_URL,connect_args={"check_same_thread":False}
                       )
SessionLocal = sessionmaker(autocommit= False,autoflush=False,bind = engine)
Base = declarative_base()





