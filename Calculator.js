function insert(num)
{
    const number = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = number + num;
}
function clean()
{
    document.getElementById('result').innerHTML = "";
}
function calcular()
{
    const result = document.getElementById('result').innerHTML;
    if(result)
    {
        document.getElementById('result').innerHTML = eval(result);
    }
    else
    {
        document.getElementById('result').innerHTML = "digite algo..."
        setTimeout(function() {clean()}, 900);
        
    }
}