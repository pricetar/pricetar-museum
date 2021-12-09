'use strict';


// 鳥の無駄な挙動対応
const bird2 = document.getElementById('bird2');
const bird3 = document.getElementById('bird3');

const remove1 = () => {
    bird2.classList.remove('opa1');
}
const remove2 = () => {
        bird3.classList.remove('opa1');
    }
    //1,000ミリ秒後にcountUp関数を呼び出す処理を追加
setTimeout(remove1, 2000);
setTimeout(remove2, 3000);