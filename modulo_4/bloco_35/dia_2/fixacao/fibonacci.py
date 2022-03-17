def fibonacci(n):
    sequence = [0, 1]
    for x in range(n):
        next = sequence[-1] + sequence[-2]
        sequence.append(next)
    return sequence[n]


def fibonacci2(n):
    if n < 2:
        return n
    else:
        return fibonacci2(n-1) + fibonacci2(n-2)


fibonacci2(1)
