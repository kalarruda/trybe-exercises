def concatena(*palavras):
    palavra_final = ""
    for palavra in palavras:
        palavra_final += palavra
        if not palavra == palavras[-1]:
            palavra_final += ' '
    return palavra_final


print(concatena('ola', 'amiguinho'))
