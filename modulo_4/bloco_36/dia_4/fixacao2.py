lista_a = [1, 2, 4, -43, 0, 3]
lista_b = [4, 4, 9, 578, 12]

# set_a = set()

# for item in lista_a:
#     set_a.add(item)

# print(set_a)

set_a = set(lista_a)
set_b = set(lista_b)
set_c = {-1, 1000, 999}
# print(set_a)

print(set_a.union(set_b, set_c))
print(set_a.intersection(set_b))
print(set_a.difference(set_b))
print(set_b.difference(set_a))
