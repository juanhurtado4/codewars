'''
Problem:
Implement a group_by_owners function that:

Accepts a dictionary containing the file owner name for each file name.
Returns a dictionary containing a list of file names for each owner name, in any order.
For example, for dictionary {'Input.txt': 'Randy', 'Code.py': 'Stan', 'Output.txt': 'Randy'} the group_by_owners function should return {'Randy': ['Input.txt', 'Output.txt'], 'Stan': ['Code.py']}.
'''

def group_by_owners(dictionary):
    '''
    Dict: Dictionary
    Function returns histogram of file owners
    '''
    file_owner_histogram = {}
    for key, value in dictionary.items():

        if value not in file_owner_histogram:
            file_owner_histogram[value] = [key]
            continue

        file_owner_histogram[value].append(key)

    return file_owner_histogram

test = {'Input.txt': 'Randy', 'Code.py': 'Stan', 'Output.txt': 'Randy'}
print(group_by_owners(test))
