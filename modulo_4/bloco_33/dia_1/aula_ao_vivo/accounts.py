class Account:
    def __init__(self, customers, number, balance=0):
        self._customers = customers
        self.number = number
        self._balance = balance
        self.transactions = []

    def account_info(self):
        print(
          f"CONTA: {self.number}\nSALDO: R${self._balance:10.2f}")

    def saque(self, amount):
        if(self._balance < amount):
            print("Valor não disponível na conta")
        else:
            self._balance -= amount
            self.transactions.append(
              ["SAQUE:", amount]
              )
            # print(f"Saque de R$ {amount:10.2f}, efetuado com sucesso")

    def deposito(self, amount):
        self._balance += amount
        self.transactions.append(
          ["DEPÓSITO:", amount]
          )
        # print(f"depósito de R$ {amount:10.2f}, efetuado com sucesso")

    def extrato(self):
        for t in self.transactions:
            print(f"\n{t[0]:12s}{t[1]:10.2f}")
        print(f"\nSALDO: R$ {self._balance}")
        # print(transaction)
