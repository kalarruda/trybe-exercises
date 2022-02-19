# Exercício 2: Jogo da palavra embaralhada.
# Desenvolva um jogo em que a pessoa usuária tenha que
# adivinhar uma palavra que será mostrada com as letras
# embaralhadas. O programa terá uma lista de palavras e
# escolherá uma aleatoriamente. O jogador terá três
# tentativas para adivinhar a palavra. Ao final a palavra
# deve ser mostrada na tela, informando se a pessoa ganhou
# ou perdeu o jogo.
# 🦜 Para embaralhar uma palavra faça:
# scrambled_word = "".join(random.sample(word, len(word)))

import random

PALAVRAS = [
  'gato',
  'elefante',
  'camelo',
  'cachorro',
  'pato',
  'urso',
]
tentativas_maximas = 3


def dispara_palavra_secreta(words):
    palavra_secreta = random.choice(words)
    palavra_embaralhada = (
      "-".join(random.sample(palavra_secreta, len(palavra_secreta)))
      )
    return palavra_secreta, palavra_embaralhada
    # print(palavra_secreta, palavra_embaralhada)


def quantidade_adivinhacoes():
    adivinhacoes = []
    for tentativas in range(tentativas_maximas):
        tentativa = input("adivinhe a palavra: ")
        adivinhacoes.append(tentativa)
    return tentativas
    # print(tentativas)


def resultado_jogo(palavra_secreta, tentativas):
    if palavra_secreta in tentativas:
        print(f"Você acertou: {palavra_secreta}")
    else:
        print(f"Você perdeu: Palavra era {palavra_secreta}")


if __name__ == "__main__":
    palavra_secreta, palavra_embaralhada = dispara_palavra_secreta(PALAVRAS)
    print(f"Palavra embaralhada é: {palavra_embaralhada}")
    tentativas = quantidade_adivinhacoes()
    resultado_jogo(palavra_secreta, tentativas)


# import random

# WORDS = [
#     "cat",
#     "elephant",
#     "dog",
#     "monkey",
#     "duck",
#     "chameleon",
#     "bear",
#     "moose",
#     "rooster",
# ]
# MAX_ATTEMPTS = 3


# def draw_secret_word(words):
#     secret_word = random.choice(words)
#     scrambled_word = "".join(random.sample(secret_word, len(secret_word)))
#     return secret_word, scrambled_word


# def collect_guesses():
#     guesses = []
#     for attempt in range(MAX_ATTEMPTS):
#         guess = input("Guess the word: ")
#         guesses.append(guess)
#     return guesses


# def check_game_result(secret_word, guesses):
#     if secret_word in guesses:
#         print(f"You win: {secret_word}")
#     else:
#         print(f"You lose: {secret_word}")


# if __name__ == "__main__":
#     secret_word, scrambled_word = draw_secret_word(WORDS)
#     print(f"Scrambled word is {scrambled_word}")
#     guesses = collect_guesses()
#     check_game_result(secret_word, guesses)
