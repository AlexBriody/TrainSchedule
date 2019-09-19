

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
var firstTrain = "";
var frequency = "";
var minutesAway = 0; //must be calculated
var nextArrival = ""; //must be calculated


$("#add-train").on("click", function (event) {
    event.preventDefault();

    train = $("#name-input").val().trim();
    destination = $("#destination-input").val().trim();
    firstTrain = $("#firsttrain-input").val().trim();
    frequency= $("#frequency-input").val().trim();

    database.ref().push({
        train: train,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency,
    });

    $("#name-input").val("");
    $("#destination-input").val("");
    $("#firsttrain-input").val("");
    $("#frequency-input").val("");
})


// database.ref().on("child_added", function (snapshot) {
//     var randomDate = "09/18/2018";
//     var randomFormat = "MM/DD/YYYY";
//     var convertedDate = moment(randomDate, randomFormat);

//     // storing the snapshot.val() in a variable for convenience
//     var sv = snapshot.val();

//     // Console.loging the last user's data
//     console.log(sv.employeeName);
//     console.log(sv.personRole);
//     console.log(sv.start);
//     console.log(sv.monthlyRate);

    // var monthsWorked = (moment.diff(moment(), "months");
    // var totalBilled = (monthsWorked) * (sv.monthlyRate);




//     // Change the HTML to reflect
//     $("#emplyee-name").text(sv.employeeName);
//     $("#role").text(sv.personRole);
//     $("#start-date").text(sv.start);
//     $("#monthly-rate").text(sv.monthlyRate);
//     $("#months-worked").text(monthsWorked);
//     $("#total-billed").text(totalBilled);

//     // Handle the errors
// }, function (errorObject) {
//     console.log("Errors handled: " + errorObject.code);
// })