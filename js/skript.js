function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

(function () {
    // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
    if (!String.prototype.trim) {
        (function () {
            // Make sure we trim BOM and NBSP
            var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            String.prototype.trim = function () {
                return this.replace(rtrim, '');
            };
        })();
    }

				[].slice.call(document.querySelectorAll('input.input__field, textarea.input__field')).forEach(function (inputEl) {
        // in case the input is already filled..
        if (inputEl.value.trim() !== '') {
            classie.add(inputEl.parentNode, 'input--filled');
        }

        // events:
        inputEl.addEventListener('focus', onInputFocus);
        inputEl.addEventListener('blur', onInputBlur);
    });

    function onInputFocus(ev) {
        classie.add(ev.target.parentNode, 'input--filled');
    }

    function onInputBlur(ev) {
        if (ev.target.value.trim() === '') {
            classie.remove(ev.target.parentNode, 'input--filled');
        }
    }
})();
document.addEventListener('DOMContentLoaded', function () {
    Typed.new('.element', {
        stringsElement: document.getElementById('typed-strings')
    });
});
$('a[href*=\\#]').on('click', function (event) {
    event.preventDefault();
    $('html,body').animate({
        scrollTop: $(this.hash).offset().top
    }, 500);
});
$(function () {
    $('#header_nav').data('size', 'big');
});

$(window).on("scroll touchmove", function () {
    $('#header_nav').toggleClass('tiny', $(document).scrollTop() > 0);
});
$(function () {
    $('.header_nav-link').data('size', 'big');
});

$(window).on("scroll touchmove", function () {
    $('.header_nav-link').toggleClass('color', $(document).scrollTop() > 0);
});
$(function () {
    $('.header_logo').data('size', 'big');
});

$(window).on("scroll touchmove", function () {
    $('.header_logo').toggleClass('display', $(document).scrollTop() > 0);
});





$(document).ready(function () {
    $("html").niceScroll();
});
$("#thisdiv").niceScroll({
    scrollspeed: 80,
    mousescrollstep: 40,
});


$( '.overlay-content a' ).on("click", function(){
    $("#myNav").css("width", "0%");
});