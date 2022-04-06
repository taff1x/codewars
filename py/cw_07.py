# https://www.codewars.com/kata/52bb6539a4cf1b12d90005b7
# Battleship field validator

import copy

def validate_battlefield(field):
     
    #validation for diagonally connected ships
    for i in range(len(field)-1):
            for j in range(len(field[i])):
                if j == 0:
                    if (field[i][j] and field[i+1][j+1]):
                        return False
                        
                elif j== 9:
                    if (field[i][j] and field[i+1][j-1]):
                        return False
                else:
                    if (field[i][j] and field[i+1][j+1]) or (field[i][j] and field[i+1][j-1]):
                        return False
    
    #coordinates of ships of different sizes
    ships = {
        1: [],
        2: [],
        3: [],
        4: [],
    }
    
    # filled coords
    coords = []
    for x,line in enumerate(field):
        for y,cell in enumerate(line):
            if cell:
                coords.append([x,y])

    ####### HORIZONTAL SHIPS  ######### 
    
    i = 0
    while i < len(coords):
        size = 1
        ship = []
        for j in range(i+1,len(coords)):
            if coords[i][0] == coords[j][0] and (coords[j][1] == coords[i][1] + size):
                size += 1
                if size > 4:
                    return False
                if size == 2:
                    ship.append(coords[i])
                ship.append(coords[j])
            else:
                break
        if ship:
            ships[size].append(ship)
            coords = list(filter(lambda x: x not in ship, coords))
        else:
            i += 1


    left_coords = copy.deepcopy(coords)
    field_transposed = list(map(list, zip(*field)))
    
    coords = []
    for x,line in enumerate(field_transposed):
        for y,cell in enumerate(line):
            if cell:
                coords.append([y,x])

    coords = list(filter(lambda x: x in left_coords, coords))

    # ####### VERTICAL SHIPS ###########
        
    i = 0
    while i < len(coords):
        size = 1
        ship = []
        for j in range(i+1,len(coords)):
            if coords[i][1] == coords[j][1] and (coords[j][0] == coords[i][0] + size):
                size += 1
                if size > 4:
                    return False
                if size == 2:
                    ship.append(coords[i])
                ship.append(coords[j])
            else:
                break
        if ship:
            ships[size].append(ship)
            coords = list(filter(lambda x: x not in ship, coords))
        else:
            i += 1
    
    ######## SINGLE SHIPS ############
    
    ships[1] = coords
    
    ####### SINGLE SHIPS ############

    ship_size_maxqty = {
        1 : 4,
        2 : 3,
        3 : 2,
        4 : 1,
    }

    for ship_type, ship_cords in ships.items():
        if len(ship_cords) != ship_size_maxqty[ship_type]:
            return False          
    
    return True