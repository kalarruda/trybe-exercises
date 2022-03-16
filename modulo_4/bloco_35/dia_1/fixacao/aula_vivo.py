def mais_que_vinte_cinco_porcento(array):
    vinte_cinco_porcento = len(array) // 4
    # o numero é dividido por 4 mas so sobra numero inteiro
    setenta_cinco_porcento = len(array) - vinte_cinco_porcento
    for index, elemento in enumerate(array[:setenta_cinco_porcento]):
        if elemento == array[index + vinte_cinco_porcento]:
            return elemento
    return -1


if __name__ == "__main__":
    teste1 = [1, 2, 2, 6, 6, 6, 6, 7, 10]
    print(f"O elemento encontrado para teste1: {teste1}")
    print(f"foi {mais_que_vinte_cinco_porcento(teste1)}")
