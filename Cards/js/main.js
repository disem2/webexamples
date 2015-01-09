scrollCards($('#start'), 'canvas');

function scrollCards(button, holder){
	var canvas = new fabric.Canvas(holder);
	var cards = [];
	var cardHeight = 100,
	deck = 13,
	time = 5, // Seconds	
	speed = 3, // Cards per. second
	canvasCapacity = 3,
	cardsQuantity = time * speed - canvasCapacity,
	startPosition = canvasCapacity - cardsQuantity - 1,
	randomCards;

	cards = getCards(deck);

	randomCards = getRandom(cards, cardsQuantity);		

	// Setting last cards
	randomCards[0] = 'images/r1.gif';
	randomCards[1] = 'images/r1.gif';
	randomCards[2] = 'images/r12.gif';

	$(randomCards).each(function(index){
		fabric.Image.fromURL(randomCards[index], function(oImg){
			oImg.top = cardHeight * (index + startPosition);
			oImg.selectable = false;
			canvas.add(oImg);

			$(button).on('click', function(){
				oImg.animate('top', cardHeight * index, {
					duration: time * 1000,
					onChange: canvas.renderAll.bind(canvas)
				})
			})				
		});
	});

	$(button).on('click', function() {

	    canvas.on('top', 100, {
	        onChange: canvas.renderAll.bind(canvas)
	    });
	});

	function getCards(quantity){

		var index = 0,
		link,
		result = [];
		while(true){
			link = 'images/r' + index + '.gif';
			result[index] = link;
			index++;	

			if(index == quantity) {
				return result;
			}
		}
		
	}

	function getRandom(elements, number){
		var result = [];

		$(cards).each(function(index){
			result[index] = cards[Math.floor(cards.length * Math.random())];
		});

		return result;
	}
}
