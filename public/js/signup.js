$('button').on('click', () => {
    Swal.fire({
        icon: 'success',
        title: 'Utilizador criado com sucesso',
        text: 'Vai ser reencaminhado para a página de login',
        timer: 3000
    })
});