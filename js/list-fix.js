'use strict';

{

    const image = document.getElementsByClassName('img');
    image.addEventListener('click', (e) => {
        let modalTarget = this.data('modal-link');
        let modal = document.querySelector('.' + modalTarget);
        modal.toggleClass('is-show');
    });

    // $(function() {
    //     $('.img').on('click', function() {
    //         //     ボタンをクリックしたら、クリックしたい要素のdata属性を取得
    //         let modalTarget = $(this).data('modal-link');
    //         //     上記で取得した要素と同じclass名を持つ要素を取得
    //         let modal = document.querySelector('.' + modalTarget);
    //         //     その要素にclassを付け替える
    //         $(modal).toggleClass('is-show');
    //     });

    //     //   modalを閉じるときの動作
    //     $('.modal__bg').on('click', function() {
    //         $(this).parents('.modal').toggleClass('is-show');
    //     });
    // });


}