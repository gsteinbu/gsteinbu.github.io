
function doTrain(todo_str) {

  train = document.getElementById("train")
  content = document.getElementById("content")

  if (todo_str == "show") {
    content.style.display = "none"
    train.style.display = "block"
  }

  if (todo_str == "hide") {
    content.style.display = "block"
    train.style.display = "none"
  }

}

function showContent(show_str) {

  about_text = document.getElementById("about-text")
  about_btn = document.getElementById("about-btn")
  privacy_text = document.getElementById("privacy-text")
  privacy_btn = document.getElementById("privacy-btn")

  if (show_str == "privacy") {
    about_text.style.display = "none"
    about_btn.disabled = false; 
    privacy_text.style.display = "block"
    privacy_btn.disabled = true;
  }

  if (show_str == "about") {
    about_text.style.display = "block"
    about_btn.disabled = true;
    privacy_text.style.display = "none"
    privacy_btn.disabled = false;
  }

}
