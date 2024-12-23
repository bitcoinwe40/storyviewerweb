let currentStoryIndex = 0;
const stories = ["story/s1.txt", "story/s2.txt", "story/s3.txt"];

function loadStory(index) {
  fetch(stories[index])
    .then(response => {
      if (!response.ok) {
        throw new Error("Story not found");
      }
      return response.text();
    })
    .then(text => {
      document.getElementById("story").textContent = text;
    })
    .catch(error => {
      document.getElementById("story").textContent = "Error loading story.";
      console.error(error);
    });
}

document.getElementById("next-button").addEventListener("click", () => {
  currentStoryIndex = (currentStoryIndex + 1) % stories.length;
  loadStory(currentStoryIndex);
});

// Load the first story on page load
loadStory(currentStoryIndex);
