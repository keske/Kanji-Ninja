import サーチ from './カナ.ui';

class Kanaコントローラー {
  constructor(カナサービス) {
    this.name = 'kana';

    this.kana = カナサービス.get();

    サーチ.scroll();
  }
}

Kanaコントローラー.$inject = ['カナサービス'];
export default Kanaコントローラー;
