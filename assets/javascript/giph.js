// Event listener for all button elements
$("button").on("click", function () {
    // In this case, the "this" keyword refers to the button that was clicked
    var person = $(this).attr("data-person");

    // Constructing a URL to search Giphy for the name of the person who said the quote
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        person + "&api_key=dc6zaTOxFJmzC&limit=10";

    // Performing our AJAX GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After the data comes back from the API
        .then(function (response) {
            // Storing an array of results in the results variable
            var results = response.data;

            // Looping over every result item
            for (var i = 0; i < results.length; i++) {

                // Only taking action if the photo has an appropriate rating
                if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                    // Creating a div for the gif
                    var gifDiv = $("<div>");

                    // Storing the result item's rating
                    var rating = results[i].rating;

                    // Creating a paragraph tag with the result item's rating
                    var p = $("<p>").text("Rating: " + rating);

                    // Creating an image tag
                    var personImage = $("<img>");

                    // Giving the image tag an src attribute of a proprty pulled off the
                    // result item
                    personImage.attr("src", results[i].images.fixed_height.url);
                    console.log(results[i]);
                  
                    $("gifs").on("click", function() {

                          $(personalbar).attr("src", $(person).attr("data-animate"));    

                      });

                    // Appending the paragraph and personImage we created to the "gifDiv" div we created
                    gifDiv.append(p);
                    gifDiv.append(personImage);

                    // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                    $("#gifs-appear-here").prepend(gifDiv);


                    $("#photo").append('<img class=".gif" src="' + response.data[i].images.fixed_height.url + '">');
                   
                }
            } 

            $(document).on("click", ".gif", function () {
                // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
                var state = $(this).attr("data-state");
                // If the clicked image's state is still, update its src attribute to what its data-animate value is.
                // Then, set the image's data-state to animate
                // Else set src to the data-still value
                if (state === "still") {
                  $(this).attr("src", $(this).attr("data-animate"));
                  $(this).attr("data-state", "animate");
                } else {
                  $(this).attr("src", $(this).attr("data-still"));
                  $(this).attr("data-state", "still");
                }

           
                
        });
});

        
              // Calling the renderButtons function at least once to display the initial list of movies
              //renderButtons();
});

$("#add-person").on("click", function(event) {
    // event.preventDefault() prevents the form from trying to submit itself.
    // We're using a form so that the user can hit enter instead of clicking the button if they want
    event.preventDefault();

    // This line will grab the text from the input box
    var person = $("#input").val().trim();
    // The movie from the textbox is then added to our array
    newButton = $("<button>")
    newButton.text(person);
    newButton.attr("data-person", person);
    $(".buttons").append(newButton);



    $("button").on("click", function () {
        // In this case, the "this" keyword refers to the button that was clicked
        var person = $(this).attr("data-person");
    
        // Constructing a URL to search Giphy for the name of the person who said the quote
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            person + "&api_key=dc6zaTOxFJmzC&limit=10";
    
        // Performing our AJAX GET request
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            // After the data comes back from the API
            .then(function (response) {
                // Storing an array of results in the results variable
                var results = response.data;
    
                // Looping over every result item
                for (var i = 0; i < results.length; i++) {
    
                    // Only taking action if the photo has an appropriate rating
                    if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                        // Creating a div for the gif
                        var gifDiv = $("<div>");
    
                        // Storing the result item's rating
                        var rating = results[i].rating;
    
                        // Creating a paragraph tag with the result item's rating
                        var p = $("<p>").text("Rating: " + rating);
    
                        // Creating an image tag
                        var personImage = $("<img>");
    
                        // Giving the image tag an src attribute of a proprty pulled off the
                        // result item
                        personImage.attr("src", results[i].images.fixed_height.url);
                        console.log(results[i]);
                      
                        $("gifs").on("click", function() {
    
                              $(personalbar).attr("src", $(person).attr("data-animate"));    
    
                          });
    
                        // Appending the paragraph and personImage we created to the "gifDiv" div we created
                        gifDiv.append(p);
                        gifDiv.append(personImage);
    
                        // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                        $("#gifs-appear-here").prepend(gifDiv);
    
    
                        $("#photo").append('<img class=".gif" src="' + response.data[i].images.fixed_height.url + '">');
                       
                    }
                } 
    
                $(document).on("click", ".gif", function () {
                    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
                    var state = $(this).attr("data-state");
                    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
                    // Then, set the image's data-state to animate
                    // Else set src to the data-still value
                    if (state === "still") {
                      $(this).attr("src", $(this).attr("data-animate"));
                      $(this).attr("data-state", "animate");
                    } else {
                      $(this).attr("src", $(this).attr("data-still"));
                      $(this).attr("data-state", "still");
                    }
    
               
                    
            });
    });
    
            
                  // Calling the renderButtons function at least once to display the initial list of movies
                  //renderButtons();
    });


    

    // calling renderButtons which handles the processing of our movie array
    //renderButtons();
  });