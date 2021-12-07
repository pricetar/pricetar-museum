'use strict';

{
    // モーダルに関する処理
    $(function() {
        $('.openModal').click(function(e) { //openModalをクリックした時に
            var btnIndex = e.currentTarget.accessKey;　 // imgに指定したaccesskeyを参照
            console.log(e.currentTarget.accessKey); // デバッグ
            $('.modalArea').eq(btnIndex - 1).addClass('is-open');
            //クリックしたモーダルボタンと同じ番目のモーダルを表示する。addClassでis-openクラスを追加して表示する
            　　　　
            // $('html, body').css('overflow', 'hidden');
            // overflow:hidden;の追加で背景のスクロール禁止に
        });
        $('.closeModal, .modalBg').click(function() { //closeModalかmodalBgをクリックした時に
            $('.modalArea').removeClass('is-open');
            //モーダルを非表示にする。removeClassでis-openクラスを削除して非表示にする
            　　　　
            // $('html, body').removeAttr('style');
            //追加したoverflow:hidden;を削除
        });

    });
}

{
    // トップに戻るボタンの処理
    $(function() {
        var pagetop = $('#js-pagetop');
        pagetop.hide();
        $(window).scroll(function() {
            if ($(this).scrollTop() > 500) {
                pagetop.fadeIn();
            } else {
                pagetop.fadeOut();
            }
        });
        pagetop.click(function() {
            $('body, html').animate({
                scrollTop: 0
            }, 500);
            return false;
        });
    });
}