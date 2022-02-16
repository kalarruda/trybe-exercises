class User:
    def __init__(self, name, email, password):
        #  precisa ter esse "__init__ " e precisa ter o "self"
        self.name = name
        self.email = email
        self.password = password


meu_user = User('Valentino da Silva', 'valente@hotmail.com', "grana")
print(meu_user)
print(meu_user.name)
print(meu_user.email)
print(meu_user.password)
