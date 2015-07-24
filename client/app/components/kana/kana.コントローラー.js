class Kanaコントローラー {
  constructor(カナサービス) {
    this.name = 'kana';

    this.kana = カナサービス.get();;
  }
}

Kanaコントローラー.$inject = ['カナサービス'];
export default Kanaコントローラー;
