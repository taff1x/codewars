# https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
# Persistent Bugger.

def persistence(n):
    persistence = 0
    while len(str(n)) > 1:
        result = 1
        for number in str(n):
            result *= int(number)
        n = str(result)
        persistence+=1
    return persistence