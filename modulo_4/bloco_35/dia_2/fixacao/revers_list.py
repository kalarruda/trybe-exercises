def reverse(list):
    reversed_list = []
    for item in list:
        reversed_list.insert(0, item)
    return reversed_list


def reverse2(list):
    if len(list) < 2:
        return list
    else:
        return reverse2(list[1:]) + [list[0]]


reverse2([1, 2, 3, 4, 5])

# a[-1]    # last item in the array
# a[-2:]   # last two items in the array
# a[:-2]   # everything except the last two items


# a[::-1]    # all items in the array, reversed
# a[1::-1]   # the first two items, reversed
# a[:-3:-1]  # the last two items, reversed
# a[-3::-1]  # everything except the last two items, reversed
