minhas_linguagens = ['python', 'javascript', 'C']
print('Minhas linguagens são:')
for linguagens in minhas_linguagens:
    print(linguagens)


class Lista():
    coisas = ['python', 'javascript', 'C']

    def __init__(self, lista):
        self.lista = lista

    def __iter__(self):
        return Lista(self.lista)


Lista()
