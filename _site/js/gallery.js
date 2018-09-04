// Activates the image gallery
// The main task is to attach an event listener to each image in the gallery
// and respond appropriately on click

function activateGallery() {
	let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
	// below there are 2 elements selected, gallery-photo and img (nested) without the >
	let mainImage = document.querySelector("#gallery-photo img");
	
	thumbnails.forEach(function(thumbnail) {
		// preload large images
		let newImageSrc = thumbnail.dataset.largeVersion;
		let largeVersion = new Image();
		largeVersion.src = newImageSrc;
		thumbnail.addEventListener("click", function() {
			// set clicked image as main image.
			mainImage.setAttribute("src", newImageSrc);
			mainImage.setAttribute("alt", thumbnail.alt);
			
			// change which thumbnail has the .current border
			document.querySelector(".current").classList.remove("current");
			thumbnail.parentNode.classList.add("current");
			
			// Update image info in right column
			let galleryInfo = document.querySelector("#gallery-info");
			let title = galleryInfo.querySelector(".title");
			let description = galleryInfo.querySelector(".description");
			title.innerHTML = thumbnail.dataset.title;
			description.innerHTML = thumbnail.dataset.description;
		});
	});
}