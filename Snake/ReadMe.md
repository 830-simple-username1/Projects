# Displaying the board and a still snake

# Making the canvas

# Making the snake
    - The yyy-coordinate for all parts is always 200. The xxx-coordinate is at decrements of 10 to represent different parts of the snake’s body. The very first coordinate represents the snake’s head.
    - Now, to display the snake on the canvas, we can write a function to draw a rectangle for each pair of coordinates.

# Making the style

# Making the snake move automatically
## Horizontal movement 
    - To make the snake move one step (10px) to the right, we can increase the xxx-coordinate of every part of the snake by 10px (dx = +10).
    - To make the snake move to the left, we can decrease the x-coordinate of every part of the snake by 10px (dx = -10).
    - dx is the horizontal velocity of the snake. We need to create a function move_snake that will update the snake.