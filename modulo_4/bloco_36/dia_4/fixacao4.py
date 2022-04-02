# fazer uma lista de duas jogadas de dados
# que somando dá o resultado de 7 somando
# as duas jogadas juntas

def soma_sete(jogadas):
    ja_viu_antes = set()
    resultados = []

    for jogada in jogadas:
        if 7-jogada in ja_viu_antes:
            resultados.append((7-jogada, jogada))
            ja_viu_antes.discard(7-jogada)
        else:
            ja_viu_antes.add(jogada)
    return resultados


if __name__ == '__main__':
    jogada_dados = [1, 5, 3, 2, 6, 1, 4, 2, 6, 3, 1, 1]
    print(soma_sete(jogada_dados))
