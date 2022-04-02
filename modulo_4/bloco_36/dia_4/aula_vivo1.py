# ver quantas crianças existem no grupo

def num_criancas(criancas):
    crianca_unica = set()

    for crianca1, crianca2 in criancas:
        crianca_unica.add(crianca1)
        crianca_unica.add(crianca2)
    return crianca_unica

    # SEGUNDO JEITO DE FAZER COM UPDATE
    # for crianca in criancas:
    #     crianca_unica.update(crianca)
    # return len(crianca_unica)


# 9 criancas no total
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

print(num_criancas(grupo_criancas))
