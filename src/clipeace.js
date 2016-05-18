'use strict';

const Promise = require('bluebird');

const clipeace = function(elem) {
  return new Promise((resolve, reject) => {

    let text = undefined;
    let copy = false;

    if (['INPUT', 'TEXTAREA'].includes(elem.nodeName)) {
      elem.focus();
      elem.setSelectionRange(0, elem.value.length);
      text = elem.value;
      copy = document.execCommand('copy');
      elem.blur();

    } else {
      const selection = window.getSelection();
      const range = document.createRange();

      range.selectNodeContents(elem);
      selection.removeAllRanges();
      selection.addRange(range);
      text = selection.toString();
      copy = document.execCommand('copy');
      selection.removeAllRanges();
    }

    const res = {
      text: text,
      copy: copy
    };

    if (copy) {
      resolve(res);
    } else {
      reject(res);
    }

  });
};

module.exports = clipeace;
