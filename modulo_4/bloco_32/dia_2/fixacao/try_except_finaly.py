try:
    arquivo = open('novo_conteudo.txt', mode="r")
except OSError:
    print('arquivo inexistente')
else:
    print(arquivo)
    # arquivo.read()
    arquivo.close()
finally:
    print('tentativa de abrir e ler um arquivo')
