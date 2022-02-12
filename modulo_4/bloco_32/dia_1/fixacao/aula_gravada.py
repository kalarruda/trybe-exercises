def analise(texto):

    nao_texto = [',', '.', '!', '-', ' ']

    relatorio = ""
    contador_palavras = len(texto.split(" "))  # len igual a length
    relatorio += f"Número de palavras = {contador_palavras}\n"

    contador_letras = dict()  # igual a {}

    for letra in texto:  # N

        if letra not in nao_texto:  # igual a letra !== nao_texto
            if letra in contador_letras:
                # se letra está dentro de contador_letras
                contador_letras[letra] += 1  # contador_palvras[N]
            else:
                # sempre vai cair nesse else primeiro
                contador_letras[letra] = 1

    relatorio += f"Número de letras = {contador_letras}"

    return relatorio


texto_analisado = (
    "Não é por acaso que encontro todo dia todo dia"
    "Cuando me voy caminhando"
    "Diego tem sua magia e esta alegria"
    "Rasta, rastafari Afro-cigana"
    "E com magia e pura alma"
    "Ele chega com a dança"
    "Possuído pelo ritmo ragatanga!!!"
)


print(analise(texto_analisado))
