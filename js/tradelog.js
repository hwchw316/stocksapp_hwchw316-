let logbtn = document.querySelector('#logbtn');

logbtn.addEventListener('click', function () {
    let logid = document.querySelector('#logid').value;
    let logsymbol = document.querySelector('#logsymbol').value;
    let logqty = document.querySelector('#logqty').value;
    let logpricein = document.querySelector('#logpricein').value;
    let logpriceout = document.querySelector('#logpriceout').value;
    let logfees = document.querySelector('#logfees').value;



    if (logid && logsymbol && logqty && logpricein && logpriceout && logfees) {
        let mylogdata = 
        [localStorage.setItem("refno", logid),
        localStorage.setItem("symbol", logsymbol),
        localStorage.setItem('quantity', logqty),
        localStorage.setItem('priceIn',logpricein),
        localStorage.setItem("priceOut", logpriceout),
        localStorage.setItem("fees", logfees)]
        // location.reload();
    };
});

for (let i = 0; i < localStorage.length; i++ ){
    const refno = localStorage.logid(i);
    // const symbol = localStorage.logsymbol(i);
    // const quantity = localStorage.logqty(i);
    // const pricein = localStorage.logpricein(i);
    // const priceOut = localStorage.logpriceout(i);
    // const fees = localStorage.logfees(i);
    logoutput.innerHTML += '${refno} <br/>';
}
// logbtn.onclick = function(){
//     alert('test');
//     console.log(logid);
// }






    // if (logid && logsymbol && logqty && logpricein && logpriceout && logfees){
    //     localStorage.setItem (logidlog,symbol,logqty,logpricein,logpriceout,logfees)