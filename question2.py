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

class Grid():
    
    
    def __init__(self, dimensions, no_of_pizzerias, pizzerias):
        # also needs to know about the amount of pizzerias & details
        if (dimensions < 1) or (dimensions > 1000):
            Exception('Grid dimensions should be between 1-1000.')
        
        if (no_of_pizzerias < 1) or (no_of_pizzerias > 1000):
            Exception('No of pizzerias should be between 1-1000.')

        for pizzeria in pizzerias:
            if (pizzeria['distance'] < 1) or (pizzeria['distance'] > 100):
                 Exception('Pizzeria delivery range should be between 1-100.')
        
        self.dimensions = dimensions
        self.no_of_pizzerias = no_of_pizzerias
        self.pizzerias = pizzerias
        self.grid = []
        self.grids = []
       
    
    def create(self):
        '''
            Create the grid to show the delivery distances of each pizzeria
            output :
            [
                [0, 0, 0, 0, 0], 
                [0, 0, 0, 0, 0], 
                [0, 0, 0, 0, 0], 
                [0, 0, 0, 0, 0], 
                [0, 0, 0, 0, 0]
            ]
        '''
        grid = [[0 for x in range(self.dimensions)] for y in range(self.dimensions)]
        self.grid = grid
    
    def set_pizzeria_on_grid(self):
        counter = 1
        for pizzeria in self.pizzerias:
            self.create()
            x = pizzeria['coords'][0] - 1
            y = pizzeria['coords'][1] - 1
            self.grid[x][y] = 1
            self.calculate_pizzeria_delivery_range_XY(pizzeria, x, y)
            self.calculate_pizzeria_delivery_range_diagonal(pizzeria, x, y)
            self.grids.append(self.grid)
        return self.format_grids(), np.max(self.format_grids())
    
    def calculate_pizzeria_delivery_range_XY(self, pizzeria, x, y):
        for step in range(1, pizzeria['distance']  + 1):
            if (x + step) < self.dimensions:
                self.grid[x + step][y] = 1
            if (x - step) >= 0:
                self.grid[x - step][y] = 1
            if (y + step) < self.dimensions:
                self.grid[x][y + step] = 1
            if (y - step) >= 0:
                self.grid[x][y - step] = 1
    

if __name__ == '__main__':
    if len(test_input[0]) < 2 or len(test_input[0]) > 2:
        Exception('Length cannot be greater than or less than 2')
    dimensions = test_input[0][0]
    no_of_pizzerias = test_input[0][1]
    pizzerias = set_pizzeria(no_of_pizzerias, test_input)
    grid = Grid(dimensions, no_of_pizzerias, pizzerias)
    grid.create()
    print(no_of_pizzerias, dimensions)