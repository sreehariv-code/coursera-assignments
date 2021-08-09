(function (window) {
    var helloSpeaker = {};
    var speakWord = "Hi";
    helloSpeaker.speak = function (name){
        console.log(speakWord +" "+ name);
    }
    window.helloSpeaker = helloSpeaker;
})(window);
