def proximo_maior_letra(letras, alvo):
    menor_index = 0
    maior_index = len(letras)

    while menor_index < maior_index:
        meio_index = (maior_index + menor_index) // 2
        if letras[meio_index] <= alvo:
            menor_index = meio_index + 1

        else:
            maior_index = meio_index

    return letras[menor_index % len(letras)]


if __name__ == "__main__":
    letras1 = ["c", 'f', 'j']
    alvo1 = 'a'
    print(f"a saida foi: {proximo_maior_letra(letras1, alvo1)}")

    letras2 = ['c', 'f', 'j']
    alvo2 = 'c'
    print(f"a saida foi: {proximo_maior_letra(letras2, alvo2)}")
