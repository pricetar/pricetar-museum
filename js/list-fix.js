'use strict';

{

    // const image = document.getElementsByClassName('img');

    // image.addEventListener('click', (e) => {

    const modalWrapOpen = function(e) {
            console.log(e);
            let modalTarget = this.data('modal-link');
            let modal = document.querySelector('.' + modalTarget);
            modal.toggleClass('is-show');
        }
        // });


    //クリックイベントの定義：複数なのでforEachでイテレートさせる
    //works_modal_open classが付与された要素を全て取得
    //全ての要素に対してクリックイベントを定義する
    Array.from(document.querySelectorAll('img')).forEach((modalOpenElement) => {
        modalOpenElement.addEventListener('click', function(e) {
            modalWrapOpen(e);
        });
    })
}