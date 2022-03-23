def convert(n):
    result, rest = divmod(n, 2)
    if n > 1:
        convert(result)
    print(f"{rest}\n", end="")


convert(20)

print("\n")
