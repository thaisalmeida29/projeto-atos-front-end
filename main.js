document.getElementById('formulario').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('tabela-dados').classList.remove('d-none');
    envioTabela();
});

const termosAceiteElement = document.getElementById('i-termos-aceite')

termosAceiteElement.addEventListener('scroll', () => {
    if (termosAceiteElement.offsetHeight + termosAceiteElement.scrollTop >= termosAceiteElement.scrollHeight) {
        document.getElementById("i-aceite").disabled = false;
    }
})

document.getElementById('i-nome').addEventListener('keyup', gerarLogin);
document.getElementById('i-sobrenome').addEventListener('keyup', gerarLogin);

function gerarLogin() {
    const nome = document.getElementById('i-nome').value;
    const sobrenome = document.getElementById('i-sobrenome').value;
    const login = nome + '.' + sobrenome;
    document.getElementById('i-login').value = login.toLowerCase();
}

function pesquisacep() {
    var cep = document.getElementById('i-cep').value.replace(/\D/g, '');

    if (cep != "") {

        var validacep = /^[0-9]{8}$/;

        if (validacep.test(cep)) {
            const url = 'https://viacep.com.br/ws/' + cep + '/json/';
            fetch(url)
                .then(response => response.json())
                .then(json => {
                    if (json.logradouro) {
                        document.getElementById('i-endereco').value = json.logradouro;
                        document.getElementById('i-bairro').value = json.logradouro;
                        document.getElementById('i-cidade').value = json.localidade;
                        document.getElementById('i-estado').value = json.uf;
                        document.getElementById('i-complemento').value = json.complemento;
                    } else {
                        alert("CEP NÃO ENCONTRADO")
                    }
                })
        } else {
            alert("CEP INVÁLIDO")
        }
    }
}

function envioTabela() {
    //Copiando os valores para a tabela
    document.getElementById('nome').innerHTML = document.getElementById('i-nome').value;
    document.getElementById('sobrenome').innerHTML = document.getElementById('i-sobrenome').value;
    document.getElementById('email').innerHTML = document.getElementById('i-email').value;
    document.getElementById('login').innerHTML = document.getElementById('i-login').value;
    document.getElementById('senha').innerHTML = document.getElementById('i-senha').value;
    document.getElementById('cep').innerHTML = document.getElementById('i-cep').value;
    document.getElementById('endereco').innerHTML = document.getElementById('i-endereco').value;
    document.getElementById('complemento').innerHTML = document.getElementById('i-complemento').value;
    document.getElementById('bairro').innerHTML = document.getElementById('i-bairro').value;
    document.getElementById('cidade').innerHTML = document.getElementById('i-cidade').value;
    document.getElementById('estado').innerHTML = document.getElementById('i-estado').value;

    document.getElementById('perfil').innerHTML = document.getElementById('i-perfil').value;

    var iAcademia = document.getElementById("i-academia");
    document.getElementById('academia').innerHTML = iAcademia.options[iAcademia.selectedIndex].text;

    var iProfessor = document.getElementById("i-professor");
    document.getElementById('professor').innerHTML = iProfessor.options[iProfessor.selectedIndex].text;

    document.getElementById('aceite').innerHTML = document.getElementById('i-aceite').value == "on" ? 'Sim' : 'Não'
    document.getElementById('novidades').innerHTML = document.querySelector('input[name=novidade]:checked') == "on" ? 'Sim' : 'Não'
};
