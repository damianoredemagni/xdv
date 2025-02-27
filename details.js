document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const tweetId = params.get("id");

  if (tweetId) {
    const tweetLink = document.querySelector("#video blockquote a");
    if (tweetLink) {
      tweetLink.href = `https://twitter.com/i/status/${tweetId}`;

      // Load the Twitter widget
      if (window.twttr && window.twttr.widgets) {
        window.twttr.widgets.load();
      }
    }
  }
});
