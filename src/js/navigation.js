var navigationListener = (function(){
	//create listener to transfer active class to nav items
	//requires jquery
	function create($selector){
		$selector = $($selector);
		function clearAllActive(){
			$selector.removeClass('active');
			console.log('remove' + $(this).find("a").text());	
		}

		$selector.find('a').on("mousedown", function mousedownCb(){
			clearAllActive();
			var that = $(this);
			console.log('add' + that.text());	
			that.parent("li").addClass("active");
		});
	}

	return {
		create: create
	};

}());
	navigationListener.create("#navbar li");