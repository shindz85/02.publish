function getWindowHeight(){
	var target = $('body');
	function setScrH(){
        var vh = window.innerHeight * 0.01;
        target.css('--vh',`${vh}px`)
	}
	setScrH();
	$(window).on('resize' , function(){
		setScrH();
	})
}

$(function(){
    getWindowHeight();
})