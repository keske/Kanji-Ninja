import $ from 'jquery';

let サーチ = {
  scroll() {
    let scroll = 0;
    let min = 30;

    $(window).scroll(() => {
      scroll = $(window).scrollTop();

      if (scroll > min) {
        $('.サーチ').addClass('fixed');
      } else {
        $('.サーチ').removeClass('fixed');
      }
    });
  }
}

export default サーチ;