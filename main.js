let canvas = document.querySelector('.canvas')
let ctx = canvas.getContext('2d')

map = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

map[10][10] = 'h'

let head = [10, 10]
let tail = 1
let dir = 'right'
let tickTime = 400

document.addEventListener('keydown', (e) => {
    if (e.key == 'w') {
    	dir = 'top'
    } else
    if (e.key == 'a') {
    	dir = 'left'
    } else 
    if (e.key == 's') {
    	dir = 'bottom'
    } else
    if (e.key == 'd') {
    	dir = 'right'
    }
})

let draw = () => {
	ctx.clearRect(0, 0, 714, 714)
	for (let i = 0; i < 21; i++) {
		for (let j = 0; j < 21; j++) {
			if (map[i][j] != 0) {
				if (map[i][j] == 'h') {
					ctx.fillStyle = '#178E0E'
				} else
				if (map[i][j] > 0) {
					ctx.fillStyle = '#6DD365'
				} else
				if (map[i][j] == 'a') {
					ctx.fillStyle = 'red'
				}
				ctx.fillRect(i * 34 + 1, j * 34 + 1, 32, 32)
			}
		}
	}
}

let spawnApple = () => {
	let x = Math.floor(Math.random() * 19) + 1
	let y = Math.floor(Math.random() * 19) + 1

	if (map[x][y] == 0) {
		map[x][y] = 'a'
	} else {
		spawnApple()
	}
}

spawnApple()
spawnApple()
spawnApple()
spawnApple()
spawnApple()

let update = () => {
	draw()
	if (dir == 'top') {
		if (head[1] - 1 != -1) {
			if (map[head[0]][head[1] - 1] == 'a') {
				tail++
				spawnApple()
			}
			map[head[0]][head[1]] = tail
			head = [head[0], head[1] - 1]
			map[head[0]][head[1]] = 'h'
		} else {
			map[head[0]][head[1]] = tail
			head[1] = 20
			map[head[0]][head[1]] = 'h'
		}
	} else
	if (dir == 'left') {
		if (head[0] - 1 != -1) {
			if (map[head[0] - 1][head[1]] == 'a') {
				tail++
				spawnApple()
			}
			map[head[0]][head[1]] = tail
			head = [head[0] - 1, head[1]]
			map[head[0]][head[1]] = 'h'
		} else {
			map[head[0]][head[1]] = tail
			head[0] = 20
			map[head[0]][head[1]] = 'h'
		}
	} else
	if (dir == 'bottom') {
		if (head[1] + 1 != 21) {
			if (map[head[0]][head[1] + 1] == 'a') {
				tail++
				spawnApple()
			}
			map[head[0]][head[1]] = tail
			head = [head[0], head[1] + 1]
			map[head[0]][head[1]] = 'h'
		} else {
			map[head[0]][head[1]] = tail
			head[1] = 0
			map[head[0]][head[1]] = 'h'
		}
	} else
	if (dir == 'right') {
		if (head[0] + 1 != 21) {
			if (map[head[0] + 1][head[1]] == 'a') {
				tail++
				spawnApple()
			}
			map[head[0]][head[1]] = tail
			head = [head[0] + 1, head[1]]
			map[head[0]][head[1]] = 'h'
		} else {
			map[head[0]][head[1]] = tail
			head[0] = 0
			map[head[0]][head[1]] = 'h'
		}
	}
	for (let i = 0; i < 21; i++) {
		for (let j = 0; j < 21; j++) {
			if (map[i][j] > 0) {
				map[i][j]--
			}
		}
	}
	tickTime = 300 - tail * 2
	if (tickTime < 50) {
		tickTime = 150
	}
	setTimeout(update, 150)
}

update()