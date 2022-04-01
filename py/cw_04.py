# https://www.codewars.com/kata/526571aae218b8ee490006f4
# Bit Counting

def count_bits(n):
    return len(format(n,'b').replace('0',''))