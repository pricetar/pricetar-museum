'use strict';

{
    const tm = 2500;

    window.onload = function() {
        setTimeout(fn, tm);
    }

    function fn() {
        window.location.href = 'list.html';
    }
}