	var maze = new Array();

	for (var rows = 0; rows < 5; rows++) {
		maze[rows] = new Array();
	}
	maze[0][0] = new Array(1, 1, 1, 1, 1);
    maze[1][0] = new Array(1, 0, 1, 1, 1);
	maze[2][0] = new Array(1, 1, 0, 1, 1);
    maze[3][0] = new Array(1, 1, 1, 0, 1);
    maze[3][0] = new Array(1, 1, 1, 0, 0);
    
    console.log(maze)

    for(let i = 0; maze.length == 1; i++){
        console.log(maze[i]);
    }