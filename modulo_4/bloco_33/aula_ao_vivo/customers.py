class Customer:
    def __init__(self, name, email=""):
        self.name = name
        self.email = email
        self._password = "1234"

    def set_password(self, new_password):
        pass

    def verify_password(self, password):
        pass

    def customer_info(self):
        # if (self.name="" or self.email=""):
        #     print(f"Nome ou email de usuário não preenchido")
        print(f"Cliente: {self.name}\nEmail: {self.email}")
