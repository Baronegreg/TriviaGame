// Start screen displays Start button.

// Start button .on("click") display trivia game and start timer (120sec);

//Create timer(counter) that counts down by -1 second until 0. At 0 sec, new screen appears

//Make 8 questions. 4 answers each. Make check boxes for each answer 

//One answer .on("click") per question can be selected and submitted.

//Create Done button below .on("click") new screen appears.

//Once clicked a new screen appears including Correct answers, Incorrect answers and unanswered.


	//Create functions for onload window.
	

		window.onload = function() {

		 $(".main").hide("main");
		 $(".results").hide("results");
		 $("#start").on("click", buttons.start);
		 $("#start").on("click", countDown.start);

		};

	var intervalId;
	
	//Start button displays onload. Once clicked hides.
	var buttons = {

		start: function(){
			$(".main").show("main");
			$("#start").hide("main");
		}


	};

	var countDown = {
		
		timer: 5,
		start: function(){
			intervalId = setInterval(countDown.count, 1000)
		},
		count: function(){

				countDown.timer--;

				$("#timer").text(countDown.timer);
			
			if (countDown.timer === 0) {
			
				$(".results").show("results");
			
				$(".main").hide("main");
			};	
		}
	}

		var results = {

		question1: a,
		question2: c,
		question3: b,
		question4: c,
		question5: d,
		question6: b,
		question7: c,
		question8: a
		
		}
		
		$(".results").html(results);	
