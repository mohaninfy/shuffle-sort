var sortArr = [1,2,3,4,5,6,7,8,9];
var shuffleArr = JSON.parse(JSON.stringify(sortArr));
var displayArr = [];


//document ready function
(function() {
 getView();
})();

//shuffle
function shuffle(shuffle) {    
var i = shuffle.length,
j = 0,
temp;

while (i--) {

j = Math.floor(Math.random() * (i+1));

// swap randomly chosen element with current element
temp = shuffle[i];
shuffle[i] = shuffle[j];
shuffle[j] = temp;

}

return shuffle;
}
function getShuffle(){
displayArr = [];
if(localStorage.getItem('prevShuffled')){
displayArr = shuffle(JSON.parse(localStorage.getItem('prevShuffled')));

localStorage.setItem('prevShuffled',JSON.stringify(displayArr));
return displayArr;
} 
else {
displayArr = shuffle(shuffleArr);

localStorage.setItem('prevShuffled',JSON.stringify(displayArr));
return displayArr
}
}
//end

//sort start
function getSort(){
displayArr = [];
return displayArr = sortArr;
}

//window resize event to call corresponding method
window.onresize = getView;

function getView(){
  if(window.innerWidth > 991){
      //large
      setTimeout(() => {   
          displayArr = getSort();  
          updateWebView();    
      }, 500);

  } else {
      //mobile
       setTimeout(() => {       
            displayArr = getSort();   
            updateMobView();
      }, 500);

  }
}

function updateWebView(){
var webHtml = '';
for(var i of displayArr){
    webHtml += '<div class="w33 h200 float-left table class'+i+'"><div class="table-cell w100  h200 text-center"><p class="text-center">' + i + '</p></div></div>';      
}
document.getElementById('desktopView').innerHTML = webHtml;
}

function updateMobView(){
var mobHtml = '';
for(var i of displayArr){
    mobHtml += '<div class="w1 h50 mB10 float-left class'+i+'"></div><div class="mB10 float-left text-center h50 w99" style="background: #EFEFEF;"><p>' + i + '</p></div>';      
}
document.getElementById('mobileView').innerHTML = mobHtml;
}

function updateWebTable(val){
    if(val == 'shuffle'){
        displayArr = getShuffle();
        updateWebView();
    } else {
        displayArr = getSort();
        updateWebView();
    }
}

function updateMobTable(val){
    if(val == 'shuffle'){
        displayArr = getShuffle();
        updateMobView();
    } else {
        displayArr = getSort();
        updateMobView();
    }
}