
function validate()
{
    var c=0;
    var val = document.getElementById("txtmobile").value;
    if(/^[6-9][0-9]{9}$/.test(val))
    {
       c++;
    }
    var val = document.getElementById("txtrollno").value;
    if(/^[2][2][1][7][1][0][3][0-9]{2}[0-9][0-9][0-9]$/.test(val))
    {
        c++;
    }
    var val = document.getElementById("txtemail").value;
    if(/^[a-zA-Z0-9._-]{6,12}[@][a-z]{3,15}[.][a-z]{2,6}$/.test(val))
    {
        c++;
    }
    var uname=document.getElementById("txtusername").value;
    if(/^[A-Z][a-zA-Z]{4,8}$/.test(uname))
    {
        c++;               
    }
    if(c==4)
    {
        window.alert('Valid');
    }
    else
    {
        window.alert('Invalid');
    }
}
