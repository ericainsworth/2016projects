var songs = [
  {
    id: 1,
    song: "Ghosts n Stuff",
    artist: "Deadmau5",
    url: "https://www.youtube.com/embed/GGtcJCzB9cU",
    stats: "1 year ago | 2,560,233 views",
    loader: "Here is a good mix of Deadmau5 songs to listen to while at work.",
    image: "https://i.ytimg.com/vi/4kepqYBMw-g/maxresdefault.jpg",
    comments: [
      {
        name: "John",
        review: "Grrreat Song!",
      },
      {
        name: "Greg",
        review: "Love Deadmau5, another hit",
      },
      {
        name: "Jessica",
        review: "Going to the concert Friday, so excited!",
      },
    ]
  },

  {
    id: 2,
    song: "California",
    artist: "SNBRN",
    url: "https://www.youtube.com/embed/xMZbxqYJAN4",
    stats: "7 months ago | 760,533 views",
    loader: "SBRN feat. Kaleena Zanders - California availaable now!",
    image: "https://i1.sndcdn.com/artworks-000114490854-try609-t500x500.jpg",
    comments: []
  },

  {
    id: 3,
    song: "Get Shaky",
    artist: "The Ian Carey Project",
    url: "https://www.youtube.com/embed/UOgBFL6bJTY",
    stats: "6 years ago | 6,760,453 views",
    loader: "Subscribe, its easy! Top of the Aussie charts for 9 months",
    image: "http://images.junostatic.com/full/CS1314853-02A-BIG.jpg",
    comments: []
  },

  {
    id: 4,
    song: "San Francisco",
    artist: "Global Deejays",
    url: "https://www.youtube.com/embed/d2uE4P3P5sI",
    stats: "7 years ago | 3,560,246 views",
    loader: "DJGlobalDeejays",
    image: "https://i.ytimg.com/vi/BEXWErq4gCs/maxresdefault.jpg",
    comments: []
  },

  {
    id: 5,
    song: "When Love Takes Over",
    artist: "David Guetta",
    url: "https://www.youtube.com/embed/zudbz4hOcbc",
    stats: "6 years ago | 102,560,233 views",
    loader: "David Guetta feat Kelly Rowland",
    image: "https://upload.wikimedia.org/wikipedia/en/f/f5/When_Love_Takes_Over.jpg",
    comments: []
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
  while(emptyPage.firstChild) {
    emptyPage.removeChild(emptyPage.firstChild);
  }

  var likeBar = document.createElement("div");
  likeBar.setAttribute("class", "watch-action-buttons clearfix");
  mediaBody.appendChild(likeBar);

  var divActions = document.createElement("div");
  divActions.setAttribute("class", "watch8-sentiment-actions");
  likeBar.appendChild(divActions);

  var likeSpan = document.createElement("span");
  likeSpan.setAttribute("class", "like-button-render actionable");
  likeSpan.setAttribute("data-button-toggle-group", "optional");
  likeSpan.setAttribute("data-logged-in", "1");
  likeBar.appendChild(likeSpan);

  var spanButton = document.createElement("span");
  likeSpan.appendChild(spanButton);

  var thumbUp = document.createElement("button");
  thumbUp.setAttribute("type", "button");
  thumbUp.setAttribute("class", "btn btn-default");
  thumbUp.setAttribute("aria-label", "Right-Align");
  likeSpan.appendChild(thumbUp);

  var thumb = document.createElement("span");
  thumb.setAttribute("class", "glyphicon glyphicon-thumbs-up");
  thumb.setAttribute("aria-hidden", "true");
  thumbUp.appendChild(thumb);

  var thumbBelow = document.createElement("button");
  thumbBelow.setAttribute("type", "button");
  thumbBelow.setAttribute("class", "btn btn-default");
  thumbBelow.setAttribute("aria-label", "Right-Align");
  likeSpan.appendChild(thumbBelow);

  var thumbDown = document.createElement("span");
  thumbDown.setAttribute("class", "glyphicon glyphicon-thumbs-down");
  thumbDown.setAttribute("aria-hidden", "true");
  thumbBelow.appendChild(thumbDown);

  var comPanel = document.createElement("div");
  comPanel.setAttribute("class", "branded-page-box yt-card scrolldetect");
  comPanel.setAttribute("id", "watch-discussion");
  comPanel.setAttribute("data-scrolldetect-callback", "comments-delay-load");
  likeSpan.appendChild(comPanel);

  var comSect = document.createElement("div");
  comSect.setAttribute("class", "comment-section-renderer");
  comSect.setAttribute("id", "comment-section-renderer");
  comPanel.appendChild(comSect);

  var comHeader = document.createElement("h3");
  var headerNode = document.createTextNode("COMMENTS - ");
  comHeader.appendChild(headerNode);
  comHeader.setAttribute("class", "comment-section-header-renderer");
  comHeader.setAttribute("tabindex", "0");
  comSect.appendChild(comHeader);

  var commentBox = document.createElement("div");
  var commentBoxText = document.createTextNode("Add a public comment...");
  commentBox.appendChild(commentBoxText);
  commentBox.setAttribute("class", "comment-simplebox-renderer-collapsed-content");
  comSect.appendChild(commentBox);


  var results = document.getElementById("results");
  results.appendChild(media);
}
