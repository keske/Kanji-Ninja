import _ from 'underscore';
import header from './ホーム.ui';
import サーチ from './../kana/カナ.ui';

class ホームコントローラー {
  constructor(漢字サービス) {
    this.name = 'home';

    this.defaultLimit = 7;
    this.limit = this.defaultLimit;

    this.kanji = 漢字サービス.getAll();

    // Get Onyomi and Kunyomi
    this.getKunyomiAndOnyomi = (word) => {
      return word.split(' ').filter((n) => {
        return n !== '';
      });
    };

    // Get translate
    this.getTranslate = (word) => {
      return word.replace(/[,]/g, '').split(' ').filter((n) => {
        return n !== '';
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
    サーチ.scroll();
    header.scroll();
  }
}

ホームコントローラー.$inject = ['漢字サービス'];
export default ホームコントローラー;
