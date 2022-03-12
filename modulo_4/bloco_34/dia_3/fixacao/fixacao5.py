from parsel import Selector
import requests

URL = "http://books.toscrape.com/catalogue/"
proxima_pagina = 'page-1.html'

while proxima_pagina:
    response = requests.get(URL + proxima_pagina)
    selecionador = Selector(text=response.text)

    for produto in selecionador.css('.product_pod'):
        titulo = produto.css('h3 a::attr(title)').get()
        preco = produto.css('.price_color::text').get()
        print(titulo, preco)

    proxima_pagina = selecionador.css('.next a::attr(href)').get()
