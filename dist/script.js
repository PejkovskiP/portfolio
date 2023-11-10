// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use custom text for the caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("priorilist");
var captionText = document.getElementById("caption");
var modalCaption = document.getElementsByClassName("modal-caption");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = customCaption;
  modalCaption.innerHTML = modal-caption;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}