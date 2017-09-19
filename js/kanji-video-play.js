// JavaScript Document
var modal = document.getElementById('character_pop');
var url = 'http://www.youtube.com/embed/';
var quote = '"';		

function draw(id,start,end) {
//		modal.style.zIndex = "999";
//		modal.style.opacity = "100";

//		modal.style.display = "block";

	$("#character_pop").addClass("character_vis");
	document.body.style.overflow = "hidden";		
	
	var params = "?autoplay=1&loop=1&rel=0&enablejsapi=1&start=" + start + "&end=" + end;
	
	if (modal.clientWidth >= 900) {
		var width = modal.clientWidth * .5;
		var height = modal.clientWidth * .28125;
	}

	else if (500 < modal.clientWidth && modal.clientWidth < 900) {
		var width = modal.clientWidth * .7;
		var height = modal.clientWidth * .39375;
	}
	
	else if (modal.clientWidth <= 500) {
		var width = modal.clientWidth * .9;
		var height = modal.clientWidth * .50625;
	}
	
	if (typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined') {		
		var tag = document.createElement('script');
		tag.src = "https://www.youtube.com/iframe_api";
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
		
		window.onYouTubePlayerAPIReady = function() {
		  onYouTubePlayer();
		};
	
	  } else {
			onYouTubePlayer();
	}
	
	var player;
	
	function onYouTubePlayer() {
		modal.innerHTML += "<iframe id=" + quote + "ytplayer" + quote + "width =" + quote + width + quote + " height=" + quote + height + quote + " src=" + quote + url + id + params + quote + " frameborder=0" + quote + " allowfullscreen></iframe>";
		player = new YT.Player ('ytplayer', {
			events: { 'onStateChange': onPlayerStateChange, 'onReady': onPlayerReady }
		});
	}
	
	function onPlayerStateChange(event) {
		if(event.data === 0) {
			$("#character_pop").removeClass("character_vis");
			modal.innerHTML = "";
			document.body.style.overflow = "auto";
			$(document).off("touchstart click", clickHandler);
		} 
	}
			
	function onPlayerReady() {
		$(document).on("touchstart click", clickHandler);
	}
		
	function clickHandler(event) {
		$("#character_pop").removeClass("character_vis");
		modal.innerHTML = "";
		document.body.style.overflow = "auto";
		$(document).off("touchstart click", clickHandler);
	}
	
//		window.onclick = function(event) {
//			if (event.target == modal) {
//				$("#character_pop").removeClass("character_vis");
//				modal.innerHTML = "";
//				document.body.style.overflow = "auto";
//			}
//		}
	
//		function onPlayerStateChange(event) {
//			if(event.data === 0) {
//				modal.style.opacity = "0";
//				modal.style.zIndex = "-999";
//				modal.innerHTML = "";
//			}
//		}
//		
//		window.onclick = function(event) {
//			if (event.target == modal) {
//				modal.style.opacity = "0";
//				modal.style.zIndex = "-999";
//				modal.innerHTML = "";
//			}
//		}
}

function lesson(id) {
	var lessonDiv = document.getElementById('lesson');
	
	var params = "?autoplay=1loop=1&rel=0&enablejsapi=1";
	
	if (500 < window.innerWidth) {
		var width = lessonDiv.clientWidth * .7;
		var height = lessonDiv.clientWidth * .39375;
	}
	
	else if (window.innerWidth <= 500) {
		var width = lessonDiv.clientWidth * .9;
		var height = lessonDiv.clientWidth * .50625;
	}
	
	if (typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined') {		
		var tag = document.createElement('script');
		tag.src = "https://www.youtube.com/iframe_api";
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
		
		window.onYouTubePlayerAPIReady = function() {
		  onYouTubePlayer();
		};
	
	  } else {
			onYouTubePlayer();
	}
	
	var player;

	function onYouTubePlayer() {
		lessonDiv.innerHTML += "<iframe id=" + quote + "ytplayer" + quote + "width =" + quote + width + quote + " height=" + quote + height + quote + " src=" + quote + url + id + params + quote + " frameborder=0" + quote + " allowfullscreen></iframe>";
	}
}