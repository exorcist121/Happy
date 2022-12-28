//@prepros-append loadingAnim.js
//@prepros-append gsap.min.js
//@prepros-append Draggable.min.js
//@prepros-append InertiaPlugin.min.js
window.onload = function (){
	setTimeout(function() {
		let promise = new Promise((resolve, reject) => {
			setTimeout(function(){
			document.querySelector('.presents').classList.add('invisible')
			resolve("result");
		}, 4000)
	});
	promise
		.then(
			result => {
					setTimeout(function(){
						// document.querySelector('.preloader').classList.add('loaded')
						document.body.classList.add('visible')
					}, 5000)
			}
		);
		Draggable.create('.content__gallery', {
			bounds: 'body',
			inertia: true
		})
	}, 200)
};