$(document).ready(function() {
    var randomQuote = "";
    var randomAuthor = "";
    getQuote();
    
    function getQuote(){
      var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    $.getJSON(url, function(data){
      randomQuote = data.quoteText;
      randomAuthor = data.quoteAuthor;
      $("#text").html('"' + randomQuote + '"');
      $("#author").html("-" + randomAuthor); 
    }); 
      
    };
    
   $("#tweet-quote").on("click", tweet);
    function tweet(){ 
      var url="https://twitter.com/intent/tweet?text="+ randomQuote + "  -"+ randomAuthor;
        window.open(url, "_blank");
     };  
    
    $("#new-quote").on("click", function(){
      getQuote();
    })
  });
  