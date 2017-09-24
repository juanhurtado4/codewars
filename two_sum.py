'''
Problem description:
Given an array of integers return the indexes of two integers that
add up to the target number.
Example:
arr = [2, 7, 11, 20]
tager_num = 9
check = arr[0] + arr[1] # equals 9 because 2 + 7 = 9
return (0, 1)
'''

def add_two(array, target):
    '''
    Function receives an array and an Int.
    Function finds the indexes of two numbers from the array that add up to
    target number.
    Returns tuple of indexes.
    '''

    for each in array:
        if each >= target: # Skips any number that is bigger than the target
            continue
        for second_index, second_each in enumerate(array):
            if second_index == 0:
                continue
            elif (second_each + each) == target:
                    result_indexes = (array.index(each), array.index(second_each))
                    return (result_indexes)


def main():
    '''
    Runs program. Ask user for an array (each value seperated by commas) and a
    whole number.
    Returns tuple of the two indexes.
    '''
    array = input("Please enter array: ")
    array = array.split(',')
    array = [int(number) for number in array]
    target = int(input("Please enter target number: "))
    print(add_two(array, target))

if __name__ == '__main__':
    main()
