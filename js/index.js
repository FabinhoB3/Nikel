//const nome = "Fabio"; // const = Constante não pode ser trocado o valor
//let nome2 = "Chaves"; // let = Variavel pode ser trocado o valor
let pessoaDefault = {
    nome: "Fabio Chaves",
    idade: "33",
    trabalho: "Estudante"
};
let nomes = ["Fabio", "Maria", "Pedro"];

let pesssoasListaVazia = []

let pessoas = [
    {
    nome: "Fabio Chaves",
    idade: "33",
    trabalho: "Estudante"
    },
    {
    nome: "Maria",
    idade: "22",
    trabalho: "Estudante"
    },
    {
    nome: "Pedro",
    idade: "22",
    trabalho: "Estudante"
    }
    
]


//function alterarnome(){
 //   nome2 = "Maria Silva";
 //   console.log("Valor alterado por função:");
//console.log(nome2);
//}
//function receberEalteraNome(novoNome){
  //  nome2 = novoNome;
 //   console.log("Valor alterado recebendo um nome: ");
//    console.log(nome2);

//}
//function imprimirPessoa(pessoa){
   // console.log("Nome:");
  //  console.log(pessoa.nome);
  //  console.log("Idade:");
  //  console.log(pessoa.idade);
  //  console.log("Trabalho:");
   // console.log(pessoa.trabalho);

//}
console.log(pessoas);


function adicionarPessoas(pessoa){
    pessoas.push(pessoa);
};

function imprimirPessoas(){
    pessoas.forEach((item) =>{
        console.log("Nome:");
        console.log(item.nome);
        console.log("Idade:");
        console.log(item.idade);
        console.log("Trabalho:");
        console.log(item.trabalho);
    } )
}
adicionarPessoas(
    {
        nome: "Raul",
        idade: "25",
        trabalho: "Gerente"
    }
);
imprimirPessoas();


//console.log(nomes);
//console.log(nomes[1]);
//console.log(pessoas);
//console.log("Dados Pessoa 0: ",pessoas[0].nome,pessoas[0].idade,pessoas[0].trabalho);
//imprimirPessoa(pessoaDefault);
//imprimirPessoa(
 //   {
 //       nome:"Maria Silva",
 //       idade:"26",
 //       trabalho:"UX/UI"
//    }
//)
//alterarnome();
//receberEalteraNome("Joao Silva Pereira");
//receberEalteraNome("Joao");

