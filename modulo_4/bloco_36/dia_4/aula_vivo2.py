# veja quais criancas sao amigas

def amigos(criancas):
    criancas_amigas = {}
    for crianca1, crianca2 in criancas:
        if crianca1 not in criancas_amigas:
            criancas_amigas[crianca1] = set()

        if crianca2 not in criancas_amigas:
            criancas_amigas[crianca2] = set()

        criancas_amigas[crianca1].add(crianca2)
        criancas_amigas[crianca2].add(crianca1)
    return criancas_amigas


if __name__ == "__main__":
    grupo_criancas = [
      ('ana', 'julio'),
      ('jose', 'maria'),
      ('julio', 'jorge'),
      ('renata', 'matheus'),
      ('eduardo', 'giselle'),
      ('ana', 'matheus'),
      ('jose', 'eduardo'),
    ]

print(amigos(grupo_criancas))
