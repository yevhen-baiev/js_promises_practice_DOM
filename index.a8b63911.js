var n=document.body,e=0,t=function(t){return e+=1,n.insertAdjacentHTML("beforeend",'\n  <div\n    class="success message message--'.concat(e,'"\n    data-qa="notification"\n  >\n    ').concat(t,"\n  </div>\n"))},r=new Promise(function(e,t){n.addEventListener("click",function(){return e("First promise was resolved")}),setTimeout(function(){return t(Error("First promise was rejected"))},3e3)}),o=new Promise(function(e){n.addEventListener("mousedown",function(n){(2===n.button||0===n.button)&&e("Second promise was resolved")})}),i=new Promise(function(e){var t={left:!1,right:!1},r=function(n){var t=n.left,r=n.right;return t&&r&&e("Third promise was resolved")};n.addEventListener("mousedown",function(n){2===n.button&&(t.right=!0,r(t)),0===n.button&&(t.left=!0,r(t))})});r.then(t).catch(function(e){var t;return t=e.message,n.insertAdjacentHTML("beforeend",'\n    <div\n      class="\n        message\n        message--err\n        warning\n      "\n      data-qa="notification"\n    >\n      '.concat(t,"\n    </div>\n  "))}),o.then(t),i.then(t);
//# sourceMappingURL=index.a8b63911.js.map
