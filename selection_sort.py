def selection_sort(arr):
    new_arr = arr
    final_arr = []
    for num in range(len(arr)):
        final_arr.append(min(new_arr))
        new_arr.remove(min(new_arr))
    return final_arr

def main():
    arr1 = input('Please enter an array with commas between values: ')
    arr1 = [int(num) for num in arr1]
    print(selection_sort(arr1))

if __name__=='__main__':
    main()
