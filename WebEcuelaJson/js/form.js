const $$form = function () {
  this.addUser = function () {
      const Submit = function () {

          try {
              let Fd = new FormData();
              Fd.append("accion", "ADDUSUARIO");
              Fd.append("Nombre", nombre.value);
              Fd.append("Mail", mail.value);
              Fd.append("Dni", dni.value);

              const res = Post(Fd);
              if (res !== "OK") alert(res);
              $f.addUser();
          }
        
          catch (e) { alert(e); }
          return false;
        
      
      };
      const ListUsuarios = function () {
          let fd = new FormData();
          fd.append("accion", "LISTUSUARIOS");
          const res = Post(fd);
          let list
          try {
              list = JSON.parse(res);

          }
          catch (e) { alert(e); }

          listTitles = ["ID", "Nombre", "DNI", "Mail"];
          $dt.table(listTitles, list);
          return;
      };

    $ds.clearSection("main");
    const f = $dc.form("Agregar Usuario", "Agregar");
    const nombre = $dc.addInputForm("text", "Nombre", "name-user");
    const dni = $dc.addInputForm("number", "DNI", "dni-user");
    const mail = $dc.addInputForm("email", "Mail", "mail-user");
   
      f.onsubmit = Submit;
    ListUsuarios();
    
    };

  this.modifyUser = function (user) {

        const submit = function () {
            try {
                let Fd = new FormData();
                Fd.append("accion", "MODIFYUSER");
                Fd.append("ID", user.ID);
                Fd.append("Nombre", nombre.value);
                Fd.append("Mail", mail.value);
                Fd.append("Dni", dni.value);
                let res = Post(Fd);
                if (res !== "OK") alert(res);
                $f.addUser();
            }
            catch (e) { alert(e); }
            return false;
        }
        $ds.clearSection("main");
        const f = $dc.form("Modificar Usuario", "Modificar");
        const nombre = $dc.addInputForm("text", "Nombre", "name-user");
        const dni = $dc.addInputForm("number", "DNI", "dni-user");
        const mail = $dc.addInputForm("email", "Mail", "mail-user");

        nombre.value = user.Nombre;
        dni.value = user.Dni;
        mail.value = user.Mail;

        f.onsubmit = submit;

    }

  this.findUser = function () {
        const Submit = function () {
            try {
                let Fd = new FormData();
                Fd.append("accion", "FINDUSUARIO");
                Fd.append("ID", ID.value);
                const res = Post(Fd);

                let user;
                try {
                    user = JSON.parse(res);
                    $f.modifyUser(user);
                }
                catch (e) { alert(res); }
                return false;
            }
            catch (e) { alert(e); }
            return false;
        }
        $ds.clearSection("main");
        const f = $dc.form("Buscar Usuario", "Buscar");
        const ID = $dc.addInputForm("number", "ID", "id-user");
        f.onsubmit = Submit;
    }

    this.addCarrera = function () {
        const Submit = function () {
            try {
                let Fd = new FormData();
                Fd.append("accion", "ADDCARRERA");
                Fd.append("Nombre", nombre.value);
                Fd.append("Duracion", duracion.value);
                Fd.append("Sigla", sigla.value);
                Fd.append("Titulo", titulo.value);

                const res = Post(Fd);
                if (res !== "OK") alert(res);
                $f.addCarrera();
            } catch (e) {
                alert(e);
            }
            return false;
        };

        const ListCarreras = function () {
            let fd = new FormData();
            fd.append("accion", "LISTCARRERA");
            const res = Post(fd);
            let list;
            try {
                list = JSON.parse(res);
            } catch (e) {
                alert(e);
            }

            listTitles = ["ID", "Nombre", "Duración", "Sigla", "Título"];
            $dtCarreras.table(listTitles, list);
            return;
        };

        $ds.clearSection("main");
        const f = $dc.form("Agregar Carrera", "Agregar");
        const nombre = $dc.addInputForm("text", "Nombre", "name-career");
        const duracion = $dc.addInputForm("number", "Duración", "duration-career");
        const sigla = $dc.addInputForm("text", "Sigla", "sigla-career");
        const titulo = $dc.addInputForm("text", "Título", "title-career");

        f.onsubmit = Submit;
        ListCarreras();
    };

    this.modifyCarrera = function (carrera) {
        const Submit = function () {
            try {
                let Fd = new FormData();
                Fd.append("accion", "MODIFYCARRERA");
                Fd.append("ID", carrera.ID);
                Fd.append("Nombre", nombre.value);
                Fd.append("Duracion", duracion.value);
                Fd.append("Sigla", sigla.value);
                Fd.append("Titulo", titulo.value);

                let res = Post(Fd);
                if (res !== "OK") alert(res);
                $f.addCarrera();
            } catch (e) {
                alert(e);
            }
            return false;
        };

        $ds.clearSection("main");
        const f = $dc.form("Modificar Carrera", "Modificar");
        const nombre = $dc.addInputForm("text", "Nombre", "name-career");
        const duracion = $dc.addInputForm("number", "Duración (años)", "duration-career");
        const sigla = $dc.addInputForm("text", "Sigla", "sigla-career");
        const titulo = $dc.addInputForm("text", "Título", "title-career");

        nombre.value = carrera.Nombre;
        duracion.value = carrera.Duracion;
        sigla.value = carrera.Sigla;
        titulo.value = carrera.Titulo;

        f.onsubmit = Submit;
    };

    this.findCarrera = function () {
        const Submit = function () {
            try {
                let Fd = new FormData();
                Fd.append("accion", "FINDCARRERA");
                Fd.append("ID", ID.value);

                const res = Post(Fd);
                let carrera;
                try {
                    carrera = JSON.parse(res);
                    $f.modifyCarrera(carrera);
                } catch (e) {
                    alert(res);
                }
                return false;
            } catch (e) {
                alert(e);
            }
            return false;
        };

        $ds.clearSection("main");
        const f = $dc.form("Buscar Carrera", "Buscar");
        const ID = $dc.addInputForm("number", "ID", "id-career");
        f.onsubmit = Submit;
    };
        
        
};

const $f = new $$form();


