
var ww = document.body.clientWidth;

$(document).ready(function() {
	// Cache the Window object
	$window = $(window);
	
	$('body').css('visibility','visible');

	// hide content until after title animation
	//$('#content-wrapper').css('display','none');

	
	//$('#content-wrapper').css('display','block');
	var controller = $.superscrollorama();

	// create animation timeline for pinned element
	var pinnAnimations = new TimelineLite();
	pinnAnimations.append(TweenMax.from($('#welcome p'), 1, {css:{marginTop:0}, ease: Quad.easeInOut}));


	controller.pin($('#welcome'), 400, {
		anim:pinnAnimations, 
		onPin: function() {
			$('#welcome').css('height','100px');
		}, 
		onUnpin: function() {
			$('#welcome').css('height','200px');
		}
		});

	// if ($window.width() >= 684) {
	// 	controller.addTween('.resumeLinks .resumeButton', TweenMax.from( $('.resumeLinks .resumeButton'), .5, {css:{letterSpacing:20,opacity:0}, ease:Quad.easeOut}));
	// } 

	$('iphoneWork').css("@media (min-width:800px) {#iphoneWork{ background:red; }}");


	// // showcase tweens
	// controller.addTween('#showcase h1', TweenMax.from( $('#showcase h1'), .75, {css:{letterSpacing:20,opacity:0}, ease:Quad.easeOut}));
	// controller.addTween('#showcase p', TweenMax.from( $('#showcase p'), 1, {css:{opacity:0}, ease:Quad.easeOut}));
	// $('#showcase .gallery figure').css('position','relative').each(function() {
	// 	controller.addTween('#showcase .gallery', TweenMax.from( $(this), 1, {delay:Math.random()*.2,css:{left:Math.random()*200-100,top:Math.random()*200-100,opacity:0}, ease:Back.easeOut}));
	// });

	// hire tweens
	$('#hire h3').lettering().find('span').css('position','relative').each(function() {
		controller.addTween('#hire h3', TweenMax.from( $(this), .25, {delay:Math.random()*.2,css:{left:Math.random()*1200-600,top:Math.random()*600-300,opacity:0}, ease:Expo.easeOut}),200);
	});
	controller.addTween('#hire p', TweenMax.from( $('#hire p'), .5, {css:{opacity:0}}));
	
	// individual element tween examples
	controller.addTween('#fade-it', TweenMax.from( $('#fade-it'), .5, {css:{opacity: 0}}));
	controller.addTween('#fly-it', TweenMax.from( $('#fly-it'), .25, {css:{right:'1000px'}, ease:Quad.easeInOut}));
	controller.addTween('#spin-it', TweenMax.from( $('#spin-it'), .25, {css:{opacity:0, rotation: 720}, ease:Quad.easeOut}));
	controller.addTween('#scale-it', TweenMax.fromTo( $('#scale-it'), .25, {css:{opacity:0, fontSize:'20px'}, immediateRender:true, ease:Quad.easeInOut}, {css:{opacity:1, fontSize:'240px'}, ease:Quad.easeInOut}));
	controller.addTween('#smush-it', TweenMax.fromTo( $('#smush-it'), .25, {css:{opacity:0, 'letter-spacing':'30px'}, immediateRender:true, ease:Quad.easeInOut}, {css:{opacity:1, 'letter-spacing':'-10px'}, ease:Quad.easeInOut}), 0, 100); // 100 px offset for better timing
	
	// set duration, in pixels scrolled, for pinned element
	var pinDur = 4000;
	// create animation timeline for pinned element
	var pinAnimations = new TimelineLite();
	pinAnimations
		.append(TweenMax.from($('#pin-frame-pin h2'), .5, {css:{marginTop:0}, ease: Quad.easeInOut}))
		.append([
			TweenMax.to($('#pin-frame-slide'), 1, {css:{marginLeft:0}}),
			TweenMax.to($('#pin-frame-pin'), 1, {css:{marginLeft:'100%'}})
		], .5)
		.append([
			TweenMax.to($('#pin-frame-wipe'), .5, {css:{top:0}}),
			TweenMax.from($('#pin-frame-wipe h2'), .5, {css:{marginTop:'-600px'}})
		], .5)
		.append(TweenMax.from($('#pin-frame-bounce'), 5, {css:{marginTop:'-100%'}, ease:Bounce.easeOut}), .5)
		.append(TweenMax.from($('#pin-frame-color'), .25, {css:{opacity:0}}), .5)
		.append([
			TweenMax.to($('#pin-frame-color'), .25, {css:{backgroundColor:'blue'}}),
			TweenMax.to($('#pin-frame-color h2'), .25, {css:{color:'orange'}})
		])
		.append([
			TweenMax.to($('#pin-frame-color'), .25, {css:{backgroundColor:'green'}}),
			TweenMax.to($('#pin-frame-color h2'), .25, {css:{color:'red'}})
		])
		.append([
			TweenMax.to($('#pin-frame-color'), .25, {css:{backgroundColor:'yellow'}}),
			TweenMax.to($('#pin-frame-color h2'), .25, {css:{color:'purple'}})
		])
		.append([
			TweenMax.to($('#pin-frame-color'), .25, {css:{backgroundColor:'orange'}}),
			TweenMax.to($('#pin-frame-color h2'), .25, {css:{color:'blue'}})
		])
		.append([
			TweenMax.to($('#pin-frame-color'), .25, {css:{backgroundColor:'red'}}),
			TweenMax.to($('#pin-frame-color h2'), .25, {css:{color:'green'}})
		])
		.append([
			TweenMax.to($('#pin-frame-color'), .25, {css:{backgroundColor:'#222438'}}),
			TweenMax.to($('#pin-frame-color h2'), .25, {css:{color:'#FFB000'}})
		])
		.append(TweenMax.to($('#pin-frame-unpin'), .5, {css:{top:'100px'}}));
	
	// pin element, use onPin and onUnpin to adjust the height of the element
	controller.pin($('#examples-pin'), pinDur, {
		anim:pinAnimations, 
		onPin: function() {
			$('#examples-pin').css('height','100%');
		}, 
		onUnpin: function() {
			$('#examples-pin').css('height','600px');
		}
	});
	controller.pin($('#examples-2'), 3000, {
		anim: (new TimelineLite())
			.append(
				TweenMax.fromTo($('#fling-it'), 2, 
					{css:{left:-1000, top: 500, rotation: -360}, immediateRender:true}, 
					{css:{left:2000, top: -600, rotation: 360}})
			)
			.append(
				TweenMax.fromTo($('#move-it'), .75, 
					{css:{left: -200, top: 800}, immediateRender:true}, 
					{css:{top: -200}}),
					-1.5 // offset for better timing
			)
			.append(
				TweenMax.to($('#move-it'), .5, 
					{css:{left: 200}})
			)
			.append(
				TweenMax.to($('#move-it'), .5, 
					{css:{top: 0}})
			)
			.append(
				TweenMax.to($('#move-it'), .5, 
					{css:{left: 0}})
			)
	})

	// parallax example, setting duration ties animation to scroll position
	// you can target a scroll position instead of an element (whose position can change)
	controller.addTween(
		'#examples-parallax',
		(new TimelineLite())
			.append([
				TweenMax.fromTo($('#parallax-it-left'), 1, 
					{css:{top: 200}, immediateRender:true}, 
					{css:{top: -600}}),
				TweenMax.fromTo($('#parallax-it-right'), 1, 
					{css:{top: 500}, immediateRender:true}, 
					{css:{top: -1250}})
			]),
		1000 // scroll duration of tween
	);

	$('#bring-it').lettering();
	controller.addTween(
		'#bring-it',
		(new TimelineLite())
			.append([
				TweenMax.from($('#bring-it .char1'), 1, 
					{css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
				TweenMax.from($('#bring-it .char2'), .6, 
					{css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
				TweenMax.from($('#bring-it .char3'), 1.1, 
					{css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
				TweenMax.from($('#bring-it .char4'), .7, 
					{css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
				TweenMax.from($('#bring-it .char5'), .9, 
					{css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
				TweenMax.from($('#bring-it .char6'), 1.2, 
					{css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
				TweenMax.from($('#bring-it .char7'), .6, 
					{css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut}),
				TweenMax.from($('#bring-it .char8'), .8, 
					{css:{fontSize: 0}, immediateRender:true, ease:Elastic.easeOut})
			])
			,
		1200,
		-100 // offset for better timing
	);

$('section[data-type="background"]').each(function(){
     var $backgroundObject = $(this); // assigning the object

      $(window).scroll(function() {
                    
		// Scroll the background at var speed
		// the yPosition is a negative value because we're scrolling it UP!								
		var yPosition = -($window.scrollTop() / $backgroundObject.data('speed')); 

		var winWidth = checkWidth();
		var checkCoords = false;
		
		if (winWidth > 1234) {
		 	yPosition = yPosition + 0; 
		} else if (winWidth > 1201 && winWidth <= 1233) {
		 	yPosition = yPosition + 25; 
		} else if (winWidth > 1175 && winWidth <= 1201) {
			yPosition = yPosition + 28;
		} else if (winWidth > 1100 && winWidth <= 1175) {
			yPosition = yPosition + 70;
		} else if (winWidth > 701 && winWidth <= 1100) {
			yPosition = yPosition + 87;
		} else if (winWidth <= 701) {
			yPosition = 58;
			var coords = -374 + yPosition;
			checkCoords = true;
		}
		// Put together our final background position
		if (checkCoords == false) {
			var coords = '50% '+ yPosition + 'px';
		}
		
		// Move the background
		$backgroundObject.css({ backgroundPosition: coords 
			}); // end of Moving background
		}); // window scroll Ends

      $(window).resize(function(e) {
		 var winWidth = checkWidth();

		 var yPosition = -($window.scrollTop() / $backgroundObject.data('speed')); 
		 var checkCoords = false;

		 if (winWidth > 1234) {
		 	yPosition = yPosition + 0; 
		 } else if (winWidth > 1201 && winWidth <= 1233) {
		 	yPosition = yPosition + 25;
		 } else if (winWidth > 1175 && winWidth <= 1201) {
			yPosition = yPosition + 28;
		} else if (winWidth > 1100 && winWidth <= 1175) {
			yPosition = yPosition + 70;
		} else if (winWidth > 701 && winWidth <= 1100) {
			yPosition = yPosition + 87;
		} else if (winWidth <= 701) {
			yPosition = 58;
			var coords = -374 + yPosition;
			checkCoords = true;
		}
		// Put together our final background position
		if (checkCoords == false) {
			var coords = '50% '+ yPosition + 'px';
		}

		// Move the background
		$backgroundObject.css({ backgroundPosition: coords });
		 // console.log(checkWidth(), "mmm");
		});
	}); // End of section[data-type]


	function checkWidth() {
		var windowWidth = $window.width();
		return windowWidth;
	}

	checkWidth();

$(window).resize(function(e) {
	var windowWidth = $window.width();
	if (document.location.href.match(/[^\/]+$/)[0] == 'developer+designer.html')
	{
		var smirkus = document.getElementById("smirkusapp-discription"); 
		var cowDuck =  document.getElementById("cowduckapp-discription"); 
		var smirkusDisplay = window.getComputedStyle(smirkus, null).getPropertyValue("display");
		var cowDucksDisplay = window.getComputedStyle(cowDuck, null).getPropertyValue("display");

		if (windowWidth > 1059) {
		// Make sure that iPhone work gets set to the correct size when the screen displays a 
		// vertical iPhone. Otherwise it only displays the content of the iPhone half size and you
		// can't access the app buttons
		document.getElementById('iphoneWork').style.height = '549px';
		} else if (windowWidth < 684 && smirkusDisplay == 'none' && cowDucksDisplay == 'none') {
		// If an app has been opened in a window bigger than 684 iphoneWork will be 549px tall
		// then if the user resizes the window to smaller than 684 I want iphoneWork to be 0
		//  otherwise there will be a blank space 549px tall with nothing in it until you select an app
		document.getElementById('iphoneWork').style.height = '0px';
		}
	}

});

// Function to toggle menu for responsive website
	$("#lineMenu").click(function(e) {
		e.preventDefault();
		$('#hiddingMenu').toggleClass("active");
		$('#hiddingMenu').toggle();
	});
	adjustMenu();

	// Functions to fade the iphone ribbon and computer ribbon 
	// from the Developer & Designer page
	setTimeout(function() {
        $(".ribbon-wrapper-iphone").fadeOut("slow", function() {
            $(".ribbon-wrapper-iphone").remove();
        });
    }, 4000); // 8 seconds

	setTimeout(function() {
        $(".ribbon-wrapper-computer").fadeOut("slow", function() {
            $(".ribbon-wrapper-computer").remove();
        });
    }, 4000); // 8 seconds
	
});


$(window).bind('resize orientationchange', function() {
    ww = document.body.clientWidth;
    adjustMenu();
});

var adjustMenu = function() {
	if (ww < 702) {
		//$("#hiddingMenu").css("display", "inherit");
		if (!$("#hiddingMenu").hasClass("active")) {
			$('#hiddingMenu').hide();
		} else {
			$('#hiddingMenu').show();
		}
	} 
	else if (ww >= 702) {
		$("#hiddingMenu").css("display", "inherit");
		$('#hiddingMenu').show();
	}
}

/* 
 * Create HTML5 elements for IE's sake
 */

document.createElement("article");
document.createElement("section");

// Used on the homepage
// displays one quote for a time and then fades it away
$('#button').click(function(e){
	$('#quote').fadeIn('slow');
	$('#quote').fadeOut(10000);
});


// Used on the Developer & Designer page
// Used to click tabs to display different webside demos I've done. 
function firstDemoSite() {
	if ($window.width() <= 683) {
		window.open('http://www.spacialdynamicsinleadership.com', '_blank);');
	} else {
		$('#web-work').removeClass();
	   	$('#web-work').addClass("background1");
	   	$('.menu li a').removeClass();
	   	$('#firstDemoSite a').addClass("selected");
	}
}

function secondDemoSite() {
	if ($window.width() <= 683) {
		window.open('http://www.odysseyguideservice.com', '_blank);');
	} else {
		$('#web-work').removeClass();
	   	$('#web-work').addClass("background2");
	   	$('.menu li a').removeClass();
	   	$('#secondDemoSite a').addClass("selected");
	}
}

// function thirdDemoSite() {
// 	if ($window.width() <= 683) {
// 		window.open('http://www.robinantalek.com', '_blank);');
// 	} else {
// 		$('#web-work').removeClass();
// 	   	$('#web-work').addClass("background3");
// 	   	$('.menu li a').removeClass();
// 	   	$('#thirdDemoSite a').addClass("selected");
// 	}
// }


// This is one option but I think it makes it run way slower
// $('.menu-item').on('click', function(e) {
// 		// prevent default click action
// 		e.preventDefault();
// 		var backgroundClassName = $.trim($(e.target).text().split(' ')[0]);
// 		// get the data background attributes
// 		$('#web-work').removeClass().addClass(backgroundClassName);
// })


// Code for making my iPhone work

function showapp(i, id) {
	document.getElementById('iphoneWork').style.height = '528px';

	if (id == 'smirkusapp-discription') {
		document.getElementById('cowduckapp-discription').style.zIndex = -99;
		// document.getElementById('clock').style.display = 'inherit';
		// document.getElementById('clock').style.color = 'white';
		document.getElementById(id).style.zIndex = i;
		document.getElementById(id).style.display = 'inherit';
	} else {
		document.getElementById('smirkusapp-discription').style.zIndex = -99;
		// document.getElementById('clock').style.display = 'inherit';
		// document.getElementById('clock').style.color = 'black';
		document.getElementById(id).style.zIndex = i;
		document.getElementById(id).style.display = 'inherit';
	}
}

function hideAppDiscription(i, id1, id2) {
	if ($window.width() > 1063) {
		document.getElementById('iphoneWork').style.height = '549px';
	} else {
		document.getElementById('iphoneWork').style.height = '216px';
	}
	document.getElementById(id1).style.display = 'none';
	document.getElementById(id2).style.display = 'none';
}

// Use this when I want to make a window full screen.
// Make some filler webpage that will be a fun easter egg
// Call in HTML like this, <a href="#" onclick="fullwin()"></a>
function fullwin() {
	window.open("bigpage.html","bfs","fullscreen,scrollbars")
}

$(function startTime()
{
	var today=new Date();
	var h=today.getHours();
	var m=today.getMinutes();
	// add a zero in front of numbers<10
	m=checkTime(m);
	document.getElementById('clock').innerHTML=h+":"+m;
	t=setTimeout(function(){startTime()},500);
});

function checkTime(i)
{
	if (i<10)
	  {
	  i="0" + i;
	  }
	return i;
}
