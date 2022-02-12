arquivo = open('novo.txt', mode='w')

arquivo.write('ola tudo bem rapaz')
arquivo.close()

arquivo = open('novo.txt', mode='r')

conteudo = arquivo.read()
print(conteudo)

arquivo.close()
