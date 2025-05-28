def two_highest(arg1):
    #print (arg1)
    re=list(set(arg1))
    sorted_no=sorted(re,reverse=True)
    return sorted_no[0:2:1]