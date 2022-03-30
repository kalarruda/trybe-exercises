list_A = [1, 2, 3, 4, 5, 6]
list_B = [4, 5, 7, 8, 10, 6]


def intersecao_listas(listA, listB):
    verificado_A = {}
    for item in listA:
        if item not in verificado_A:
            verificado_A[item] = True

    intersecao = []
    for item in listB:
        if item in verificado_A:
            intersecao.append(item)
    print(intersecao)


intersecao_listas(list_A, list_B)
