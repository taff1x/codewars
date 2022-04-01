# https://www.codewars.com/kata/520b9d2ad5c005041100000f
# Simple Pig Latin

import re
def pig_it(text):
    text = text.split()
    for index,word in enumerate(text):
        if re.search('[A-Za-z]',word):
            head, *tail = word
            text[index] = "".join(tail) + head + 'ay'
    return " ".join(text)