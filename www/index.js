//when the jQuery Mobile page is initialised
// $(document).ready(function(){
//     $('#turnon').click(function(){
//         $(this).toggleClass("btnClicked");
//     });
// });

$(document).on('pageinit', function() {
	
	//https://demos.jquerymobile.com/1.2.0/docs/forms/switch/
	//set up listener for button click
	  $('#btn').click(function(){
       $(this).toggleClass("btnClicked");
        });

	 function toggleState(item){
           if(item.className == "on") {
              $(document).on('click',checklocation);
              item.className="off";

           } else {
             $(document).on('click', clearlocation);
             item.className="on";
           }
        }
	// $(document).on('click', checklocation);
	// $(document).getElementById("turnon").on('click', checklocation);
	// $(document).getElementById("turnof").on('click', clearlocation);
	
	//change time box to show message
	$('#time').val("Press the button to get location data");
	
});

function checklocation(){

	var watchID = navigator.geolocation.watchPosition(success, fail, locationOptions);
}

function clearlocation(){ 
	navigator.geolocation.clearWatch(watchID);

}

function success(position) { 
		 //do something with the position 
		 //You can find out more details about what the position obejct contains here:
	// http://www.w3schools.com/html/html5_geolocation.asp
	

	//lets get some stuff out of the position object
	var time = position.timestamp;
	var latitude = position.coords.latitude;
	var unixtime = new Date(position.timestamp); 
    var date = unixtime.toDateString();


    
	
	//OK. Now we want to update the display with the correct values
	$('#time').val("Recieved data at " + unixtime);
	$('#lattext').val(latitude);
	$('#date').val("date is..." + date);
	
	} 
	function fail(error) { 
		 //do something with the error 
		 //change time box to show updated message
	$('#time').val("Error getting data: " + error);
	}

function locationOptions(position) {

var locationOptions = { maximumAge: 3000, timeout: 4000, enableHighAccuracy: true };
		// $('#loc').val(locationOptions);

}


//Call this function when you want to get the current position
function getPosition() {
	
	//change time box to show updated message
	$('#time').val("Getting data...");
	
	//instruct location service to get position with appropriate callbacks
	navigator.geolocation.getCurrentPosition(successPosition, failPosition);

}


//called when the position is successfully determined
function successPosition(position) {
	
	//You can find out more details about what the position obejct contains here:
	// http://www.w3schools.com/html/html5_geolocation.asp
	

	//lets get some stuff out of the position object
	var time = position.timestamp;
	var latitude = position.coords.latitude;
	var unixtime = new Date(position.timestamp); 
    var date = unixtime.toDateString();
    var locationOptions = { maximumAge: 10000, timeout: 6000, enableHighAccuracy: true };

	
	//OK. Now we want to update the display with the correct values
	$('#time').val("Recieved data at " + unixtime);
	$('#lattext').val(latitude);
	$('#date').val("date is..." + date);
	
}

//called if the position is not obtained correctly
function failPosition(error) {
	//change time box to show updated message
	$('#time').val("Error getting data: " + error);
	
}