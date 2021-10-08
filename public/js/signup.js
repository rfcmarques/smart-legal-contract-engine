$('button').on('click', () => {
    if ($('#password').val() === $('#repeatPassword').val()) {
        Swal.fire({
            icon: 'success',
            title: 'Utilizador criado com sucesso',
            text: 'Vai ser reencaminhado para a página de login',
            timer: 3000
        })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Erro',
            text: 'As passwords não coincidem',
            timer: 3000
        }).then(()=>{
            window.location.reload();
        })
    }
});