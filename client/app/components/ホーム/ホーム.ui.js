import $ from 'jquery';

let homeUI = {
  init() {
    let scroll = 0;
    let min = 50;

    $(window).scroll(() => {
      scroll = $(window).scrollTop();
      if (scroll > min) {
        $('.グループ').addClass('scrolled');
      } else {
        $('.グループ').removeClass('scrolled');
      }
    })
  }
}

export default homeUI;
