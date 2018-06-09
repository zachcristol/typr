

with open("words.txt") as f:
    count = 0
    for line in f:
        print("\"{}\":\"{}\",".format(count, line[:-1]))
        count += 1

# print('hello')