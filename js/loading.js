'use strict';

{
    var tm = 5000; // ここでLoadingの時間を変更する

    window.onload = function() { // 画面を開いた瞬間に発火させる関数
        setTimeout(fn, tm); // setTimeoutで時間を指定し、指定した時間が経ったらfn関数を実行する。
    }

    function fn() { // 画面遷移させる関数
        window.location.href = '../プライスターミュージアム/list.html';
    }
}