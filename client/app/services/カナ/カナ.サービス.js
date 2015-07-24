import angular from 'angular';

let カナ = [{
    "hiragana": "あ",
    "katakana": "ア",
    "means": "a",
    "hidden": "а"
  }, {
    "hiragana": "い",
    "katakana": "イ",
    "means": "и",
    "hidden": "i"
  }, {
    "hiragana": "う",
    "katakana": "ウ",
    "means": "у",
    "hidden": "u"
  }, {
    "hiragana": "え",
    "katakana": "エ",
    "means": "э",
    "hidden": "e"
  }, {
    "hiragana": "お",
    "katakana": "オ",
    "means": "о",
    "hidden": "o"
  },

  {
    "hiragana": "か",
    "katakana": "カ",
    "means": "кa",
    "hidden": "kа"
  }, {
    "hiragana": "き",
    "katakana": "キ",
    "means": "ки",
    "hidden": "ki"
  }, {
    "hiragana": "く",
    "katakana": "ク",
    "means": "ку",
    "hidden": "ku"
  }, {
    "hiragana": "け",
    "katakana": "ケ",
    "means": "кэ",
    "hidden": "ke"
  }, {
    "hiragana": "こ",
    "katakana": "コ",
    "means": "ко",
    "hidden": "ko"
  },

  {
    "hiragana": "さ",
    "katakana": "サ",
    "means": "сa",
    "hidden": "sа"
  }, {
    "hiragana": "し",
    "katakana": "シ",
    "means": "си",
    "hidden": "si"
  }, {
    "hiragana": "す",
    "katakana": "ス",
    "means": "су",
    "hidden": "su"
  }, {
    "hiragana": "せ",
    "katakana": "セ",
    "means": "сэ",
    "hidden": "se"
  }, {
    "hiragana": "そ",
    "katakana": "ソ",
    "means": "со",
    "hidden": "so"
  },

  {
    "hiragana": "た",
    "katakana": "タ",
    "means": "тa",
    "hidden": "tа"
  }, {
    "hiragana": "ち",
    "katakana": "チ",
    "means": "ти",
    "hidden": "ti"
  }, {
    "hiragana": "つ",
    "katakana": "ツ",
    "means": "ту",
    "hidden": "tu"
  }, {
    "hiragana": "て",
    "katakana": "テ",
    "means": "тэ",
    "hidden": "te"
  }, {
    "hiragana": "と",
    "katakana": "ト",
    "means": "то",
    "hidden": "to"
  },

  {
    "hiragana": "な",
    "katakana": "ナ",
    "means": "нa",
    "hidden": "nа"
  }, {
    "hiragana": "に",
    "katakana": "ニ",
    "means": "ни",
    "hidden": "ni"
  }, {
    "hiragana": "ぬ",
    "katakana": "ヌ",
    "means": "ну",
    "hidden": "nu"
  }, {
    "hiragana": "ね",
    "katakana": "ネ",
    "means": "нэ",
    "hidden": "ne"
  }, {
    "hiragana": "の",
    "katakana": "ノ",
    "means": "но",
    "hidden": "no"
  },

  {
    "hiragana": "は",
    "katakana": "ハ",
    "means": "хa",
    "hidden": "hа"
  }, {
    "hiragana": "ひ",
    "katakana": "ヒ",
    "means": "хи",
    "hidden": "hi"
  }, {
    "hiragana": "ふ",
    "katakana": "フ",
    "means": "ху",
    "hidden": "hu"
  }, {
    "hiragana": "へ",
    "katakana": "ヘ",
    "means": "хэ",
    "hidden": "he"
  }, {
    "hiragana": "ほ",
    "katakana": "ホ",
    "means": "хо",
    "hidden": "ho"
  },

  {
    "hiragana": "ま",
    "katakana": "マ",
    "means": "мa",
    "hidden": "mа"
  }, {
    "hiragana": "み",
    "katakana": "ミ",
    "means": "ми",
    "hidden": "mi"
  }, {
    "hiragana": "む",
    "katakana": "ム",
    "means": "му",
    "hidden": "mu"
  }, {
    "hiragana": "め",
    "katakana": "メ",
    "means": "мэ",
    "hidden": "me"
  }, {
    "hiragana": "も",
    "katakana": "モ",
    "means": "мо",
    "hidden": "mo"
  },

  {
    "hiragana": "や",
    "katakana": "ヤ",
    "means": "я",
    "hidden": "ya"
  }, {
    "hiragana": "ゆ",
    "katakana": "ユ",
    "means": "ю",
    "hidden": "yu"
  }, {
    "hiragana": "よ",
    "katakana": "ヨ",
    "means": "ё",
    "hidden": "yo"
  },

  {
    "hiragana": "ら",
    "katakana": "ラ",
    "means": "рa",
    "hidden": "rа"
  }, {
    "hiragana": "り",
    "katakana": "リ",
    "means": "ри",
    "hidden": "ri"
  }, {
    "hiragana": "る",
    "katakana": "ル",
    "means": "ру",
    "hidden": "ru"
  }, {
    "hiragana": "れ",
    "katakana": "レ",
    "means": "рэ",
    "hidden": "re"
  }, {
    "hiragana": "ろ",
    "katakana": "ロ",
    "means": "ро",
    "hidden": "ro"
  },

  {
    "hiragana": "わ",
    "katakana": "ワ",
    "means": "вa",
    "hidden": "wa"
  }, {
    "hiragana": "ゐ",
    "katakana": "ヰ",
    "means": "ви",
    "hidden": "wi"
  }, {
    "hiragana": "",
    "katakana": "于",
    "means": "ву",
    "hidden": "wu"
  }, {
    "hiragana": "ゑ",
    "katakana": "ヱ",
    "means": "вэ",
    "hidden": "we"
  }, {
    "hiragana": "を",
    "katakana": "ヲ",
    "means": "во",
    "hidden": "wo"
  },

  {
    "hiragana": "ん",
    "katakana": "ン",
    "means": "н",
    "hidden": "n"
  },
];

module.exports = カナ;

let カナサービス = angular.module('カナサービス', [])
  .service('カナサービス', function() {

    this.get = () => {
      return カナ;
    };

  });

export default カナサービス;
