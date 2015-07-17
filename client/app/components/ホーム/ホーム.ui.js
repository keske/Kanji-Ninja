import $ from 'jquery';

let header = {
  scroll() {
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

export default header;
