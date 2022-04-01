# https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
# Persistent Bugger.

def persistence(n):
    if len(str(n)) == 1:
        return 0
    persistence = 0
    init = True
    while True:
        if init:
            n_split = [int(char) for char in str(n)]
            init = False
        else:
            n_split = [int(char) for char in str(result)]
        result = 1
        for number in n_split:
            result *= number
        persistence+=1
        if len(str(result)) == 1:
            break
    return persistence