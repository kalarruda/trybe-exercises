PI = 3.14


def quadrado(lado):
    '''Calcula area do quadrado'''
    return lado * lado


def retangulo(largura, altura):
    '''calcula area do retangulo'''
    return largura * altura


def circulo(raio):
    '''calcula area do circulo'''
    return PI * raio * raio


if __name__ == "__main__":
    print("Área do quadrado:", quadrado(10))
    print("Área do retângulo:", retangulo(2, 2))
    print("Área do círculo:", circulo(4))

help(abs)
