(function(e){e.fn.extend({jDropDown:function(t){var n={demo:false,effect:"",notMenu:".home",duration:{fadeIn:300,fadeOut:60,slideIn:300,slideOut:60}};t=e.extend(n,t);var r=this;var i=false;return this.each(function(){function n(t,n){if(n=="open"){if(s.effect=="fade"){t.find("div:first").css("opacity",0).css("visibility","visible").animate({opacity:1,MarginTop:3},s.duration.fadeIn)}else if(s.effect=="slide"){initHeight=t.find("div:first").height();t.find("div:first").css("height",0).css("visibility","visible").stop(false,true).animate({height:initHeight},s.duration.slideIn)}else{t.find("div:first").css("visibility","visible")}return true}if(n=="close"){if(s.effect=="fade"){t.find("div:first").animate({opacity:0},s.duration.fadeOut,function(){e(this).css("visibility","hidden")})}else if(s.effect=="slide"){initHeight=t.find("div:first").height();t.find("div:first").css("overflow","hidden").stop(false,true).animate({height:0},s.duration.slideOut,function(){e(this).css("visibility","hidden").css("height",initHeight)})}else{t.find("div:first").css("visibility","hidden");r()}return true}alert("Uncatch exception. Invalid effect mode!");return false}function r(){i=false}var s=t;var o=e(this);var u=o.find("> li").not(s.notMenu);u.hover(function(){var t=e(this);var r=0;o.find(".on").removeClass("on");t.find("a").addClass("on");if(s.demo){s.effect=e("#effect").val()}n(t,"open")},function(){var t=e(this);t.find("a").removeClass("on");n(t,"close")})})}})})(jQuery)