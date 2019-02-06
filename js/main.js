$(document).ready(function () {
    $('#metodoPago').on('change', function () {
        $('.formulario').hide();
        $('#' + this.value).show();
    });

    /* $('#metodoPago').change(function(){
        $('.pagarModal').hide();
        $('select option:selected').each(function(){
            var metodo = "";
            metodo = $(this).val();
            if(metodo !== "paypal"){
                console.log("o");
                $('.pagarModal').show();
            }
        });
        
    }) */


    $('input[type="submit"]').click(function (e) {
        let precio = "";
        var producto = $('input[name="packFiesta"]:checked').val();

        switch (producto) {
            case 'bronce':
                precio = "99";
                $('#productoCarrito').replaceWith('<h6 class="my-0" id="productoCarrito">Has seleccionado el pack fiesta ' + producto + '.</h6>');
                $('#descProducto').replaceWith('<div id="descProducto"><ul class="list-unstyled mt-3 mb-4"><li>PACK DE ALTAVOCES</li><li>REPRODUCTOR</li></ul></div>');
                $('.precioCarrito').replaceWith('<strong class="precioCarrito">' + precio + ' €</strong>');
                $('#opcionesPaypal > option[value="Pack Bronce"]').attr('selected', 'selected');
                $('.pagar').removeAttr("disabled");
                break;
            case 'plata':
                precio = "199";
                $('#productoCarrito').replaceWith('<h6 class="my-0" id="productoCarrito">Has seleccionado el pack fiesta ' + producto + '.</h6>');
                $('#descProducto').replaceWith('<div id="descProducto"><ul class="list-unstyled mt-3 mb-4"><li>PACK DE ALTAVOCES</li><li>REPRODUCTOR</li><li>EFECTOS DE ILUMINACIÓN</li></ul></div>');
                $('.precioCarrito').replaceWith('<strong class="precioCarrito">' + precio + ' €</strong>');
                $('#opcionesPaypal > option[value="Pack Plata"]').attr('selected', 'selected');
                $('.pagar').removeAttr("disabled");
                break;
            case 'oro':
                precio = "380";
                $('#productoCarrito').replaceWith('<h6 class="my-0" id="productoCarrito">Has seleccionado el pack fiesta ' + producto + '.</h6>');
                $('#descProducto').replaceWith('<div id="descProducto"><ul class="list-unstyled mt-3 mb-4"><li>PACK DE ALTAVOCES</li><li>REPRODUCTOR DJ</li><li>EFECTOS DE ILUMINACIÓN</li><li>MÁQUINA DE HUMO</li></ul></div>');
                $('.precioCarrito').replaceWith('<strong class="precioCarrito">' + precio + ' €</strong>');
                $('#opcionesPaypal > option[value="Pack Oro"]').attr('selected', 'selected');
                $('.pagar').removeAttr("disabled");
                break;
        }
        e.preventDefault();
    });
});