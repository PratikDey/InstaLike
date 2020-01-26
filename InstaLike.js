

var count = 0;
setInterval(function() {
	var heart = document.querySelector('.wpO6b');
	var arrow = document.querySelector('a.coreSpriteRightPaginationArrow');

	if (heart)  {
		heart.click();
		count++;
		console.log(`You have liked ${count} photos`);
	}
	arrow.click();
}, 3000);