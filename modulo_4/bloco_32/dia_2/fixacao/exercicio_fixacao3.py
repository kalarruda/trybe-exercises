# Exercício 3: Dado um arquivo contendo estudantes
# e suas respectivas notas, escreva um programa que
# lê todas essas informações e filtre mantendo somente
# as pessoas que estão reprovadas, e escreva seus nomes
# em outro arquivo. A nota miníma para aprovação é 6.

estudantes_reprovados = []

info_estudantes = open('estudantes.txt', mode='r')
print("\nalunos reprovados:")
for estudantes_e_notas in info_estudantes:
    linhas = estudantes_e_notas.split(" ")
    if int(linhas[1]) < 6:
        print(linhas[0])
        estudantes_reprovados.append(linhas[0] + "\n")

info_estudantes.close()

arquivo_dos_reprovados = open('reprovados.txt', mode='w')

arquivo_dos_reprovados.writelines(f"{estudantes_reprovados}\n")

arquivo_dos_reprovados.close()

# for nota in info_estudantes:
#     print(nota.split(" "))
#  separa os estudantes com suas notas em arrays:
# ['Marcos', '10\n']
# ['Felipe', '4\n']
# ['José', '6\n']
# ['Ana', '10\n']
# ['Maria', '9\n']
# ['Miguel', '5']


# for estudantes_e_notas in info_estudantes:
#     linhas = estudantes_e_notas.split(" ")
#     print(linhas[1])
#  só imprime as notas dos estudantes
# 10

# 4

# 6

# 10

# 9

# 5

# for estudantes_e_notas in info_estudantes:
#     linhas = estudantes_e_notas.split(" ")
#     notas = int(linhas[1]) < 6
#     print(notas)
#     imprime somente se a nota é menor que 6
# False
# True
# False
# False
# False
# True


# for estudantes_e_notas in info_estudantes:
#     linhas = estudantes_e_notas.split(" ")
#     if int(linhas[1]) < 6:
#         print(linhas[0])
#         imprime somente o nome dos estudantes com notas menor que 6
#         Felipe
#         Miguel


# estudantes_reprovados = []

# info_estudantes = open('estudantes.txt', mode='r')

# for estudantes_e_notas in info_estudantes:
#     linhas = estudantes_e_notas.split(" ")
#     if int(linhas[1]) < 6:
#         estudantes_reprovados.append(linhas[0])
#         print(estudantes_reprovados)
#         nao entendi o resultado:
#         ['Felipe']
#         ['Felipe', 'Miguel']
