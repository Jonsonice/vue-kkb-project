import Vue from 'vue'

console.log(Vue);

document.getElementById('aBtn').onclick = function(){
  require.ensure([],function(){
    var A = require('./A.js');
    alert(A.data);
  })
};

document.getElementById('bBtn').onclick = function(){
  require.ensure([],function(){
    var B = require('./B.js');
    alert(B.data);
  })
};
