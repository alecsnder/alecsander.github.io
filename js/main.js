$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1500);
	        return false;
	      }
	    }
	  });
});

$('.noback').waypoint(function(direction) {
    document.getElementById('mainnav').style.opacity = 0;
    document.getElementById('alecsander-detail').style.opacity = 0;
    $('#mainnav').css('visibility','hidden');
    $('.arrow-wrap').css('visibility','visible');
});


$('#alecsander').waypoint(function(direction) {
  $('#mainnav ul li a').css('color','#ffffff');
  $('#mainnav ul li:nth-child(1) a').css('color','#ff7e00');
  $('#mainnav').css('visibility','visible');
  document.getElementById('alecsander-hide').style.opacity = 1;
  document.getElementById('alecsander-title').style.opacity = 1;
  document.getElementById('mainnav').style.opacity = 1;
  document.getElementById('alecsander-detail').style.opacity = 1;
  document.getElementById('item_1_a').style.opacity = 1;
  document.getElementById('item_1_b').style.opacity = 1;
  }, {
   offset: 300
});

$('#alecsander').waypoint(function(up) {
  $('#mainnav ul li a').css('color','#ffffff');
  $('#mainnav ul li:nth-child(1) a').css('color','#ff7e00');
}, {
   offset: -1
});


$('#alecsander1').waypoint(function(direction) {
  $('#mainnav ul li a').css('color','#ffffff');
  $('#mainnav ul li:nth-child(2) a').css('color','#008aff');
  document.getElementById('alecsander1-hide').style.opacity = 1;
  document.getElementById('alecsander1-title').style.opacity = 1;
  //$('.arrow-wrap').css('visibility','hidden');
  }, {
   offset: 300
});

$('#alecsander1').waypoint(function(up) {
  $('#mainnav ul li a').css('color','#ffffff');
  $('#mainnav ul li:nth-child(2) a').css('color','#008aff');
}, {
   offset: -1
});

$('#alecsander3').waypoint(function(direction) {
  $('#mainnav ul li a').css('color','#ffffff');
  $('#mainnav ul li:nth-child(4) a').css('color','#000000');
  document.getElementById('alecsander3-hide').style.opacity = 1;
  document.getElementById('alecsander3-title').style.opacity = 1;
  document.getElementById('alecsander3-hide-sequel').style.opacity = 1;
  }, {
   offset: 300
});

$('#alecsander3').waypoint(function(direction) {
  $('#mainnav ul li a').css('color','#ffffff');
  $('#mainnav ul li:nth-child(4) a').css('color','#000000');
}, {
   offset: -1
});

$('#alecsander2').waypoint(function(direction) {
  $('#mainnav ul li a').css('color','#ffffff');
  $('#mainnav ul li:nth-child(3) a').css('color','#ff7e00');
  document.getElementById('alecsander2-hide').style.opacity = 1;
  document.getElementById('alecsander2-title').style.opacity = 1;
  document.getElementById('alecsander2-hide-sequel').style.opacity = 1;
  }, {
   offset: 300
});

$('#alecsander2').waypoint(function(direction) {
  $('#mainnav ul li a').css('color','#ffffff');
  $('#mainnav ul li:nth-child(3) a').css('color','#ff7e00');
}, {
   offset: -1
});

$('#alecsander4').waypoint(function(direction) {
  $('#mainnav ul li a').css('color','#ffffff');
  $('#mainnav ul li:nth-child(5) a').css('color','#ff7e00');
  document.getElementById('alecsander4-hide').style.opacity = 1;
  document.getElementById('alecsander4-title').style.opacity = 1;
  document.getElementById('alecsander4-hide-sequel').style.opacity = 1;
  }, {
   offset: 300
});

$('#alecsander4').waypoint(function(direction) {
  $('#mainnav ul li a').css('color','#ffffff');
  $('#mainnav ul li:nth-child(5) a').css('color','#ff7e00');
}, {
   offset: -1
});

$('#alecsander5').waypoint(function(direction) {
  $('#mainnav ul li a').css('color','#ffffff');
  $('#mainnav ul li:nth-child(6) a').css('color','#ff7e00');
  document.getElementById('alecsander5-hide').style.opacity = 1;
  document.getElementById('alecsander5-title').style.opacity = 1;
  document.getElementById('alecsander5-hide-sequel').style.opacity = 1;
  }, {
   offset: 300
});

$('#alecsander5').waypoint(function(direction) {
  $('#mainnav ul li a').css('color','#ffffff');
  $('#mainnav ul li:nth-child(6) a').css('color','#ff7e00');
}, {
   offset: -1
});

$('#alecsander6').waypoint(function(direction) {
  $('#mainnav ul li a').css('color','#ffffff');
  $('#mainnav ul li:nth-child(7) a').css('color','#ff7e00');
  document.getElementById('alecsander6-hide').style.opacity = 1;
  document.getElementById('alecsander6-title').style.opacity = 1;
  document.getElementById('alecsander6-hide-sequel').style.opacity = 1;
  }, {
   offset: 300
});

$('#alecsander6').waypoint(function(direction) {
  $('#mainnav ul li a').css('color','#ffffff');
  $('#mainnav ul li:nth-child(7) a').css('color','#ff7e00');
}, {
   offset: -1
});

$('#alecsander7').waypoint(function(direction) {
  $('#mainnav ul li a').css('color','#ffffff');
  $('#mainnav ul li:nth-child(8) a').css('color','#ff7e00');
  document.getElementById('alecsander7-hide').style.opacity = 1;
  document.getElementById('alecsander7-title').style.opacity = 1;
  document.getElementById('alecsander7-hide-sequel').style.opacity = 1;
  }, {
   offset: 300
});

$('#alecsander7').waypoint(function(direction) {
  $('#mainnav ul li a').css('color','#ffffff');
  $('#mainnav ul li:nth-child(8) a').css('color','#ff7e00');
}, {
   offset: -1
});

$('#alecsander8').waypoint(function(direction) {
  $('#mainnav ul li a').css('color','#ffffff');
  $('#mainnav ul li:nth-child(9) a').css('color','#ff7e00');
  document.getElementById('alecsander8-hide').style.opacity = 1;
  document.getElementById('alecsander8-title').style.opacity = 1;
  document.getElementById('alecsander8-hide-sequel').style.opacity = 1;
  }, {
   offset: 300
});

$('#alecsander8').waypoint(function(direction) {
  $('#mainnav ul li a').css('color','#ffffff');
  $('#mainnav ul li:nth-child(9) a').css('color','#ff7e00');
}, {
   offset: -1
});
$('#end').waypoint(function(direction) {
  $('#mainnav ul li a').css('color','#ffffff');
  $('#mainnav ul li:nth-child(9) a').css('color','#ff7e00');
  }, {
   offset: 300
});
$('#end').waypoint(function(direction) {
  $('#mainnav ul li a').css('color','#ffffff');
  $('#mainnav ul li:nth-child(10) a').css('color','#ff7e00');
}, {
   offset: 10
});

