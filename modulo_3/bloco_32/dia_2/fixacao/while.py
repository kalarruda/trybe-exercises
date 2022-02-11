while True:
    try:
        x = int(input('Digite um valor: '))
        print(f'valor é: {x}')
        break
    except ValueError:
        #  precisa saber qual tipo de erro pode dar para tratar
        print('Opaaa! Isso não é um número parceiro! Tenta de novo: ')
