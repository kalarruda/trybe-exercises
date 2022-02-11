arquivo = open('novo_conteudo.txt', mode='w')

linhas = ['ola\n', 'mundo\n', 'maluco']

arquivo.writelines(linhas)

arquivo.close()  # sempre colocar esse close apos ler ou escrever

arquivo = open('novo_conteudo.txt', mode='r')

conteudo = arquivo.read()

print(conteudo)

arquivo.close()  # sempre colocar esse close apos ler ou escrever
