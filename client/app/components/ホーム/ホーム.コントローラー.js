import _ from 'underscore';
import header from './ホーム.ui';

class ホームコントローラー {
  constructor(漢字サービス) {
    this.name = 'home';

    this.defaultLimit = 7;
    this.limit = this.defaultLimit;

    this.kanji = 漢字サービス.getAll();

    // Get Onyomi and Kunyomi
    this.getKunyomiAndOnyomi = (word) => {
      return word.split(' ').filter(function(n) {
        return n !== ''
      });
    };

    // Groups
    this.groups = [];
    for (var i in this.kanji) {
      this.groups.push(this.kanji[i].group);
    }
    // Get uniq
    this.groups = _.uniq(this.groups);
    // Apply group
    this.applyGroup = (group) => {
      this.query = group;
      this.limit = this.defaultLimit;
    }

    // Show more btn
    this.showMore = () => {
      this.limit += this.defaultLimit;
    }

    // Header scroll
    header.scroll();
  }
}

ホームコントローラー.$inject = ['漢字サービス'];
export default ホームコントローラー;
