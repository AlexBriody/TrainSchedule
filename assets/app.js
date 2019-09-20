var firebaseConfig = {
  apiKey: "AIzaSyDwGZnYbAXWvWi2weIh1aUiSkOo1yQ28RQ",
  authDomain: "choochoo-4eb48.firebaseapp.com",
  databaseURL: "https://choochoo-4eb48.firebaseio.com",
  projectId: "choochoo-4eb48",
  storageBucket: "",
  messagingSenderId: "18828919141",
  appId: "1:18828919141:web:3d6d97b1c572046e33e18c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Create a variable to reference the database.
var database = firebase.database();

var train = "";
var destination = "";
var frequency = "";
var militaryTime = "";
var minutesAway = 0; //must be calculated
var nextArrival = ""; //must be calculated


$("#add-train").on("click", function (event) {
  event.preventDefault();

  train = $("#name-input").val().trim();
  destination = $("#destination-input").val().trim();
  militaryTime = $("#firsttrain-input").val().trim();
  frequency = $("#frequency-input").val().trim();

  nextArrival = moment(militaryTime, "hmm").format("hh:mmA");

  hoursMinutesAway = moment(militaryTime, "hmm").fromNow("mm");

  database.ref().push({
    train: train,
    destination: destination,
    nextArrival: nextArrival,
    frequency: frequency,
    hoursMinutesAway: hoursMinutesAway
  });

  $("#name-input").val("");
  $("#destination-input").val("");
  $("#firsttrain-input").val("");
  $("#frequency-input").val("");
})


database.ref().on("child_added", function (snapshot) {

  // storing the snapshot.val() in a variable for convenience
  var sv = snapshot.val();


  // var monthsWorked = (moment.diff(moment(), "months");
  // var totalBilled = (monthsWorked) * (sv.monthlyRate);

  var newRow = $("<tr>").append(
    $("<td>").text(sv.train),
    $("<td>").text(sv.destination),
    $("<td>").text(sv.frequency),
    $("<td>").text(sv.nextArrival),
    $("<td>").text(sv.hoursMinutesAway),
  );

  // Append the new row to the table
  $("#train-table > tbody").append(newRow);
}

  // Handle the errors
  , function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });