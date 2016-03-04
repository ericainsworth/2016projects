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
 search.addEventListener("click", function () {
   var keyword = document.getElementById('info');
   for (var i = 0; i < songs.length; i++) {
     if (songs[i].song === keyword.value) {
       matches(songs[i]);
     }
   }
 })

var matches = function(hits) {
  var media = document.createElement("div");
  media.setAttribute("class", "media");
  var mediaLeft= document.createElement("div");
  mediaLeft.setAttribute("class", "media-left");
  var mediaLink = document.createElement("a");
  mediaLink.setAttribute("href", "#");
  //var mediaImage = document.createElement("img");
  //mediaImage.setAttribute("src", "class", "media-object");
  var mediaBody = document.createElement("div");
  var newArtist = document.createTextNode(hits.artist);
  mediaBody.setAttribute("class", "media-body");
  //mediaBody.appendChild(mediaHeading);

  var mediaHeading = document.createElement("h3");
  var newText = document.createTextNode(hits.artist + " " + "|" + " " + hits.song);
  mediaHeading.setAttribute("class", "media-heading");
  mediaBody.appendChild(mediaHeading);

  var userInfo = document.createElement("p");
  var uploadText = document.createElement("p");

  mediaHeading.appendChild(uploadText);
  mediaHeading.appendChild(userInfo);
  mediaHeading.appendChild(newText);

  media.appendChild(mediaBody);
//  mediaLeft.appendChild(mediaImage);
  mediaLeft.appendChild(mediaLink);
  media.appendChild(mediaLeft);


  var results = document.getElementById('results');
  results.appendChild(media);
}
