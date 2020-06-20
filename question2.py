test_input = [
    [5,2],
    [3,3,2],
    [1,1,2]
]

def set_pizzeria(no_of_pizzerias, arr):
    '''
       Create hashmaps for each pizzeria 
       Output: [...,{}]
    '''
    pizzeria_arr = []
    if len(arr) - 1 > no_of_pizzerias:
        Exception('Array length doesnt match no. of pizzerias')
    for element in arr[1:]:
        pizzeria = {
            'coords': [],
            'distance': 0
        }
        pizzeria['coords'] = element[:-1]
        pizzeria['distance'] = element[-1]
        pizzeria_arr.append(pizzeria)
    return pizzeria_arr


if __name__ == '__main__':
    if len(test_input[0]) < 2 or len(test_input[0]) > 2:
        Exception('Length cannot be greater than or less than 2')
    dimensions = test_input[0][0]
    no_of_pizzerias = test_input[0][1]
    print(no_of_pizzerias, dimensions)