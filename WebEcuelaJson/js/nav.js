const $$Nav = function () {

    this.init = () => {
        $ds.nav("body"); // Esto deber�a a�adir la barra de navegaci�n al body
        $dn.makeButton("Inicio", $ds.home);
        $dn.makeButtonLogin("Ingresar"); // Esto crea el bot�n de login
        $dn.makeDropDown("Funciones",
            ["abm usuario", "Buscar Usuario", "abm carrera", "Buscar Carrera"],
            [$f.addUser, $f.findUser, $f.addCarrera, $f.findCarrera]);
    }

}

const $nav = new $$Nav();
