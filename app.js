document.addEventListener("DOMContentLoaded", async () => {
  try {
    const data = await (await fetch("videos.json")).json();
    const categoriesSection = document.getElementById("categories");

    Object.entries(data).forEach(([category, videos]) => {
      const container = document.createElement("div");
      container.className = "container";

      container.innerHTML = `
        <h3 class="padding">${category}</h3>
        <div class="container column">
          ${videos
            .map((video) => {
              // Extract the tweet ID from the URL
              const tweetId = video.url.split("/").pop();

              return `
              <div class="card">
                <blockquote class="twitter-tweet" data-media-max-width="400">
                  <a href="${video.url}"></a>
                </blockquote>
                <div class="overlay" onclick="window.location.href='details.html?id=${tweetId}'"></div>
              </div>
            `;
            })
            .join("")}
        </div>
      `;

      categoriesSection.appendChild(container);
    });

    // Reload Twitter widgets
    if (window.twttr && window.twttr.widgets) {
      window.twttr.widgets.load();
    }
  } catch (error) {
    console.error("Error loading videos:", error);
  }
});
