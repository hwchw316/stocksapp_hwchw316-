let updateinitialbtn = document.querySelector('#initialamtbtn');
storedinitial = JSON.parse(window.localStorage.getItem('storedinitial'));
// document.getElementById('statsinitial').innerHTML = '$' +storedinitial;
document.getElementById('statsinitial').innerHTML = '$' +thousands_separators(storedinitial);

let curramtbtn = document.querySelector('#curramtbtn');
storedcurr = JSON.parse(window.localStorage.getItem('storedcurr'));
// document.getElementById('statscurr').innerHTML = '$' + storedcurr;
document.getElementById('statscurr').innerHTML = '$' +thousands_separators(storedcurr);

let storedpnl =  parseInt(storedcurr) - parseInt(storedinitial);
// document.getElementById('PNL').innerHTML = '$' + storedpnl;
document.getElementById('PNL').innerHTML = '$' +thousands_separators(storedpnl);


let storedperchange = Math.round( (parseInt(storedcurr) - parseInt(storedinitial)) / parseInt(storedinitial) * 100 * 100 ) /100  ;
storedperchange = thousands_separators(storedperchange) + '%' ;
document.getElementById('perchange').innerHTML = storedperchange;


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

/// conditional color change

if (storedpnl >= 0) {
    document.getElementById("PNL").style.color = '#228B22'
}

else {
    document.getElementById("PNL").style.color = "red";
}
/// strange... style.backgroundColor works but not style.color
// green #228B22
// red '#DC143C'

///function thousand seperator
function thousands_separators(num)
  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }
