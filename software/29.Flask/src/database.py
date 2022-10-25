import mysql.connector
import os

class Database:

  def __init__(self) -> None:
    config = {
      'user': os.getenv('DB_USER'),
      'password': os.getenv('DB_PASSWORD'),
      'host': os.getenv('DB_HOST'),
      'database': os.getenv('DB_NAME')
    }
    self.cnx = mysql.connector.connect(**config)
    self.cursor = self.cnx.cursor()
