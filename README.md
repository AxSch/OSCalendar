# Question 1
`cd` in to the calendar dir

then run the following:
```yarn start```

# Question 2

Use pipenv to install the relevant dependancies from pipfile.lock

activate environment by running:
```pipenv shell```

Run the script by executing the following comamand:
```python3 question2.py```


1. 
    * Create a grid of N x N(2D array)
    * Use the following contraints where:
         N > 0 <= 1000
         1 <= X
         Y <= N
         1 <= R <= 100ls
    * Store pizzeria's as hashmaps, with the coordinates & distance
    * Take the input as an array of arrays
    * Create a class called Grid to map out the pizzeria delivery locations
    * Calculate the horizontal & vertical range for a pizzeria
    * Calculate the diagonal range for a pizzeria
    * Separate the grid layout for each pizzeria then add them together
    * Then workout the maximum pizza selection for the grid

3. The complexity of my solution would be O(n**2), I think  it could be improved if I were to use to hashmaps for the grid & it's coordinates which would prevent the usage of looping through the grid for each pizzeria.
