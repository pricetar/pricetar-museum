'use strict';

{
    const bird2 = document.getElementById('bird2');
    const bird3 = document.getElementById('bitd3');

    window.onload = function() { // 画面を開いた瞬間に発火させる関数
        setTimeout(function() {
            bird2.classList.add("bird");
            bird3.classList.add("bird");
        }, 4000);
    }
}