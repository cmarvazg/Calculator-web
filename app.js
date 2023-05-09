/*
 * Diccionario:
 * CF = Costo Fijo
 * CVU = Costo Variable Unitario
 * GF = Gastos Fijos
 * GV = Gastos Variables
 * PU = Precio Unitario
 * UV = Unidades Vendidas
 * UB = Utilidad Bruta
 */
   // El primer script calcula el punto de equilibrio de la siguiente forma:
   // CF / (PU - CVU)
    function puntoEquilibrio()
    {
        //Se inicializan las variables con los parametros que digitó el usuario
        var costoFijo = document.getElementById("costoFijo").value;
        var precioUnitario = document.getElementById("precioUnitario01").value;
        var costVarUni = document.getElementById("costVarUni").value;
        //Se hace el cálculo de el punto de equilibrio
        var var01 = parseFloat(precioUnitario) - parseFloat(costVarUni);
        var var02 = parseFloat(costoFijo) / parseFloat(var01);
        var var03 = parseInt(var02);
        //Se presenta el resultado
        alert("El punto de equilibrio se alcanza vendidendo " + var03 + " prouctos.");
    }

    //El segundo script calcula la utilidad bruta de la siguiente forma:
    //PU * UV
    function utilidadBruta()
    {
        //Se inicializan las variables con los parametros que digitó el usuario
        var precio = document.getElementById("precioUnitario02").value;
        var unidadesVendidas = document.getElementById("unidadesVendidas").value;
        //Se hace el cálculo de la utilidad bruta
        var utilidadBruta = parseFloat(precio) * parseInt(unidadesVendidas);
        //Se presenta el resultado
        alert("Si se venden " + unidadesVendidas + " productos la utilidad bruta será de $" + utilidadBruta);
    }

    //El tercer script calcula la utilidad neta de la siguiente forma:
    //UB  - (GF + GV)
    function utilidadNeta()
    {
        //Se inicializan las variables con los parametros que digitó el usuario
        var utilidadBruta = document.getElementById("utilidadBruta").value;
        var gastosFijos = document.getElementById("gastosFijos").value;
        var gastosVariables = document.getElementById("gastosVariables").value;
        //Se hace el cálculo de la utilidad neta
        var var01 = parseFloat(gastosFijos) + parseFloat(gastosVariables);
        var utilidadNeta = parseFloat(utilidadBruta) - parseFloat(var01);
        //Se presenta el resultado
        alert("La utilidad neta será de $" + utilidadNeta);
    }

