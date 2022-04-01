# https://www.codewars.com/kata/5467e4d82edf8bbf40000155
# Descending Order

def descending_order(num):
    return int("".join(sorted([char for char in str(num)],reverse=True)))
