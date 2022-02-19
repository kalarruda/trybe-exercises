arquivo_personagens = open('meus-personagens-favoritos.txt', mode='w')
# o W é para escrever no arquivo txt

arquivo_personagens.write('He-man\n')
arquivo_personagens.write('Wolverine\n')

print('Vingador', file=arquivo_personagens)

mais_personagens = ['Hulk\n', 'Porcaria\n', 'Bulhunfa\n']

arquivo_personagens.writelines(mais_personagens)
# a funcao writelines precisa ser usada quando é array

arquivo_personagens.close()
