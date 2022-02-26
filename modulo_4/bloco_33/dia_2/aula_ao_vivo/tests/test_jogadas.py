from jogo_boliche.jogadas import Jogada, TiposJogada
from unittest.mock import patch


def teste_estado_da_jogada():
    jogada = Jogada()
    assert jogada.primeira_tentativa == 0
    assert jogada.segunda_tentativa == 0
    assert jogada.tipo == TiposJogada.NAO_JOGADA


@patch('jogo_boliche.jogadas.randint')
# retorna um numero aleatorio o randint
def teste_jogada_regular(randint_mockado):
    randint_mockado.return_value = 2
    # esta mockando (simulando) receber o valor 1
    jogada = Jogada()
    jogada.jogando()

    assert jogada.primeira_tentativa == 2
    assert jogada.segunda_tentativa == 2
    assert jogada.tipo == TiposJogada.REGULAR
