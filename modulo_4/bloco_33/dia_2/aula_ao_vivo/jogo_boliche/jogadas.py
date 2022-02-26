from random import randint


class Jogada():
    PINOS = 10

    def __init__(self):
        self.primeira_tentativa = 0
        self.segunda_tentativa = 0
        self.tipo = TiposJogada.NAO_JOGADA

    def jogando(self):
        self.primeira_tentativa = self._joga_bola()
        pinos_restantes = self.PINOS - self.primeira_tentativa
        if pinos_restantes == 0:
            self.tipo = TiposJogada.STRIKE
        elif pinos_restantes > 0:
            self.segunda_tentativa = self._joga_bola(pinos_restantes)
            if self.primeira_e_segunda_tentativa == 10:
                self.tipo = TiposJogada.SPARE
            else:
                self.tipo = TiposJogada.REGULAR

    # def jogando(self):
    #     self.primeira_tentativa = self._joga_bola()
    #     pinos_restantes = self.PINOS - self.primeira_tentativa
    #     self.segunda_tentativa = self._joga_bola(pinos_restantes)
    # if self.primeira_tentativa < 10 else 0
    #     self.checagem_tipos()

    # metodo primeira_e_segunda_tentiva é para saber quantos pinos sobraram
    def primeira_e_segunda_tentativa(self):
        return self.primeira_tentativa + self.segunda_tentativa

    def checagem_tipos(self):
        if self.primeira_tentativa == self.PINOS:
            self.tipo = TiposJogada.STRIKE
        elif self.primeira_e_segunda_tentativa == self.PINOS:
            self.tipo = TiposJogada.SPARE
        else:
            self.tipo = TiposJogada.REGULAR

    @classmethod
    def _joga_bola(cls, pinos_restantes=PINOS):
        return randint(0, pinos_restantes)


class TiposJogada():
    NAO_JOGADA = 0
    REGULAR = 1
    SPARE = 2
    STRIKE = 3
