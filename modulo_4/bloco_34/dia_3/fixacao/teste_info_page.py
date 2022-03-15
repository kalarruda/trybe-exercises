from parsel import Selector
import requests

URL_BASE = "http://books.toscrape.com/catalogue/"

# Vamos testar com a primeira página
response = requests.get(URL_BASE + "page-1.html")
selector = Selector(text=response.text)

# Recupera o atributo href do primeiro elemento que combine com o seletor
href = selector.css(".product_pod h3 a::attr(href)").get()
print(href)

# Para obter a url completa, basta adicionar a nossa URL_BASE
book_page = URL_BASE + href
detail_page_book = requests.get(book_page)
detail_selector = Selector(text=detail_page_book.text)

info_book = detail_selector.css('#product_description ~ p::text').get()
# print(info_book)

precos = selector.css(".product_price .price_color::text").re(r"£\d+\.\d{2}")
# print(precos)
