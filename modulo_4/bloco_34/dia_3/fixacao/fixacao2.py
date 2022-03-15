import requests
import time

# À partir da décima requisição somos bloqueados de acessar o recurso
# Código de status 429: Too Many Requests
for _ in range(15):
    resposta = requests.get("https://www.cloudflare.com/rate-limit-test/")
    print(resposta)  # mostra 15 Response e o código
    print(resposta.status_code)  # mostra somente o código 15 vezes
    time.sleep(6)  # faz com que tenha 3 segundos entre uma requisicao e outra
