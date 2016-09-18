window.onerror = function (e, t, n, r) { };
$(function () {
    $("a").focus(function () { this.blur() }); SI.Files.stylizeAll();
    slider.init();
    slider2.init();
    $("input.text-default").each(function ()
    { $(this).attr("default", $(this).val()) }).focus(function () { if ($(this).val() == $(this).attr("default")) $(this).val("") }).blur(function () { if ($(this).val() == "") $(this).val($(this).attr("default")) });
    $("input.text,textarea.text").focus(function () { $(this).addClass("textfocus") }).blur(function ()
    { $(this).removeClass("textfocus") }); var e = 0, t = null; $("a.popup").click(function () {
        var n = $(this).attr("rel").split("|")[0], r = parseInt($(this).attr("rel").split("|")[1]);
        var i = $("#" + n); if (!i.length) return false;
        if (typeof e == "object" && e.attr("id") != n) {
            e.hide(50);
            $(t).parent().removeClass(e.attr("id").split("-")[1] + "-open"); e = null
        } return false
    });
    $("p.images img").click(function () {
        var e = $(this).attr("src").split("bg/bg")[1].split("-thumb")[0];
        $(document.body).css("backgroundImage", "url(" + _siteRoot + "images/bg/bg" + e + ".jpg)");
        $(this).parent().find("img").removeClass("on"); $(this).addClass("on"); return false
    });
    $(window).load(function () {
        try {
            $.each(css_ims, function () {
                (new Image).src = _siteRoot + "css/images/" + this
            });
            $.each(css_cims, function () {
                var e = this; $.each(["blue", "purple", "pink", "red", "grey", "green", "yellow", "orange"],
           function () { (new Image).src = _siteRoot + "css/" + this + "/" + e })
            })
        } catch (e) { }
    });
    $("div.sc-large div.img:has(div.tml)").each(function () {
        $("div.tml", this).hide();
        $(this).append('<a href="#" class="tml_open"> </a>').find("a").css({ left: parseInt($(this).offset().left) + 757, top: parseInt($(this).offset().top) + 1 }).click(function ()
        { $(this).siblings("div.tml").slideToggle(); return false }).focus(function () { this.blur() })
    })
});

var slider = { num: -1, cur: 0, cr: [], al: null, at: 10 * 757, ar: true, resume: 1,
    init:
 function () {
     if (!slider.data || !slider.data.length) return false;

     var e = slider.data; slider.num = e.length; var t = Math.floor(Math.random() * 1);

     $("#slide-nav").append('<a id="lnkstart" href="#" onclick="slider.startstop();return false;" style="width:38px;background:none;">pause</a>')
     for (var n = 0; n < slider.num; n++) {
         $("#" + e[n].id).css({ left: (n - t) * 757 });
         $("#slide-nav").append('<a id="slide-link-' + n + '" href="#" onclick="slider.slide(' + n + ');return false;" onfocus="this.blur();">' + (n + 1) + "</a>")
     }
     $("img,div#slide-controls", $("div#slide-holder")).fadeIn();
     slider.text(e[t]); slider.on(t); slider.cur = t;
     slider.al = window.setTimeout("slider.auto();", slider.at)

 }, auto: function () { if (!slider.ar) return false; var e = slider.cur + 1; if (e >= slider.num) e = 0; slider.slide(e) },
    slide: function (e) {
        if (e < 0 || e >= slider.num || e == slider.cur) return;
        if (slider.resume == 1) {
            window.clearTimeout(slider.al);
            slider.al = window.setTimeout("slider.auto();", slider.at);
        }
        var t = slider.data;
        for (var n = 0; n < slider.num; n++) $("#" + t[n].id).stop().animate({ left: (n - e) * 757 }, 757, "swing");
        slider.on(e); slider.text(t[e]); slider.cur = e
    },
    on: function (e) {
        $("#slide-nav a").removeClass("on");
        $("#slide-nav a#slide-link-" + e).addClass("on")
    },
    text: function (e) {
        slider.cr["a"] = e.client; slider.cr["b"] = e.desc;
        slider.ticker("#slide-client span", e.client, 0, "a"); slider.ticker("#slide-desc", e.desc, 0, "b")
    },
    ticker: function (e, t, n, r) {
        if (slider.cr[r] != t) return false; ctext = t.substring(0, n) + (n % 2 ? "-" : "_");
        $(e).html(ctext);
        if (n == t.length)
            $(e).html(t);
        else
            window.setTimeout('slider.ticker("' + e + '","' + t + '",' + (n + 1) + ',"' + r + '");', 30)
    },
    startstop: function () {
        if (slider.resume == 1) {
            $('#lnkstart').html("resume");
            slider.resume = 0;
            window.clearTimeout(slider.al);
        }
        else {
            $('#lnkstart').html("pause");
            slider.resume = 1;
            window.setTimeout("slider.auto();", slider.at)
        }



    }
};
// left nav

var slider2 = { num: -1, cur: 0, cr: [], al: null, at: 10 * 757, ar: true, resume: 1,
    init:
 function () {
     if (!slider2.data || !slider2.data.length) return false;

     var e = slider2.data; slider2.num = e.length; var t = Math.floor(Math.random() * 1);

    
     for (var n = 0; n < slider2.num; n++) {
         $("#" + e[n].id).css({ left: (n - t) * 757 });
        
     }
     $("img", $("div#slide-holder1")).fadeIn();
     slider.cur = t;
     slider2.al = window.setTimeout("slider2.auto();", slider2.at)

 }, auto: function () { if (!slider2.ar) return false; var e = slider2.cur + 1; if (e >= slider2.num) e = 0; slider2.slide(e) },
    slide: function (e) {
        if (e < 0 || e >= slider2.num || e == slider2.cur) return;
        if (slider2.resume == 1) {
            window.clearTimeout(slider2.al);
            slider2.al = window.setTimeout("slider2.auto();", slider2.at);
        }
        var t = slider2.data;
        for (var n = 0; n < slider2.num; n++) $("#" + t[n].id).stop().animate({ left: (n - e) * 757 }, 757, "swing");
        slider2.cur = e
    }
};





if (!window.SI) {
    var SI = {}
}
SI.Files = { htmlClass: "SI-FILES-STYLIZED", fileClass: "file", wrapClass: "cabinet", fini: false, able: false, init: function () { this.fini = true }, stylize:
                            function (e) {
                                if (!this.fini)
                                { this.init() }
                                if (!this.able)
                                { return }
                                e.parentNode.file = e; e.parentNode.onmousemove = function (e) {
                                    if (typeof e == "undefined") e = window.event;
                                    if (typeof e.pageY == "undefined" && typeof e.clientX == "number" && document.documentElement) {
                                        e.pageX = e.clientX + document.documentElement.scrollLeft; e.pageY = e.clientY + document.documentElement.scrollTop
                                    }
                                    var t = oy = 0;
                                    var n = this;
                                    if (n.offsetParent) {
                                        t = n.offsetLeft;
                                        oy = n.offsetTop;
                                        while (n = n.offsetParent) {
                                            t += n.offsetLeft; oy += n.offsetTop
                                        }
                                    }
                                }
                            }

                                            ,
    stylizeAll: function () {
        if (!this.fini)
        { this.init() }
        if (!this.able)
        { return }
    }

}