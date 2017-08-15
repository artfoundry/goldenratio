(function fib(n1, n2, dir, limit) {
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

	if (n2 < limit) {
		setTimeout(function() {
			fib(n2, n1 + n2, dir + 1, limit);
		}, 100);
	}
})(10, 10, 0, 1000);
// First two values indicate the size of the elements and are also ids for the elements.
// Third is starting direction. Last is how many cycles to go.
// Only last number can be changed without changing code
