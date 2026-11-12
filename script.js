
// Chocolate information from the assignment.
var chocolates = [
  {
    name: "Plain Milk",
    image: "plain3.jpg",
    calories: 110,
    content: "Smooth milk chocolate",
    ingredients: "Cocoa butter, milk, sugar"
  },
  {
    name: "Plain Dark",
    image: "plaindark.jpg",
    calories: 100,
    content: "Smooth dark chocolate",
    ingredients: "Cocoa butter, milk, sugar"
  },
  {
    name: "Plain Hybrid",
    image: "plaindark2.jpg",
    calories: 105,
    content: "Smooth milk chocolate and dark chocolate side by side",
    ingredients: "Cocoa butter, milk, sugar"
  },
  {
    name: "Nut Butter Cup",
    image: "nutbutter2.jpg",
    calories: 130,
    content: "Smooth milk chocolate with peanut butter filling",
    ingredients: "Cocoa butter, milk, sugar"
  },
  {
    name: "Bailey's Cup",
    image: "baileys1.jpg",
    calories: 90,
    content: "Smooth milk chocolate with Bailey's Irish Cream filling",
    ingredients: "Cocoa butter, milk, sugar, Bailey's Cream filling"
  },
  {
    name: "Rum Barrel",
    image: "rum.jpg",
    calories: 110,
    content: "Smooth dark chocolate with rum-coconut filling",
    ingredients: "Cocoa butter, milk, sugar, rum, coconut"
  },
  {
    name: "Orange Fondant",
    image: "orange.jpg",
    calories: 125,
    content: "Dark chocolate with orange fondant filling",
    ingredients: "Cocoa butter, milk, sugar, orange cream, orange zest"
  },
  {
    name: "Cappuccino Cup",
    image: "coffeecup.jpg",
    calories: 130,
    content: "Dark chocolate with coffee cream filling",
    ingredients: "Cocoa butter, milk, sugar, coffee-vanilla cream, grated coffee beans"
  },
  {
    name: "Pistachio Diamond",
    image: "pistachiocup.jpg",
    calories: 140,
    content: "Milk chocolate with almond butter filling and a large pistachio",
    ingredients: "Cocoa butter, milk, sugar, nut butter, pistachio"
  },
  {
    name: "Toffee Crunch",
    image: "toffeecrunch.jpg",
    calories: 130,
    content: "Dark chocolate with soft toffee filling, rock salt, and peanut brittle",
    ingredients: "Cocoa butter, milk, sugar, toffee, salt, toffee brittle"
  }
];

// Run jQuery after the page loads.
$(document).ready(function () {

  // Create the 10 chocolate cards.
  $.each(chocolates, function (index, candy) {
    var cardNumber = index + 1;

    var card = $("<article>")
      .addClass("chocolate-card")
      .attr("id", "card-" + cardNumber);

    var photoBox = $("<div>").addClass("photo-box");

    // Fixed: Images are in the same folder as index.html.
    var photo = $("<img>").attr({
      src: candy.image,
      alt: candy.name + " chocolate",
      loading: "lazy"
    });

    var placeholder = $("<div>")
      .addClass("photo-placeholder")
      .html("🍫<small>Photo needed</small>")
      .hide();

    // Show placeholder if an image cannot load.
    photo.on("error", function () {
      $(this).hide();
      placeholder.show();
    });

    var details = $("<div>").addClass("chocolate-details");

    details.append(
      $("<p>")
        .append($("<strong>").text("Calories: "))
        .append(candy.calories + " calories")
    );

    details.append(
      $("<p>")
        .append($("<strong>").text("Content: "))
        .append(candy.content)
    );

    details.append(
      $("<p>")
        .append($("<strong>").text("Ingredients: "))
        .append(candy.ingredients)
    );

    photoBox.append(photo, placeholder);

    card.append(
      $("<span>")
        .addClass("card-number")
        .text("Choice " + cardNumber)
    );

    card.append(photoBox);
    card.append($("<h3>").text(candy.name));
    card.append(details);

    $("#chocolateCards").append(card);
  });

  // Pick a random chocolate and generate a cashier code.
  $("#sampleBtn").on("click", function () {
    var randomNumber = Math.floor(Math.random() * chocolates.length) + 1;
    var randomCode = Math.floor(Math.random() * 50) + 1;

    // Remove yellow highlight from previous selection.
    $(".chocolate-card").removeClass("selected");

    // Highlight the randomly selected chocolate.
    $("#card-" + randomNumber).addClass("selected");

    $("#resultMessage").text(
      "You picked Choice " + randomNumber + ": " +
      chocolates[randomNumber - 1].name + "!"
    );

    alert(
      "Your free sample code is: " + randomCode +
      "\nShow this code to the cashier."
    );
  });

  // Show or hide calories and chocolate information.
  var detailsVisible = false;

  // Hide details initially, matching the button's label.
  $(".chocolate-details").hide();

  $("#detailsBtn").on("click", function () {
    detailsVisible = !detailsVisible;

    $(".chocolate-details").slideToggle(200);

    $(this).text(
      detailsVisible
        ? "Hide Calories and Content"
        : "Show Calories and Content"
    );

    $(this).attr("aria-expanded", detailsVisible);
  });

});
