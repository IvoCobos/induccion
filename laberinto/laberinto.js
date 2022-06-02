var maze = new Array();

maze[0] = new Array(1, 1, 1, 1, 1, 1);
maze[1] = new Array(1, 0, 1, 1, 0, 1);
maze[2] = new Array(1, 1, 1, 1, 0, 1);
maze[3] = new Array(0, 0, 1, 0, 1, 1);
maze[3] = new Array(0, 0, 1, 0, 1, 0);
maze[4] = new Array(0, 0, 1, 1, 1, 1);


for (let y = 0; y < maze.length; y++) {
    for (let x = 0; x < maze[y].length; x++) {
        if (maze[x] && maze[y] == 1) {
        }
        if (maze[y + 1] && maze[y + 1][x] == 1) {
            maze[y + 1][x] = 4;
            console.log("y", maze)
            break;

        }
        if (maze[y] && maze[y][x + 1] == 1) {
            maze[y][x + 1] = 4;
            console.log("x", maze)
            break;
        }
    }
}
console.log(maze);
