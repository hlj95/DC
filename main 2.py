import json

from datetime import datetime

now = datetime.now()

current_time = now.strftime("%H:%M:%S")

pool_tables = []

file_name = "11-22-2017.txt"

array = []

class Table:
    def __init__(self, number):
        self.table_number = number
        self.start_time = None
        self.end_time = None
        self.total_time = None
        self.occupied = False
        self.playing = None

    def check_out(self):
        now = datetime.now()
        time = now.strftime("%H:%M:%S")
        self.occupied = True
        self.start_time = time

    def check_in(self):
        now = datetime.now()
        time = now.strftime("%H:%M:%S")
        self.occupied = False
        self.end_time = time


def save_file():
  array = []
  with open(file_name, "w") as file:
    for table in pool_tables:
      json_table = {"Table#": table.table_number, "Start": table.start_time, "End" : table.end_time, "Total": table.total_time}
      array.append(json_table)
    json.dump(array, file)

    with open(file_name, "r") as file:
      data = json.load(file)
      print(data)


for (i) in range(0,12):
  pool_tables.append(Table(i + 1))

def display_tables():
    print("\n-\t\t-\t\t-\t\t-\t\t-\n  U of H Pool Hall Availability \n-\t\t-\t\t-\t\t-\t\t-\n")
    for table in pool_tables:
        if table.occupied == False:
            status = "Status: Not Occupied"
            print(f"Table # {table.table_number}\t{status}")
        else:
            status = "Status: Occupied"
            print(f"Table # {table.table_number}\t{status}\tOut: {table.start_time}\tIn:{table.end_time}\tTime: {table.playing}")


index = 0


try:
    while True:
        print("\n1 - Show All Tables\t\t3 - Check-In A Table\n\n2 - Check-Out A Table\tQ - Quit\n")
        choice = int(input("Choose An Option : \n"))
        
        if choice == 1:
            display_tables()
                
        elif choice == 2:
            display_tables()
            check_out = int(input("\nWhich table would you like to check out? \n\n"))
            if pool_tables[check_out - 1].occupied == True:
                print("\nOCCUPIED\n")
            else:
                pool_tables[check_out - 1].check_out()
                print(f"\nPool Table {check_out} is currently occupied.\n")
        
        elif choice == 3:
            display_tables()
            table_check_in = int(input("\nWhich table would you like to check in? "))
            if pool_tables[table_check_in - 1].occupied == False:
                print(f"\nPool Table {table_check_in} is not occupied.\n")
            else:
              pool_tables[table_check_in - 1].check_in()
              print(f"\nPool Table {table_check_in} has been checked in.\n", )
              save_file()


except ValueError:
    print("Goodbye!")