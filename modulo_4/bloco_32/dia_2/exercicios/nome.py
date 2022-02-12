import re


nome_input = input("Digite um nome: ")

for retira_letra in range(len(nome_input)):
    # pega o index das letras 0, 1, 2 ...
    for index in range(len(nome_input) - retira_letra):
        print(nome_input[index], end="")
    print()
