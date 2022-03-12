from parsel import Selector
import requests

response = requests.get("http://books.toscrape.com/")
seletor = Selector(text=response.text)
print(seletor)

# O título está no atributo title em um elemento âncora (<a>)
# Dentro de um h3 em elementos que possuem classe product_pod
# titulos = seletor.css('.product_pod h3 a::attr(title)').getall()
# print(titulos)
# Estamos utilizando a::attr(title) para capturar somente o
# valor contido no texto do seletor

# Os preços estão no texto de uma classe price_color
# Que se encontra dentro da classe .product_price
# precos =
# seletor.css(".product_pod .product_price .price_color::text").getall()
# print(precos)

# Combinando tudo podemos buscar os produtos
# em em seguida buscar os valores individualmente
for produto in seletor.css(".product_pod"):
    title = produto.css("h3 a::attr(title)").get()
    preco = produto.css(".price_color::text").get()
    print(title, preco)

proxima_pagina = seletor.css('.next a::attr(href)').get()
print(proxima_pagina)
