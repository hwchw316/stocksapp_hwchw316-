let updateinitialbtn = document.querySelector('#initialamtbtn');

let addgainbtn = document.querySelector('#tradewonbtnup');
let minusgainbtn = document.querySelector('#tradewonbtndown');

let addlossbtn = document.querySelector('#tradelossbtnup');
let minuslossbtn = document.querySelector('#tradelossbtndown');


storedinitial = JSON.parse(window.localStorage.getItem('storedinitial'));
document.getElementById('statsinitial').innerHTML = storedinitial;

updateinitialbtn.addEventListener('click', function () {
    let updateinitial = document.querySelector('#initialamounttext').value;
    console.log(updateinitial);
    document.getElementById('statsinitial').innerHTML = updateinitial;
    localStorage.setItem("storedinitial", updateinitial);

});
/// accuminaltor functions
var gains = 0;
var losses = 0;


function addgainclick() {
    console.log(gains);
    gains += 1;
    console.log(gains);
    document.getElementById('tradwoncount').innerHTML = gains;
    localStorage.setItem("tradewoncount", gains);
};

function minusgainclick() {
    clickminus -= 1;
    document.getElementById('tradewoncount').innerHTML = gains;
    localStorage.setItem("tradewonbtndown", gains);
};

function addlossclick() {
    clickaddone += 1;
    document.getElementById('tradelosscount').innerHTML = losses;
    localStorage.setItem("tradelossbtnup", losses);
};

function minuslossclick() {
    clickminusone += 1;
    document.getElementById('tradelosscount').innerHTML = losses;
    localStorage.setItem("tradelossbtndown", losses);
};

addgainbtn.addEventListener('click', addgainclick()
{
    alert('efafsa')
});
console.log (gains)

