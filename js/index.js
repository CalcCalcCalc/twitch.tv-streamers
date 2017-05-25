$(document).ready(function(){
	var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]
	//iterate with jquery instead of a for loop to handle AJAX's asyncronous nature
	$.each(streamers, function( index, value ){
		$.getJSON("https://wind-bow.gomix.me/twitch-api/streams/"+value+"?callback=?", function( data ){
			//almost certain that deactivated/non-existant accounts' JSON objects appear identical to offline ones, atleast after being requested initially
			if(data.stream != null){
				$("ul").append("<li><a id='"+ value +"' href='https://www.twitch.tv/" + value + "' target='_blank'>"+ value + "</br>Playing " + data.stream.channel.game +"</a></li>");
				$("#"+value).css('color','purple');
			}else{
				$("ul").append("<li><a id='"+ value +"' href='https://www.twitch.tv/" + value + "' target='_blank'>"+ value +"</br>Offline</li>");		
				$("#"+value).css('color','grey');
			}
		});
	});
});