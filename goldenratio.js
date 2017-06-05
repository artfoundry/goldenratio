function fib(n1, n2, dir) {
	var newDiv = document.createElement('div'),
		newCurve = document.createElement('div'),
		direction = function(dir, n1, n2) {
			switch(dir % 4) {
				case 0:
					return 'right: ' + n1 + 'px;';
				case 1:
					return 'top:' + n1 + 'px;';
				case 2:
					return 'left:' + n1 + 'px; bottom: 0;';
				case 3:
					return 'bottom:' + n1 + 'px; right: 0;';
			}
		},
		curveCorner = function(dir) {
			switch(dir % 4) {
				case 0:
					return 'topleft';
				case 1:
					return 'bottomleft';
				case 2:
					return 'bottomright';
				case 3:
					return 'topright';
			}
		},
		parent = document.getElementById(n2);

	newCurve.setAttribute('class', curveCorner(dir));
	newCurve.setAttribute('style', 'width: ' + (n2) + 'px; height: ' + (n2) + 'px; ' + direction(dir, n1, n2));
	newDiv.setAttribute('id', n1+n2);
	newDiv.setAttribute('style', 'width: ' + (n2) + 'px; height: ' + (n2) + 'px; ' + direction(dir, n1, n2));
	parent.insertBefore(newDiv, null);
	parent.insertBefore(newCurve, null);

	if (n2 < 500) {
		setTimeout(function() {
			fib(n2, n1 + n2, dir + 1);
		}, 100);
	}
}

document.onload = fib(10, 10, 0);

// for curves, add second div with border-radius set to 80px for one corner and 0 for all other corners