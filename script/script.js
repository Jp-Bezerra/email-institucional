const nome = window.document.querySelector('input#inome')
const matricula = window.document.querySelector('input#imatricula')
const telefone = window.document.querySelector('input#itelefone')
const email = window.document.querySelector('input#iemail')

function cadastrar(){
    const aluno = {
        nome: nome.value,
        matricula: matricula.value,
        telefone: telefone.value,
        email: email.value
    }

    const json = JSON.stringify(aluno)
}