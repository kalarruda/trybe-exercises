class Jogada():
    PINOS = 10

    def __init__(self):
        self.primeira_tentativa = 0
        self.segunda_tentativa = 0
        self.tipo = TiposJogada.NAO_JOGADA


class TiposJogada():
    NAO_JOGADA = 0
    REGULAR = 1
    SPARE = 2
    STRIKE = 3
