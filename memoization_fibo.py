from functools import lru_cache

@lru_cache(1000)
def fibo(n):
    if n == 1: return 1
    elif n == 2: return 1
    elif n > 2: return fibo(n - 1) + fibo(n - 2)

for n in range(1, 1001):
    print(n, ': ', fibo(n))
