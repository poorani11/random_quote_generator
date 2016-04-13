function inIframe () {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

var currentAuthor="";
var currentQuote="";

function openUrl(url){
    window.open(url,"share",'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}

function getQuote(){
    $.ajax({
        headers: {
      "X-Mashape-Key": "Z3iq1gh960mshxDCtbDnPOxmRGBdp1SbtUXjsnm31e0Ordz3UQ",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies',
        success: function(response){
            var random = JSON.parse(response);
            currentQuote = random.quote;
            currentAuthor = random.author;

        }
   
});
}