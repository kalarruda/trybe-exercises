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
    randint_mockado.return_value = 3
    # esta mockando (simulando) receber o valor 1
    jogada = Jogada()
    jogada.jogando()

    assert jogada.primeira_tentativa == 3
    assert jogada.segunda_tentativa == 3
    assert jogada.tipo == TiposJogada.REGULAR


@patch('jogo_boliche.jogadas.randint')
# retorna um numero aleatorio o randint
def teste_jogada_spare(randint_mockado):
    randint_mockado.return_value = 5

    jogada = Jogada()
    jogada.jogando()

    assert jogada.primeira_tentativa == 5
    assert jogada.segunda_tentativa == 5
    assert jogada.tipo == TiposJogada.SPARE


@patch('jogo_boliche.jogadas.randint')
# retorna um numero aleatorio o randint
def teste_jogada_strike(randint_mockado):
    randint_mockado.return_value = 10

    jogada = Jogada()
    jogada.jogando()

    assert jogada.primeira_tentativa == 10
    assert jogada.segunda_tentativa == 0
    assert jogada.tipo == TiposJogada.STRIKE
