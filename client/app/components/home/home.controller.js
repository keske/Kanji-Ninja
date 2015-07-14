class HomeController {
  constructor(漢字サービス) {
    this.name = 'home';

    this.kanji = 漢字サービス.getAll();

    this.getOnyomi = (onyomi) => {
      return onyomi.replace(' ', '、');
    };

    this.getKunyomi = (kunyomi) => {
      return kunyomi.replace(' ', '、');
    };
  }
}

HomeController.$inject = ['漢字サービス'];
export default HomeController;
