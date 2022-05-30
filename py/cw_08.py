# https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1
# Snail Sort

from copy import deepcopy

def snail(snail_map):    
    array = deepcopy(snail_map) #deepcopy to not change snail_map input table
    
    result = []
    
    while len(array) > 1:
        result.extend(array.pop(0)) # insert whole 1st row
        array = list(map(list,zip(*array)))[::-1] # rotate data
    result.extend(array.pop()) #insert last single elem
    
    return result