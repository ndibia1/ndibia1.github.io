var ddtabmenu={disabletablinks:false,snap2original:[true,300],currentpageurl:window.location.href.replace("http://"+window.location.hostname,"").replace(/^\//,""),definemenu:function(e,t){this[e+"-menuitems"]=null;this[e+"-dselected"]=-1;this.addEvent(window,function(){ddtabmenu.init(e,t)},"load")},showsubmenu:function(e,t){var n=this[e+"-menuitems"];this.clearrevert2default(e);for(i=0;i<n.length;i++){n[i].className="";if(typeof n[i].hasSubContent!="undefined")document.getElementById(n[i].getAttribute("rel")).style.display="none"}t.className="current";if(typeof t.hasSubContent!="undefined")document.getElementById(t.getAttribute("rel")).style.display="block"},isSelected:function(e){var e=e.replace("http://"+e.hostname,"").replace(/^\//,"");return ddtabmenu.currentpageurl==e},isContained:function(e,t){var t=window.event||t;var n=t.relatedTarget||(t.type=="mouseover"?t.fromElement:t.toElement);while(n&&n!=e)try{n=n.parentNode}catch(t){n=e}if(n==e)return true;else return false},revert2default:function(e,t,n){if(!ddtabmenu.isContained(e,t,n)){window["hidetimer_"+t]=setTimeout(function(){ddtabmenu.showsubmenu(t,ddtabmenu[t+"-dselected"])},ddtabmenu.snap2original[1])}},clearrevert2default:function(e){if(typeof window["hidetimer_"+e]!="undefined")clearTimeout(window["hidetimer_"+e])},addEvent:function(e,t,n){var n=window.addEventListener?n:"on"+n;if(e.addEventListener)e.addEventListener(n,t,false);else if(e.attachEvent)e.attachEvent(n,t)},init:function(e,t){var n=document.getElementById(e).getElementsByTagName("a");this[e+"-menuitems"]=n;for(var r=0;r<n.length;r++){if(n[r].getAttribute("rel")){this[e+"-menuitems"][r].hasSubContent=true;if(ddtabmenu.disabletablinks)n[r].onclick=function(){return false};if(ddtabmenu.snap2original[0]==true){var i=document.getElementById(n[r].getAttribute("rel"));n[r].onmouseout=function(t){ddtabmenu.revert2default(i,e,t)};i.onmouseover=function(){ddtabmenu.clearrevert2default(e)};i.onmouseout=function(t){ddtabmenu.revert2default(this,e,t)}}}else n[r].onmouseout=function(t){this.className="";if(ddtabmenu.snap2original[0]==true)ddtabmenu.revert2default(this,e,t)};n[r].onmouseover=function(){ddtabmenu.showsubmenu(e,this)};if(t=="auto"&&typeof s=="undefined"&&this.isSelected(n[r].href)){ddtabmenu.showsubmenu(e,n[r]);this[e+"-dselected"]=n[r];var s=true}else if(parseInt(t)==r){ddtabmenu.showsubmenu(e,n[r]);this[e+"-dselected"]=n[r]}}}}