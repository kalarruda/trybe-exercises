# import csv
# from pathlib import Path

from collections import Counter

# TENTAR COLOCAR TRY E EXCEPT AQUI NESSA FUNCAO==============
# def get_csv_data(path_to_file):
#     with open(path_to_file, "r") as file:
#         data = csv.reader(file)
#         data_info = list(data)
#     return data_info
# print para conferir se saida está correta
# print(get_csv_data())


# def maria_most_orders(path_to_file):
#     file_info = get_csv_data(path_to_file)
#     count = {}
#     frequent_order = path_to_file[1]
#     for order in range(len(file_info)):
#         if file_info[0] == "maria":
#             if order not in file_info:
#                 count[order] = 1
#             else:
#                 count[order] += 1

#             if count[order] > count[frequent_order]:
#                 frequent_order = order
#     return frequent_order


# def maria_most_orders(path_to_file):
#     file_info = get_csv_data(path_to_file)
#     count = {}
#     frequent_order = path_to_file[1]
#     for order in range(len(file_info)):
#         if file_info[order][0] == "maria":
#             if order not in file_info:
#                 count[order] = 1
#             else:
#                 count[order] += 1

#             if count[order] > count[frequent_order]:
#                 frequent_order = order
#     return frequent_order

# def maria_orders(path_to_file)
#     file_info = get_csv_data(path_to_file):
#     maria_orders = []
#     for order in range(len(file_info)):
#         if file_info[0] == "maria":
#             maria_orders.append(file_info[order][1])
# return list(Counter(maria_orders))[0]

lista = [
    ("arnaldo", "coxinha", "terça-feira"),
    ("jose", "hamburguer", "sabado"),
    ("maria", "hamburguer", "domingo"),
    ("maria", "pizza", "domingo"),
    ("joao", "hamburguer", "domingo"),
    ("maria", "pizza", "terça-feira"),
    ("maria", "coxinha", "domingo"),
    ("arnaldo", "misto-quente", "terça-feira"),
]

lista2 = [
    ("jorge", "frango", "domingo"),
    ("jorge", "frango", "domingo"),
    ("arnaldo", "peixe", "sábado"),
    ("maria", "carne", "terça-feira"),
    ("joao", "salada", "segunda-feira"),
]


# def get_busiest_day(lista):
#     all_orders_info = lista
#     count = {}
#     most_frequent = all_orders_info[0][2]
#     size_orders = range(len(all_orders_info))
#     for order in size_orders:
#         if all_orders_info[order][2] not in count:
#             count[all_orders_info[order][2]] = 1
#         else:
#             count[all_orders_info[order][2]] += 1
#         if count[all_orders_info[order][2]] > count[most_frequent]:
#             most_frequent = all_orders_info[order][2]
#     return most_frequent


# retorna sábado e não domingo
def get_busiest_day(lista):
    all_orders_info = lista
    days_visited = []
    size_orders = range(len(all_orders_info))
    for order in size_orders:
        days_visited.append(all_orders_info[order][2])
    return list(Counter(days_visited))[0]


print(get_busiest_day(lista2))

# def get_busiest_day(path_to_file):
#     count = {}
#     file_info = path_to_file
#     size_orders = range(len(path_to_file))
#     most_frequent = size_orders[0][2]

#     for order in size_orders:
#         if file_info[order][2] not in count:
#             count[file_info[order][2]] = 1
#         else:
#             count[file_info[order][2]] += 1
#         if count[file_info[order][2]] > count[most_frequent]:
#             most_frequent = file_info[order][2]
#     return most_frequent


# def get_most_ordered_dish_per_customer(lista, customer):
#     all_orders_info = lista
#     person_orders = []
#     size_orders = range(len(all_orders_info))
#     for order in size_orders:
#         if all_orders_info[order][0] == customer:
#             person_orders.append(all_orders_info[order][1])
#     return person_orders[1]

# def get_most_ordered_dish_per_customer(lista, customer):
#     all_orders_info = lista
#     total_customers = []
#     size_orders = range(len(all_orders_info))
#     for order in size_orders:
#         if all_orders_info[order][0] == customer:
#             # print(all_orders_info[order][1])
#             total_customers.append(all_orders_info[order][1])
#     print(total_customers)
#     orders = Counter(total_customers)
#     print('pedidos:', orders)
#     most_frequent = orders.most_common()
#     print('mais frequente:', most_frequent)
#     return most_frequent[0][0]


# def get_busiest_day(self):
#     all_orders_info = self.orders
#     count = {}
#     most_frequent = all_orders_info[0][2]
#     size_orders = range(len(all_orders_info))
#     for order in size_orders:
#         if all_orders_info[order][2] not in count:
#             count[all_orders_info[order][2]] = 1
#         else:
#             count[all_orders_info[order][2]] += 1
#         if count[all_orders_info[order][2]] > count[most_frequent]:
#             most_frequent = all_orders_info[order][2]
#     return most_frequent


