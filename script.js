let ok = document.getElementById('ok'); 
let cancel = document.getElementById('cancel'); 
let showDate = document.getElementById('showDate'); 
ok.addEventListener('click', () => alert('let me see ...')); 
cancel.addEventListener('click', () => alert('not ok ...')); 
showDate.addEventListener('click', function(e) {     
    document.getElementById('emptySpace').innerText = Date(); 
});
showDate.addEventListener('dblclick', function(e) {     
    document.getElementById('emptySpace').innerText=" " 
});