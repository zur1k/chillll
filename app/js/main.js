// ------------------------ MONILE NAV -------------------------
const mobileNavButton = document.querySelector('.mobile-nav-button')
const mobileNavIcon = document.querySelector('.mobile-nav-button__icon')
const mobileNav = document.querySelector('.mobile-nav')

mobileNavButton.addEventListener('click', function () {
	mobileNavIcon.classList.toggle('active');
	mobileNav.classList.toggle('active')
	document.body.classList.toggle('no-scroll')

})


$(".mobile-nav__link").on("click", function (event) {
	//

	$(mobileNavIcon).toggleClass("active");
	$(mobileNav).toggleClass("active");
	document.body.classList.remove('no-scroll')
});


// ------------------------ VIDEO -------------------------

const videoBtn = document.querySelector('#video-story-btn')
const videoBtnIcon = document.querySelector('#video-story-btn-icon')
const videoOverlay = document.querySelector('#video-story-overlay')
const videoFile = document.querySelector('#video-story')

videoBtn.addEventListener('click', function () {


	function toggleOverlay(event) {
		if (event.type === 'mouseleave') {
			videoOverlay.classList.add('hidden')
		} else {
			videoOverlay.classList.remove('hidden')

		}
	}

	if (videoFile.paused) {
		videoFile.play()
		videoBtnIcon.src = 'images/story/pause.svg'

		videoOverlay.onmouseleave = toggleOverlay;
		videoOverlay.onmouseenter = toggleOverlay;

	} else {
		videoFile.pause()
		videoBtnIcon.src = 'images/story/play-video.svg'
		videoOverlay.onmouseleave = null
		videoOverlay.onmouseenter = null

	}
})

// ------------------------  smooth scroll   -------------------------

$(".nav").on("click", "a", function (event) {
	event.preventDefault();
	var id = $(this).attr('href'),
		top = $(id).offset().top;
	$('body,html').animate({ scrollTop: top }, 1500);
});
