var songs = [
  {
    song: "Chill Mix",
    artist: "Deadmau5",
    url: "https://www.youtube.com/watch?v=F0YYoo6oFoU",
  },

  {
    song: "California",
    artist: "SNBRN",
    url: "https://www.youtube.com/watch?v=xMZbxqYJAN4",
  },

  {
    song: "Get Shaky",
    artist: "The Ian Carey Project",
    url: "https://www.youtube.com/watch?v=UOgBFL6bJTY",
  },

  {
    song: "San Francisco",
    artist: "Global Deejays",
    url: "https://www.youtube.com/watch?v=d2uE4P3P5sI",
  },

  {
    song: "When Love Takes Over",
    artist: "David Guetta",
    url: "https://www.youtube.com/watch?v=zudbz4hOcbc",
  },
]

var search = document.getElementById("button");
 search.addEventListener("click", function (event) {
   event.preventDefault();
   var keyword = document.getElementById('info');
   for (var i = 0; i < songs.length; i++) {
     if (songs[i].song === keyword.value) {
       console.log(songs[i])
     }
     else {
       return "No Results";
     }
   }
 })

var media1 = document.createElment("div");
var media2 = document.createElment("div");
var anchor = document.createElment("a");
var image1 = document.createElment("img");
var media3 = document.createElment("div");
var mediaInfo = document.createElment("p");
var tagLine = document.createElment("p");

var match = function() {

}
