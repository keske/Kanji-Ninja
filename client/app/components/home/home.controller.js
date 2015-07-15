import _ from 'underscore';

class HomeController {
  constructor(漢字サービス) {
    this.name = 'home';

    this.kanji = 漢字サービス.getAll();

    this.getOnyomi = (onyomi) => {
      return onyomi.replace(' ', '、 ');
    };

    this.getKunyomi = (kunyomi) => {
      return kunyomi.replace(' ', '、 ');
    };

    this.groups = [];
    for (var i in this.kanji) {
      this.groups.push(this.kanji[i].group);
    }
    this.groups = _.uniq(this.groups);

    this.applyGroup = (group) => {
      this.query = group;
      console.log(group);
    }
  }
}

HomeController.$inject = ['漢字サービス'];
export default HomeController;
