from pymongo import MongoClient
#  depois de instalar o pymongo

# Por padrão o host é localhost e porta 27017
# Estes valores podem ser modificados passando uma URI
# client = MongoClient("mongodb://localhost:27017/")
client = MongoClient()
# o banco de dados catalogue será criado se não existir
db = client.catalogue
# a coleção books será criada se não existir
book = {
  "title": "A light em algum lugar",
}

documents = [
    {
        "title": "A Light in the Attic",
    },
    {
        "title": "Tipping the Velvet",
    },
    {
        "title": "Soumission",
    },
]
db.books.insert_many(documents)

students = db.books
id_document = db.books.insert_one(book).inserted_id
print(id_document)

db = client.catalogue
# busca um documento da coleção, sem filtros
# print(db.books.find_one())
# # busca utilizando filtros
# for book in db.books.find({"title": {"$regex": "t"}}):
#     print(book["title"])

with MongoClient() as client:
    db = client.database
    for book in db.books.find({"title": {"$regex": "t"}}):
        print(book["title"])

client.close()  # fecha a conexão com o banco de dados
