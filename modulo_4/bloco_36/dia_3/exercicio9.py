texto = [
    "jose",
    "maria",
    "marcio",
    "joão",
    "sergio",
    "porra",
    "paulo",
    "quem",
    "matou",
    "homem",
]


def filtering(text):
    list_filter = {}
    for word in text:
        first_char = word[0]
        if first_char not in list_filter:
            list_filter[first_char] = [word]
        else:
            list_filter[first_char].append(word)
    # print(list_filter)
    return list_filter


for key, item in filtering(texto).items():
    print(f"{key}: {item}")

# filtering(texto)
