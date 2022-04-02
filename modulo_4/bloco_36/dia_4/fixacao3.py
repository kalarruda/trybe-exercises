def nums_repeated(nums):
    ja_viu = set()
    repetido = set()

    for num in nums:
        if num in ja_viu:
            repetido.add(num)
        else:
            ja_viu.add(num)
    return repetido


# perguntar sobre essa estrutura "if __name__ == "__main__":"
if __name__ == "__main__":
    nums = [1, 6, 3, 9, 6, 7, 3, 0, 1, 6, 3, -1, 0, 3, 5, 1, 2]

    print(nums_repeated(nums))
