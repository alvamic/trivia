window.onload = function() {
    
    setTimeout(stopwatch.start,0100)
    $("#button1").on("click",compare);
  };
  setTimeout(first,0100); 
  function first() {
    alert("Trivia!");
    alert("Any unanswered questions are WRONG");
    alert("Game will begin after this, you have 1 min");
    $(".container").css("visibility","visible");
  } 


var intervalId;
var clockRunning = false;
var correctAnswers = 0;
var incorrectAnswers = 0;




var stopwatch = {

    time: 60,
  
    reset: function() {
  
      stopwatch.time = 0;
  
      // DONE: Change the "display" div to "00:00."
      $("#display").text("01:00");
    },
    start: function() {
  
      // DONE: Use setInterval to start the count here and set the clock to running.
      if (!clockRunning) {
        intervalId = setInterval(stopwatch.count, 1000);
        clockRunning = true;
      }
    },
    stop: function() {
  
      // DONE: Use clearInterval to stop the count here and set the clock to not be running.
      clearInterval(intervalId);
      clockRunning = false;
    },
    recordLap: function() {
  
      // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
      //       and save the result in a variable.
      var converted = stopwatch.timeConverter(stopwatch.time);
  
  
      
    },
    count: function() {
  
      // DONE: increment time by 1, remember we cant use "this" here.
      stopwatch.time--;
  
      // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
      //       and save the result in a variable.
      var converted = stopwatch.timeConverter(stopwatch.time);
      console.log(converted);
  
      // DONE: Use the variable we just created to show the converted time in the "display" div.
      $("#display").text(converted);
    },
    timeConverter: function(t) {
  
      var minutes = Math.floor(t/ 60);
      var seconds = t -(minutes * 60);
      console.log("minutes" + minutes)
  
      if (seconds > 10) {
        seconds =  seconds;
      }
      if (seconds < 10) {
          seconds = "0"+ seconds;
      }
  
      if (minutes === 0) {
        minutes = "0";
      }
      if (seconds < 1) {
        compare();
    }
      else if (minutes < 10) {
        minutes = "0"+ minutes;
      }
  
      return minutes + ":" + seconds;
    }};

    function compare(){
        stopwatch = "";
        intervalId = "";
        clockRunning=true;
        // $("#empty").html("");
        alert("Lets see how you did");
        if (document.getElementById("answer1a").checked) {
            correctAnswers+=1;
            console.log("correct" +""+ correctAnswers);
        }
        else {
            incorrectAnswers+=1;
        }
        if (document.getElementById("answer1b").checked) {
            correctAnswers+=1;
            console.log("correct" +""+ correctAnswers);
        }
        else {
            incorrectAnswers+=1;
        }
        if (document.getElementById("answer2c").checked) {
            correctAnswers+=1;
            console.log("correct" +""+ correctAnswers);
        }
        else {
            incorrectAnswers+=1;
        }
        if (document.getElementById("answer1d").checked) {
            correctAnswers+=1;
            console.log("correct" +""+ correctAnswers);
        } 
        else {
            incorrectAnswers+=1;
        }
        if (document.getElementById("answer3e").checked) {
            correctAnswers+=1;
            console.log("correct" +""+ correctAnswers);
        } 
        else {
            incorrectAnswers+=1;
        }
        if (document.getElementById("answer3f").checked) {
            correctAnswers+=1;
            console.log("correct" +""+ correctAnswers);
        } 
        else {
            incorrectAnswers+=1;
        }
        if (document.getElementById("answer1g").checked) {
            correctAnswers+=1;
            console.log("correct" +""+ correctAnswers);
        } 
        else {
            incorrectAnswers+=1;
        }
        if (document.getElementById("answer2h").checked) {
            correctAnswers+=1;
            console.log("correct" +""+ correctAnswers);
        } 
        else {
            incorrectAnswers+=1;
        }
        if (document.getElementById("answer3i").checked) {
            correctAnswers+=1;
            console.log("correct" +""+ correctAnswers);
        } 
        else {
            incorrectAnswers+=1;
        }
        if (document.getElementById("answer3j").checked) {
            correctAnswers+=1;
            console.log("correct" +""+ correctAnswers);
        } 
        else {
            incorrectAnswers+=1;
        }

        var html = 
            "<h1>All Done!" + "</h1>" +
            "<h3>Correct Answers: " + correctAnswers + "</h3>" +
            "<h3>Incorrect Answers: " + incorrectAnswers + "</h3>" ;

        document.querySelector("#empty").innerHTML = html;


    }; 

    

