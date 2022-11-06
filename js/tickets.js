var entradas = 200;
const descuentoEstudiante = 0.8;
const descuentoTrainee = 0.5;
const descuentoJunior = 0.15;


function calcular()
{
    cantidad = document.getElementById("cantidad").value;
    var select = document.getElementById("categoria");
    var valorSel = select.options[select.selectedIndex].value;

    result = 0;

    switch (valorSel = parseInt(valorSel)) 
    {
        case 1:
            result = (cantidad*entradas) - ((cantidad*entradas)*descuentoEstudiante);
            break;
        case 2:
            result = (cantidad*entradas) - ((cantidad*entradas)* descuentoTrainee);
            break;
        case 3:
            result = (cantidad*entradas) - ((cantidad*entradas)* descuentoJunior);
            break;
        case 0:
            result = (cantidad*entradas);
            break;
    

    }

    document.getElementById("total").value = result;

    
    

}