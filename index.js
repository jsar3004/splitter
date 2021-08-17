
function evaluat(dis)
{ 
    let x=document.getElementById('noofpeople').value;
    if(x=='0')
    {
        var erro = !!document.getElementById("err");
       if(!erro)
       {
       document.getElementById("people").innerHTML+=' <p class="error white font" id="err">Cant be 0</p>';
       }
    }
    else
    {
        var erro = !!document.getElementById("err");
        if(erro)
        {
            erro=document.getElementById("err");
        erro.remove();
        }
       var bill=document.getElementById("bill").value;
    //  console.log((dis*bill)/100);
     var cal=(dis*bill)/(100*x);
     document.getElementById("tap").innerHTML="$"+(Math.round(cal * 100) / 100).toFixed(2);
     var an=(parseFloat(bill)+(parseFloat(cal)*x)) /x;
     console.log(bill);
     console.log(cal);
     console.log(bill+cal);
     document.getElementById("tp2").innerHTML="$"+(Math.round(an * 100) / 100).toFixed(2);
    }
    // console.log(dis);
    // console.log(x);
}
function reset(){
    document.getElementById('noofpeople').value="";
    document.getElementById("tap").innerHTML="$0.00";
    document.getElementById("tp2").innerHTML="$0.00";
    document.getElementById("bill").value="";
}