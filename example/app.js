const clipeace = require('../lib/clipeace');
const target = document.getElementById('target');
const copyBtn = document.getElementById('copyBtn');

copyBtn.addEventListener('click', function(){
  clipeace(target)
    .then((res) => {
      console.log(res);
    }).catch((error) => {
      console.log(error);
    });
}, false);
