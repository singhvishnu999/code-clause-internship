$("#adoptCat1").click(function () {
    $(".adoption-details1").toggle();
});

$("#adoptDog1").click(function () {
    $(".adoption-details1").toggle();
});

$("#adoptHamster").click(function () {
    $(".adoption-details1").toggle();
});

$("#adoptDog2").click(function () {
    $(".adoption-details1").toggle();
});

$("#adoptDog3").click(function () {
    $(".adoption-details").toggle();
});

$("#adoptCat2").click(function () {
    $(".adoption-details").toggle();
});

$("#adoptDog4").click(function () {
    $(".adoption-details").toggle();
});

$("#adoptHamsters").click(function () {
    $(".adoption-details").toggle();
});
$("#bone").click(function () {
    $(".buy-details").toggle();
});
$("#btwo").click(function () {
    $(".buy-details1").toggle();
});
$("#bthree").click(function () {
    $(".buy-details").toggle();
});
$("#bfour").click(function () {
    $(".buy-details1").toggle();
});


$("form#adopt").submit(function (event) {
    event.preventDefault();
    var name = $("#fname").val();
    alert("Hello " + name + ". " + "We have received your adoption request. Please check youer email for adoption papers, fill them and drop them at our offices to start the adoption process.");
    $("#adopt")[0].reset();
});
$("form#buy").submit(function (event) {
    event.preventDefault();
    var name = $("#name").val();
    alert("Hello " + name + ". " + "Please check your email for the terms and conditions that have to be met to be able to own this pet");
    $("#buy")[0].reset();
});