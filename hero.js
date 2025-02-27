document.addEventListener("DOMContentLoaded", async () => {
  try {
    // Fetch a simplified JSON file specifically for the hero section
    const heroData = await (await fetch("hero.json")).json();
    const heroContainer = document.getElementById("hero");

    // Assuming heroData is an array of featured videos
    if (heroData && heroData.length > 0) {
      // Get the first video to feature (or you could randomly select one)
      const featuredVideo = heroData[0];

      // Extract the tweet ID from the URL
      const tweetId = featuredVideo.url.split("/").pop();

      // Create the hero content
      heroContainer.innerHTML = `
        <div class="container">
        <h3>📌 Featured</h3>
          <div class="banner">
            <blockquote class="twitter-tweet" data-media-max-width="880">
              <a href="${featuredVideo.url}"></a>
            </blockquote>
            <div class="overlay" onclick="window.location.href='details.html?id=${tweetId}'"></div>
          </div>
        </div>
      `;

      // Reload Twitter widgets
      if (window.twttr && window.twttr.widgets) {
        window.twttr.widgets.load();
      }
    }
  } catch (error) {
    console.error("Error loading hero content:", error);
  }
});
