class User:
    def __init__(self, name, email, password):
        #  precisa ter esse "__init__ " e precisa ter o "self"
        self.name = name
        self.email = email
        self.password = password

    def reset_password(self):
        print(f"Envia email para resetar senha de: {self.name}")


meu_user = User('Valentino da Silva', 'valente@hotmail.com', "grana")
meu_user.reset_password()

# print(meu_user)
# print(meu_user.name)
# print(meu_user.email)
# print(meu_user.password)
