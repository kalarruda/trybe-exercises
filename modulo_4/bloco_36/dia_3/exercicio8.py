# encontre o numero com maior frequencia

list_numbers = [3, 4, 5, 6, 5, 3, 1, 4, 8, 3, 3]


def count(nums):
    count = {}
    # count vai guardar os numeros e suas frequencias
    most_frequent = nums[0]
    # most_frequent pega o numero mais frequente e guarda partindo do principio
    # que o primeiro numero já é o mais frequente

    for num in nums:
        if num not in count:
            count[num] = 1
        else:
            count[num] += 1

        if count[num] > count[most_frequent]:
            most_frequent = num
    # print(count)
    # return most_frequent
    print(f"Número mais frequente: {most_frequent}")


count(list_numbers)
