/*
 * Complete the function below.
 */
function doesCircleExist(commands) {

	var x = 0, y = 0, direction = 'north';

  var go = function () {
		var len = commands.length;
		for (var i = 0; i < len; i++) {
			var ins = commands[i];
// 			console.log(ins);
      if (ins === 'G') {
				if (direction === 'north') {
					x++;
				} else if (direction === 'south') {
					x--;
				} else if (direction === 'west') {
					y--;
				} else if (direction === 'east') {
					y++;
				}
			} else if (ins === 'L') {
				if (direction === 'north') {
          direction = 'west'
				} else if (direction === 'south') {
					direction = 'east'
				} else if (direction === 'west') {
					direction = 'south'
				} else if (direction === 'east') {
					direction = 'north'
				}
			} else if (ins === 'R') {
								if (direction === 'north') {
          direction = 'east'
				} else if (direction === 'south') {
					direction = 'west'
				} else if (direction === 'west') {
					direction = 'north'
				} else if (direction === 'east') {
					direction = 'south'
				}
			}
		}
	}

	for (var i = 0 ; i < 4 ; i++) {
		go();
	}

// 	console.log(x, y, direction);
	return x === 0 && y === 0 ? 'YES' : 'NO';
}

doesCircleExist('L');
doesCircleExist('GRGL');
// doesCircleExist
