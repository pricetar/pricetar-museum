'use strict';


// 鳥2と鳥3が画面左上に表示されてしまう。画面に表示されるまでの間、opatictyを0にして表示させないようにする
const bird2 = document.getElementById('bird2');
const bird3 = document.getElementById('bird3');

const remove1 = () => {
    bird2.classList.remove('opa1');
}
const remove2 = () => {
    bird3.classList.remove('opa1');
}

setTimeout(remove1, 1500); // 1.5秒後にクラスを削除
setTimeout(remove2, 3500); // 3.5秒後にクラスを削除