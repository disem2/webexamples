scrollCards($('#start'), 'canvas');

function scrollCards(button, holder){
	var canvas = new fabric.Canvas(holder);
	var cards = [
		'images/r0.gif',
		'images/r1.gif',
		'images/r2.gif',
		'images/r3.gif',
		'images/r4.gif',
		'images/r5.gif',
		'images/r6.gif',
		'images/r7.gif',
		'images/r8.gif',
		'images/r9.gif',
		'images/r10.gif',
		'images/r11.gif',
		'images/r12.gif'
	];
	var cardHeight = 100,
	cardsQuantity = 20,
	canvasCapacity = 3,
	startPosition = canvasCapacity - cardsQuantity - 1,
	randomCards = getRandom(cards, cardsQuantity);

	// Setting last cards
	randomCards[0] = cards[0];
	randomCards[1] = cards[0];
	randomCards[2] = cards[12];

	$(randomCards).each(function(index){
		fabric.Image.fromURL(randomCards[index], function(oImg){
			canvas.add(oImg);
			oImg.top = cardHeight * (index + startPosition);
			canvas.renderAll();

			$(button).on('click', function(){
				oImg.animate('top', cardHeight * index, {
					duration: 5000,
					onChange: canvas.renderAll.bind(canvas)
				})
			})				
		});
	});

	function getRandom(elements, number){
		var result = [],
		i, max = elements.length;

		Array.prototype.random = function (length) {
		       return this[Math.floor((Math.random()*length))];
		 }

		for (i = cardsQuantity; i > 0; i--) (function(a){
			result[a] = cards.random(cards.length);			
		})(i);

		return result;
	}
}