# def get_most_ordered_dish_per_customer(lista, customer):
#     all_orders_info = lista
#     count = {}
#     size_orders = range(len(all_orders_info))
#     for order in size_orders:
#         if all_orders_info[order][0] == customer:
#             most_frequent = all_orders_info[order][1]
#             # print(most_frequent)
#             if all_orders_info[order][1] not in count:
#                 count[all_orders_info[order][1]] = 1
#             else:
#                 count[all_orders_info[order][1]] += 1
#             if count[all_orders_info[order][1]] > count[most_frequent]:
#                 most_frequent = all_orders_info[order][1]

#     return most_frequent


# print(get_most_ordered_dish_per_customer(lista, 'maria'))

# def get_busiest_day(lista):
#     all_orders_info = lista
#     days_visited = []
#     size_orders = range(len(all_orders_info))
#     for order in size_orders:
#         days_visited.append(all_orders_info[order][2])
#     return days_visited[2]

# def get_busiest_day(path_to_file):
#     count = {}
#     file_info = path_to_file
#     most_frequent = file_info[0][2]

#     for order in range(len(file_info)):
#         if file_info[order][2] not in count:
#             count[file_info[order][2]] = 1
#         else:
#             count[file_info[order][2]] += 1
#         if count[file_info[order][2]] > count[most_frequent]:
#             most_frequent = file_info[order][2]
#     return most_frequent


# def get_busiest_day(list):
#     all_orders_info = list
#     all_days = set()
#     size_orders = range(len(all_orders_info))
#     for order in size_orders:
#         all_days.add(all_orders_info[order][0])
#     return max(all_days)

# def maria_most_orders(path_to_file):
#     count = {}
#     file_info = path_to_file
#     most_frequent = file_info[0][1]

#     for order in range(len(file_info)):
#         # if file_info[order][0] == "maria":
#         if file_info[order][1] not in count:
#             print(file_info[order][1])
#             count[file_info[order][1]] = 1
#         else:
#             count[file_info[order][1]] += 1
#         if count[file_info[order][1]] > count[most_frequent]:
#             most_frequent = file_info[order][1]
#     return most_frequent


# def maria_most_orders(path_to_file):
#     file_info = get_csv_data(path_to_file)
#     maria_orders = []
#     for order in range(len(file_info)):
#         if file_info[order][0] == "maria":
#             maria_orders.append(file_info[order][1])
#     return list(Counter(maria_orders))[0]


# maria_most_orders(lista)

# def arnaldo_hamburguers(path_to_file):
#     file_info = range(len(path_to_file))
#     count = int(0)
#     for order in file_info:
#         if file_info[order][0] == 
# "arnaldo" and file_info[order][1] == "hamburguer":
#             count += 1
#     return count

# print(arnaldo_hamburguers(lista))


# def arnaldo_hamburguers(path_to_file):
#     file_info = get_csv_data(path_to_file)
#     count = 0
#     for order in range(len(file_info)):
#         if (
#             file_info[order][0] == "arnaldo"
#             and file_info[order][1] == "hamburguer"
#         ):
#             count += 1
#         else:
#             count = count
#     return count


# https://pt.stackoverflow.com/questions/382049/verificar-extens%C3%B5es-de-arquivos-em-python
# def analyze_log(path_to_file):
#     extension = Path(path_to_file)
#     if (extension.glob(".csv")) is False:
#         raise FileNotFoundError
#     try:
#         with open("./data/mkt_campaign.txt", "w") as file:
#             file.write("{}\n".format(maria_most_orders(path_to_file)))
#             file.write("{}\n".format(arnaldo_hamburguers(path_to_file)))
#     except FileNotFoundError:
#         raise FileNotFoundError


# def analyze_log(path_to_file):
#     extension = Path(path_to_file)
#     if (extension.glob('.csv')) is False:
#         raise FileNotFoundError
#     try:
#         with open('./data/mkt_campaign.txt', 'w') as file:
#             info_orders = [
#               maria_most_orders,
#               arnaldo_hamburguers,
#             ]
#             file.writelines([f"{str(item)}\n" for item in info_orders])
#     except FileNotFoundError:
#         raise FileNotFoundError

# def analyze_log(path_to_file):
# raise NotImplementedError
# try:
#     with open(path_to_file, "r") as file:
#         data = []
#         csv_reader = csv.DictReader(file, delimiter=",", quotechar='"')
# except FileNotFoundError:
#     if '.csv' not in path_to_file:
#         raise FileNotFoundError(f"Extensão não é csv")
