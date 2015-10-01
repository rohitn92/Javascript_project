var addButton = document.getElementById("addButton");

addButton.addEventListener('click', function(e){
	//this is a function
	e.preventDefault();
	saveTask();
	getQuotes();
	newFunc();
});

var saveTask = function(){
	var taskInput = document.getElementById("search-box1");
	var textTweets = document.getElementById("Tweets");

	var newTask = taskInput.value;
	

	var cb = new Codebird;
	//var current_url = location.toString();
	//var query       = current_url.match(/\?(.+)$/).split("&amp;");
	var parameters  = {};
	var parameter;

	cb.setConsumerKey("8F9k8TdXWucNtnxAR8flu3kV2", "r3JIUZ5rOkH9nW7m8fgL1jEQEezEKZzqtb1Xfcwo1XqdeXXhsr");

	cb.__call("oauth2_token", {},
   	 	function (reply) {
        	var bearer_token = reply.access_token;
    	}
	);

	// check if oauth_verifier is set
	if (typeof parameters.oauth_verifier !== "undefined") {
	    cb.setToken("2585222042-Mc8iuShMcKjTAWhNyBGJhXxVpa5RGdbmuY42zm0", "jjuHxZiCwSt7ruLd62mP80ylQU4vE2Fig9BNqGgcVn9va");
	}

	var params = {
	    q: newTask
	};
	cb.__call(
	    "search_tweets",
	    params,
	    function (reply) {
	    	textTweets.textContent = reply.statuses[0].text + "/n" +
	        reply.statuses[1].text + "\n" +
	        reply.statuses[2].text + "\n" +
	        reply.statuses[3].text + "\n" +
	        reply.statuses[4].text + "\n" +
	        reply.statuses[5].text + "\n" +
	        reply.statuses[6].text + "\n" +
	        reply.statuses[7].text + "\n" +
	        reply.statuses[8].text + "\n" +
	        reply.statuses[9].text + "\n" +
	        reply.statuses[10].text + "\n" +
	        reply.statuses[11].text + "\n" +
	        reply.statuses[12].text + "\n" +
	        reply.statuses[13].text + "\n" +
	        reply.statuses[14].text + "\n";

	    }
	);

};

  quotes = {};

  function quoteReady(newQuote, index, Divid) {
    if(newQuote.quote.length > 0) {
      quotes['quote' + index] = newQuote.quote;
      $('#search-box' + index).val(newQuote.titles);
    }

    if('quote1' in quotes) {
      $(Divid).html($('<p>' + quotes.quote1 + '</p>'));
      console.log(quotes.quote1);
      
    }
  }

  function getQuotes(){
   

    // Get input field
    var $input = $(".search-form").find("input:text");

    // Find index of this input (1 or 2)
    var idString = $input.attr('id');
    var index = idString.charAt(idString.length - 1);

    // Get first search result and use as titles
    WikiquoteApi.openSearch($input.val(),
      function(results) {
        $input.val(results[0]);
        // Get quote
        //for (var i = 0; i <= 6; i++) {

          //var divArray = ['#quote1', '#quote2', '#quote3', '#quote4', '#quote5', '#quote6', '#quote7'];
      
          WikiquoteApi.getRandomQuote($input.val(), 
           function(newQuote) { quoteReady(newQuote, index, '#quote1'); }, 
            function(msg){
              alert(msg);
            }
          );

          WikiquoteApi.getRandomQuote($input.val(), 
           function(newQuote) { quoteReady(newQuote, index, '#quote2'); }, 
            function(msg){
              alert(msg);
            }
          );

          WikiquoteApi.getRandomQuote($input.val(), 
           function(newQuote) { quoteReady(newQuote, index, '#quote3'); }, 
            function(msg){
              alert(msg);
            }
          );

          WikiquoteApi.getRandomQuote($input.val(), 
           function(newQuote) { quoteReady(newQuote, index, '#quote4'); }, 
            function(msg){
              alert(msg);
            }
          );

          WikiquoteApi.getRandomQuote($input.val(), 
           function(newQuote) { quoteReady(newQuote, index, '#quote5'); }, 
            function(msg){
              alert(msg);
            }
          );

          WikiquoteApi.getRandomQuote($input.val(), 
           function(newQuote) { quoteReady(newQuote, index, '#quote6'); }, 
            function(msg){
              alert(msg);
            }
          );

          WikiquoteApi.getRandomQuote($input.val(), 
           function(newQuote) { quoteReady(newQuote, index, '#quote7'); },
            function(msg){
              alert(msg);
            }
          );
          
      //  }
      },
      function(msg) {
        alert(msg);
      }
    );
    
  };

  var newFunc = function(){


  	var grey = document.getElementById("Quotes");
	grey.style.color = "#8F8C93";

	var red = document.getElementById("Tweets");
	red.style.color = "#F55A5E";
  // red --- F55A5E
  //grey 8F8C93

	/*cat.style.opacity = "0";
	pusheen.style.opacity = "100";
	document.body.style.backgroundColor = "black"
	var x = document.querySelector('h1');
	
	x.innerHTML = "Haha!I told you not to click!";
	x.style.color = "red";*/


	

};