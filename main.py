def func1(x):
    y = 10
    def func2():
        nonlocal x, y
        x += 10
        y += 100
        print(x, y)
    return func2

f = func1(100)
f()
f()
f()

