def fibo(iteration):
    ''' Function creates a list of fibonnaci numbers'''
    num = 1  # variable to create the first two numbers of fibonaci
    fibo = []
    for each in range(iteration):
        if each < 2:
            # First two iterations create the first two values
            fibo.append(num)
            num += 1
            continue
        else:
            # Append to end of list the new value of fibonnaci
            fibo.append(fibo[-1] + fibo[-2])
    print_fibo(fibo)


def print_fibo(fibo_list):
    ''' Function prints each value from the list of fibo nums'''
    for each_num in fibo_list:  # Print each number in the list of fibonnaci
        print(each_num)


def main():
    ''' Main function which prompts user for the fibonnaci numbers'''
    user_num = int(input('Enter a number: '))
    fibo(user_num)

if __name__=='__main__':
    main()
