class HomeController {
  constructor(漢字サービス) {
    this.name = 'home';

    this.kanji = 漢字サービス.getAll();
  }
}

HomeController.$inject = ['漢字サービス'];
export default HomeController;
