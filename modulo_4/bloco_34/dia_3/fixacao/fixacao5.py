from parsel import Selector
import requests

URL = "http://books.toscrape.com/catalogue/"
proxima_pagina = "page-1.html"

while proxima_pagina:
    # Vamos testar com a primeira página
    response = requests.get(URL + proxima_pagina)
    selecionador = Selector(text=response.text)

    for produto in selecionador.css(".product_pod"):
        titulo = produto.css("h3 a::attr(title)").get()
        preco = produto.css(".product_price .price_color::text").re(
            r"£\d+\.\d{2}"
        )
        href = produto.css("h3 a::attr(href)").get()

        page_details = requests.get(URL + href)
        page_selecionador = Selector(text=page_details.text)

        info_book = page_selecionador.css(
            "#product_description ~ p::text"
        ).get()
        suffix = "...more"
        if info_book.endswith(suffix):
            info_book = info_book[:-len(suffix)]

        print(titulo, preco, info_book)

    proxima_pagina = selecionador.css(".next a::attr(href)").get()

# Recupera o atributo href do primeiro elemento que combine com o seletor
href = selecionador.css(".product_pod h3 a::attr(href)").get()
print(href)
# Para obter a url completa, basta adicionar a nossa URL_BASE
print(URL + href)
