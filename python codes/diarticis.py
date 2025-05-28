def correct_polish_letters(st): 
  #  print(st)
    diarctis={ 'ą': 'a',
                'ć': 'c',
                'ę': 'e',
                'ł': 'l',
                'ń': 'n',
                'ó': 'o',
                'ś': 's',
                'ź': 'z',
                'ż': 'z'}
    re=''
    for i in st:
        if i in diarctis:
            re+=diarctis[i]
        else:
            re+=i
    return re