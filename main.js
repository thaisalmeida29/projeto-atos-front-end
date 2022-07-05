document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('tabela-dados').classList.remove('d-none');
    envioTabela();
});

document.getElementById('i-nome').addEventListener('keyup', gerarLogin);
document.getElementById('i-sobrenome').addEventListener('keyup', gerarLogin);

function gerarLogin() {
    const nome = document.getElementById('i-nome').value;
    const sobrenome = document.getElementById('i-sobrenome').value;
    const login = nome + '.' + sobrenome;
    document.getElementById('i-login').value = login.toLowerCase();
}



async function pesquisacep() {

    //Nova variável "cep" somente com dígitos.

    var cep = document.getElementById('i-cep').value.replace(/\D/g, '');
    console.log(cep)

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if (validacep.test(cep)) {

            document.getElementById('i-endereco').value = "...";
            document.getElementById('i-bairro').value = "...";
            document.getElementById('i-cidade').value = "...";
            document.getElementById('i-estado').value = "...";


            //Sincroniza com o callback.
            const url = 'https://viacep.com.br/ws/' + cep + '/json/';
            fetch(url)
            .then(response => response.json())
            .then(json => {
                console.log(json)

                if (json.logradouro) {
                    document.querySelector('input[name=rua]').value = json.logradouro;
                    document.querySelector('input[name=bairro]').value = json.bairro;
                    document.querySelector('input[name=cidade]').value = json.localidade;
                    document.querySelector('input[name=estado]').value = json.uf;
                } else {
                    alert("CEP Inválido, digite outro")
                }
            })
            console.log(response)
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
    document.getElementById('academia').innerHTML = document.getElementById('i-academia').value;
    document.getElementById('professor').innerHTML = document.getElementById('i-professor').value;

    document.getElementById('aceite').innerHTML = document.getElementById('i-aceite').value.replace('on', 'Sim');
    document.getElementById('novidades').innerHTML = document.querySelector('input[name=novidade]:checked').value;



};