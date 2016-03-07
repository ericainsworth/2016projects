var songs = [
  {
    song: "Chill Mix",
    artist: "Deadmau5",
    url: "https://www.youtube.com/embed/F0YYoo6oFoU",
    stats: "1 year ago | 2,560,233 views",
    loader: "Here is a good mix of Deadmau5 songs to listen to while\
      at work.",
    image: "https://i.ytimg.com/vi/4kepqYBMw-g/maxresdefault.jpg",
  },

  {
    song: "California",
    artist: "SNBRN",
    url: "https://www.youtube.com/watch?v=xMZbxqYJAN4",
    stats: "7 months ago | 760,533 views",
    loader: "SBRN feat. Kaleena Zanders - California availaable now!",
    image: "https://i1.sndcdn.com/artworks-000114490854-try609-t500x500.jpg",
  },

  {
    song: "Get Shaky",
    artist: "The Ian Carey Project",
    url: "https://www.youtube.com/watch?v=UOgBFL6bJTY",
    stats: "6 years ago | 6,760,453 views",
    loader: "Subscribe, its easy! Top of the Aussie charts for 9 months",
    image: "http://images.junostatic.com/full/CS1314853-02A-BIG.jpg",
  },

  {
    song: "San Francisco",
    artist: "Global Deejays",
    url: "https://www.youtube.com/watch?v=d2uE4P3P5sI",
    stats: "7 years ago | 3,560,246 views",
    loader: "DJGlobalDeejays",
    image: "https://i.ytimg.com/vi/BEXWErq4gCs/maxresdefault.jpg",
  },

  {
    song: "When Love Takes Over",
    artist: "David Guetta",
    url: "https://www.youtube.com/watch?v=zudbz4hOcbc",
    stats: "6 years ago | 102,560,233 views",
    loader: "David Guetta feat Kelly Rowland",
    image: "https://upload.wikimedia.org/wikipedia/en/f/f5/When_Love_Takes_Over.jpg",
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
  document.body.appendChild(media);

  var mediaLeft= document.createElement("div");
  mediaLeft.setAttribute("class", "media-left");
  media.appendChild(mediaLeft);

  //var mediaLink = document.createElement("a");
  //mediaLink.setAttribute("href", hits.url);
  //mediaLeft.appendChild(mediaLink);

  //var mediaImage = document.createElement("img");
  //mediaImage.setAttribute("class", "media-object");
  //mediaImage.setAttribute("src", hits.image);
  //mediaLeft.appendChild(mediaImage);

  var mediaBody = document.createElement("div");
  mediaBody.setAttribute("class", "media-body");
  mediaLeft.appendChild(mediaBody);
  media.appendChild(mediaBody);

  var embed = document.createElement("div");
  embed.setAttribute("class", "embed-responsive embed-responsive-16by9");
  mediaBody.appendChild(embed);

  var frame = document.createElement("iframe");
  embed.appendChild(frame);
  frame.setAttribute("class", "embed-responsive-item");
  frame.setAttribute("src", hits.url);
  frame.setAttribute("width", "560");
  frame.setAttribute("height", "315");
  mediaBody.appendChild(frame);


  //var play = document.createElement("button");
  //var playText = document.createTextNode("Play Video");
  //play.setAttribute("class", "btn btn-default");
  //play.appendChild(playText);
  //mediaBody.appendChild(play);

  var mediaHeading = document.createElement("h3");
  var newText = document.createTextNode(hits.artist + " " + "|" + " " + hits.song);
  mediaHeading.setAttribute("class", "media-heading");
  mediaHeading.appendChild(newText);
  mediaBody.appendChild(mediaHeading);

  var userInfo = document.createElement("p");
  var statsNode = document.createTextNode(hits.stats);
  userInfo.appendChild(statsNode);
  mediaBody.appendChild(userInfo);

  var uploadText = document.createElement("p");
  var loaderNode = document.createTextNode(hits.loader);
  uploadText.appendChild(loaderNode);
  mediaBody.appendChild(uploadText);

  var emptyPage = document.getElementById("results");
  var containerEl = emptyPage.parentNode;
  containerEl.removeChild(emptyPage);


  var results = document.getElementById("results");
  results.appendChild(media);
}
