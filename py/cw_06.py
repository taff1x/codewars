# https://www.codewars.com/kata/52742f58faf5485cae000b9a
# Human readable duration format

def format_duration(seconds):
    if seconds == 0:
        return 'now'
    
    sec_thresholds = {
        'year' : 31536000,
        'day' : 86400,
        'hour' : 3600,
        'minute' : 60,
        }
    
    result_dict = {}
    
    for index,(timestamp,treshhold) in enumerate(sec_thresholds.items()):
        count = int(seconds / treshhold) # int is as math.trunc -> removes decimal places
        result_dict[timestamp] = count
        seconds -= treshhold * count
        if seconds < 60:
            result_dict['second'] = seconds
    
    ## handling return string 
    result_str = ''
    count = 0 # how many no zero values in dict (to properly add ',' and 'and' in return string)
    
    for timestamp in list(result_dict.keys()):
        if result_dict[timestamp] != 0:
            count +=1
        else:
            result_dict.pop(timestamp)

    if count >= 2:
        separators = [', ' for _ in range(count-1)]
        separators[-1] = ' and '

    for index,(timestamp,qty) in enumerate(result_dict.items()):
        result_str += str(qty) + ' ' + (timestamp if qty == 1 else timestamp+'s') + (separators[index] if index < count-1 else '')
    
    return result_str