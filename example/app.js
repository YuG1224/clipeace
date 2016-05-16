'use strict';

const clipeace = require('../src/clipeace');
const target = document.getElementById('target');
const copyBtn = document.getElementById('copyBtn');

copyBtn.addEventListener('click', function(){
  clipeace(target)
    .then(function(res){
      console.log(res);
    }).catch(function(error){
      console.log(error);
    });
}, false);
