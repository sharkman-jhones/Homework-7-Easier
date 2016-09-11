// Initialize Firebase
var config = {
	apiKey: "AIzaSyBJlXMv2SHC0KPrmjGG3bqMlf3digTt9t4",
	authDomain: "hw7-train-scheduling.firebaseapp.com",
	databaseURL: "https://hw7-train-scheduling.firebaseio.com",
	storageBucket: "",
};
firebase.initializeApp(config);

var database = firebase.database();


$('#submitButton').click(function(){
	var trainName = $('#trainName').val().trim();
	console.log(trainName);
	console.log(typeof trainName);
	var destination = $('#destination').val().trim();
	console.log(destination);
	console.log(typeof destination);
	var freqMin = parseInt($('#freqMin').val(), 10);
	console.log(freqMin);
	console.log(typeof freqMin);
	//var nextArrive = moment($('#nextArrive').val(), 'H HH');
	//console.log(nextArrive);
	//console.log(typeof nextArrive);

	var newTrain = {
		name: trainName,
		dest: destination,
		freq: freqMin,
		next: nextArrive
	}


	database.ref().push(newTrain);

	console.log(newTrain.name);
	console.log(newTrain.dest);
	console.log(newTrain.freq);
	console.log(newTrain.next);


	$('#trainName').val('');
	$('#destination').val('');
	$('#freqMin').val('');
	$('#nextArrive').val('');


	return false;
  });

database.ref().on("child_added", function(childSnapshot, prevChildKey){
	console.log(childSnapshot.val());

	var trainName = childSnapshot.val().name;
	var destination = childSnapshot.val().dest;
	var freqMin = childSnapshot.val().freq;
	var nextArrive = childSnapshot.val().next;
	//var now = moment();
	//var minAway = 

	$('#trainTable > tbody').append("<tr><td>"+trainName+"</td><td>"+destination+"</td><td>"+freqMin+"</td><td>"+nextArrive+"</td></tr>");

});