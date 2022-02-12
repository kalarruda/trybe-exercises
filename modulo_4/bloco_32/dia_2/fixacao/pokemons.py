import json

with open("pokemons.json") as pokemons_file:
    # conteudo = pokemons_file.read()
    pokemons = json.load(pokemons_file)["results"]

pokemons_type = [
    pokemon
    for pokemon in pokemons if "Grass" in pokemon["type"]
]

with open("grass_pokemons.json", "w") as arquivo_grama:
    # escrever_em_json = json.dumps(
    #     pokemons_type
    # )
    # arquivo_grama.write(escrever_em_json)
    json.dump(pokemons_type, arquivo_grama)
#  ==========================================================

# import json

# # Leitura de todos os pokemons
# with open("pokemons.json") as file:
#     pokemons = json.load(file)["results"]

# # Separamos somente os do tipo grama
# grass_type_pokemons = [
#     pokemon for pokemon in pokemons if "Grass" in pokemon["type"]
# ]

# # Abre o arquivo para escrevermos apenas o pokemons do tipo grama
# with open("grass_pokemons.json", "w") as file:
#     json_to_write = json.dumps(
#         grass_type_pokemons
#     )  # conversão de Python para o formato json (str)
#     file.write(json_to_write)
