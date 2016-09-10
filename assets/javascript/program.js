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
	//console.log(trainName);
	//console.log(typeof trainName);
	var destination = $('#destination').val().trim();
	//console.log(destination);
	//console.log(typeof destination);
	var freqMin = parseInt($('#freqMin').val(), 10);
	//console.log(freqMin);
	//console.log(typeof freqMin);
	var nextArrive = $('#nextArrive').val();
	console.log(nextArrive);
	//console.log(typeof nextArrive);
	var minAway = parseInt($('#minAway').val(), 10);
	//console.log(minAway);
	//console.log(typeof minAway);
	var newTrain = {
		name: trainName,
		dest: destination,
		next: nextArrive,
		mins: minAway
	}

	database.ref().push(newTrain);


	var newRow = $('<tr>');
	newRow.append("<td>"+trainName+"</td><td>"+destination+"</td><td>"+freqMin+"</td><td>"+nextArrive+"</td><td>"+minAway+"</td>")
	newRow.append("<button class='btn btn-danger btn-sm'>X</button>");
	$('tbody').append(newRow);

	$('#trainName').val('');
	$('#destination').val('');
	$('#freqMin').val('');
	$('#nextArrive').val('');
	$('#minAway').val('');
	return false;
  });

database.ref().on("child_added", function(childSnapshot, prevChildKey){
	console.log(childSnapshot.val());

	var 

});