let updateinitialbtn = document.querySelector('#initialamtbtn');
storedinitial = JSON.parse(window.localStorage.getItem('storedinitial'));
document.getElementById('statsinitial').innerHTML = storedinitial;

let curramtbtn = document.querySelector('#curramtbtn');
storedcurr = JSON.parse(window.localStorage.getItem('storedcurr'));
document.getElementById('statscurr').innerHTML = storedcurr;

let storedpnl = parseInt(storedcurr) - parseInt(storedinitial);
document.getElementById('PNL').innerHTML = storedcurr;

storedcurr = JSON.parse(window.localStorage.getItem('storedpnl'));
document.getElementById('PNL').innerHTML = storedpnl;


updateinitialbtn.addEventListener('click', function () {
    let updateinitial = document.querySelector('#initialamounttext').value;
    console.log(updateinitial);
    document.getElementById('statsinitial').innerHTML = updateinitial;
    localStorage.setItem("storedinitial", updateinitial);
    location.reload();
});

curramtbtn.addEventListener('click', function () {
    let updateinitial = document.querySelector('#curramounttext').value;
    console.log(updateinitial);
    document.getElementById('statscurr').innerHTML = updateinitial;
    localStorage.setItem("storedcurr", updateinitial);
    location.reload();
});


