function getFirstSelector(selector){
  var selected = document.querySelector(selector);
  return selected;
};

function nestedTarget(){
  var selected = document.querySelector("#nested .target");
  return selected;
};

function increaseRankBy(n){
  var listNum = document.querySelectorAll("ul.ranked-list li");
  for (let i = 0, l = listNum.length; i < l; i++){
    listNum[i].innerHTML = parseInt(listNum[i].innerHTML) + n;
  };
};

function deepestChild(){
  var selected = document.querySelector("div#grand-node");
  var childDivs = selected.querySelectorAll("div");
  return childDivs[(childDivs.length - 1)];
};
