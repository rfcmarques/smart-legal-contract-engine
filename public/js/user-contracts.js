$(document).ready(function () {
    $('#contracts').DataTable();
});

$('#refreshtable').click(()=>{
    $('#contracts').DataTable().search('').draw();
})

stateType = (state) => {
    switch (state) {
        case "Terminado":
            $('#contracts').DataTable().search('Terminado').draw();

            break;
        case "Por assinar":
            $('#contracts').DataTable().search('Por assinar').draw();

            break;
        case "Em curso":
            $('#contracts').DataTable().search('Em curso').draw();
            
            break;
        case "Obrigação emitida":
            $('#contracts').DataTable().search('Obrigação emitida').draw();

            break;
        default:
            $('#contracts').DataTable();
            break;
    }
}