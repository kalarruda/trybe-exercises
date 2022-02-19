from customers import Customer
from accounts import Account

cliente1 = Customer('jose', 'jose.arruda@hotmai.com')
cliente2 = Customer('Gica')
# Customer.customer_info(cliente1)  pode ser desse jeito também
# cliente1.customer_info()
# cliente2.customer_info()

conta1 = Account(cliente1, '555-7')
conta2 = Account(cliente2, '784-7')

conta1.deposito(3000)
conta1.saque(150)
# conta1._customers.customer_info()
conta1.extrato()
