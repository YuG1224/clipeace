'use strict';
require('babel-polyfill');

const clipeace = function(elem) {
  return new Promise((resolve, reject) => {

    let text = undefined;
    let copy = false;

    if (['INPUT', 'TEXTAREA'].includes(elem.nodeName)) {
      // フォームにフォーカスを当てて、フォームの中身を選択

      elem.focus();
      elem.setSelectionRange(0, elem.value.length);
      text = elem.value;

      // 選択部分をクリップボードにコピーする
      copy = document.execCommand('copy');

      // フォーカス解除
      elem.blur();

    } else {
      // Elementの中身を選択

      const selection = window.getSelection();
      const range = document.createRange();

      range.selectNodeContents(elem);
      selection.removeAllRanges();
      selection.addRange(range);
      text = selection.toString();

      // 選択部分をクリップボードにコピーする
      copy = document.execCommand('copy');

      // 選択解除
      selection.removeAllRanges();
    }

    // response 作成して返却
    const res = {
      text: text,
      copy: copy
    };

    if (copy) resolve(res);
    else reject(res);

  });
};

module.exports = clipeace;
