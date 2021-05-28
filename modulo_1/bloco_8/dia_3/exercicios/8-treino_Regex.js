const text = `Amor da minha vida
Daqui até a eternidade
Nossos destinos
Foram traçados na maternidade

Paixão cruel, desenfreada
Te trago mil rosas roubadas
Pra desculpar minhas mentiras
Minhas mancadas

Exagerado
Jogado aos teus pés
Eu sou mesmo exagerado
Adoro um amor inventado

Eu nunca mais vou respirar
Se você não me notar
Eu posso até morrer de fome
Se você não me amar

E por você eu largo tudo
Vou mendigar, roubar, matar
Até nas coisas mais banais
Pra mim é tudo ou nunca mais

Exagerado
Jogado aos teus pés
Eu sou mesmo exagerado
Adoro um amor inventado

E por você eu largo tudo
Carreira, dinheiro, canudo
Até nas coisas mais banais
Pra mim é tudo ou nunca mais

Exagerado
Jogado aos teus pés
Eu sou mesmo exagerado
Adoro um amor inventado

Jogado aos teus pés
Com mil rosas roubadas
Exagerado
Eu adoro um amor inventado

Jogado aos teus pés
Eu sou mesmo exagerado
Adoro um amor inventado`

// sobre o regex vc entendeu certo, \w indica letras de [a-zA-Z] e o \s espaço. Existe tbm o \d que são numerais de [0-9]. E se eles forem maiúsculos você indica que não pode ser uma letra ou no caso do \D um numero.

// const regExp = /amor/ig
console.log(text.match(/amor/ig)); 
// procura todas palavras "amor" - i: não importa caixa alta ou baixa. g: global (em todo o conteúdo)
console.log(text.replace(/amor/ig, 'Lombriga'));
// replace: procura e substitui palavra "amor" por "Lombriga"
console.log('----------------------------------------------------------')
console.log(text.replace(/amor|jogado/ig, 'panela'));
// replace com "|" é igual ao "ou" (||) procura e substitui palavra "amor" ou "jogado" por "panela"
