function verificarLogin() {
    var login = document.getElementById('inputLogin').value;
    var senha = document.getElementById('inputPassword').value;
    var informar = document.getElementById('informar');

    if (login == 'aluno') {
        if (senha == '1234') {
            informar.innerHTML = '<span style="color: green;">Pode acessar o sistema<span>';
        }
        else {
            informar.innerHTML = '<span style="color: red;">A senha não corresponde ao usuário<span>';
        }
    } else {
        informar.innerHTML = '<span style="color: red;">Não pode acessar o sistema! Login incorreto.<span>';
    }
    return false;
}