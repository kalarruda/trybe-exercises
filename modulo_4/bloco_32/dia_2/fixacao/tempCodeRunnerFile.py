import json

with open("pokemons.json") as pokemons_file:
    # conteudo = pokemons_file.read()
    pokemons = json.load(pokemons_file)["results"]

pokemons_type = [
    pokemon
    for pokemon in pokemons if "Grass" in pokemon["type"]
]

with open("grass_pokemons.json", "w") as arquivo_grama:
    escrever_em_json = json.dumps(
        pokemons_type
    )
arquivo_grama.write(escrever_em_json)