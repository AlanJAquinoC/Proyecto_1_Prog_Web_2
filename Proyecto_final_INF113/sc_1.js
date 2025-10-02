function calcularPrecio(){
    var a=document.getElementById("precio").value;
    var b=document.getElementById("cantidad").value;
    var s=parseInt(a)*parseInt(b);
    alert("El precio final es: "+s);
    return (0);
}
