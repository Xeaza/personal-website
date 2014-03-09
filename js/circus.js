// // init controller
// var controller = new ScrollMagic();

// // assign handler "scene" and add it to Controller
// var scene = new ScrollScene({duration: 100})
//                 .addTo(controller);

// $(document).ready(function($) {
// 	// build tween
// 	var tween = TweenMax.to("#animate1", 0.5, {backgroundColor: "green", scale: 2.5});

// 	// build scene
// 	var scene = new ScrollScene({triggerElement: "#trigger1"})
// 					.setTween(tween)
// 					.addTo(controller);

// 	// show indicators (requires debug extension)
// 	scene.addIndicators();


// 	var tween = TweenMax.fromTo("#animate2", 0.5, 
// 		{"border-top": "0px solid white"},
// 		{"border-top": "30px solid white", backgroundColor: "yellow", scale: 0.7}
// 	);

// 	// build scene
// 	var scene = new ScrollScene({triggerElement: "#trigger2", duration: 300})
// 					.setTween(tween)
// 					.addTo(controller);

// 	// show indicators (requires debug extension)
// 	scene.addIndicators();

// })