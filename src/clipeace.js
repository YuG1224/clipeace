'use strict';

const Promise = require('bluebird');

const clipeace = function(elem) {
  return new Promise((resolve, reject) => {

    const selection = window.getSelection();
    const range = document.createRange();
    let text = undefined;
    let copy = false;

    range.selectNodeContents(elem);
    selection.removeAllRanges();
    selection.addRange(range);
    text = selection.toString();
    copy = document.execCommand('copy');
    selection.removeAllRanges();

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
