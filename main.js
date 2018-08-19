// Exercício 1
// classe pai
class Usuario{
    constructor(email,senha){
        this.email = '';
        this.senha = '';
    }
    isAdmin(){
        return this.admin;
    }
}
// classe filha
class Admin extends Usuario{
    constructor(){
        super();
        this.admin = true;
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true














/*
// Object Short Syntax  sintaxe curta de objeto
const nome = 'Caique';
const idade = 23;

const usuario = {
    nome,
    idade,
    empresa: 'Rockeseat',
};

console.log(usuario);*/







/*
// Templates literais

const nome = 'Caique';
const idade = 24;


// console.log('Meu nome é : ' + nome + ' e tenho ' + idade + ' anos');

console.log(`Meu nome é ${nome} e tenho ${idade} anos.`); */



/*
// spread

const usuario1 = {
    nome: 'Caique',
    idade:24,
    empresa:'RockeSeat',
};

const usuario2 = {...usuario1,nome:'Lucas'};

console.log(usuario2); */



/*const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1,...arr2];


console.log(arr3);*/

// REST

/*function soma(...params){
    return params.reduce((total,next) => total + next); 
}

console.log(soma(1,3,4)); */


/* array
const arr = [1,2,3,4];

const [a,b,...c] = arr;

console.log(a);
console.log(b);
console.log(c); */







// pegar o resto da propriedade

/*const usuario = {
    nome:'Caique',
    idade:'24',
    empresa:'TecnoloJS'

};

const {nome, ... resto} = usuario;

console.log(nome);
console.log(resto);*/



/* desestruturação
const usuario = {
    nome: 'Caique Queiroz',
    idade: 23,
    endereco:{
        cidade:'São paulo',
        estado: "SP",
    },
}

const {nome, idade, endereco: {cidade}} = usuario;

console.log(nome);
console.log(idade);
console.log(cidade); */


/* valores padrão em parametros
 const  soma=(a = 3,b=6) => a + b;


console.log(soma(1));
console.log(soma());*/


/* arrow functions

const arr = [1,3,4,5,6];

const  newArr = arr.map(item =>  item * 2);

console.log(newArr);


const teste = () => [1,2,3]
    

console.log(teste()); */




/* const arr = [1,3,4,5,8,10];

const newArr = arr.map(function(item,index){
    return item + index;
});

console.log(newArr);

const sum = arr.reduce(function(total,next){
    return total + next;
});

console.log(sum);

const filter = arr.filter(function(item){
    return item % 2 === 0;
});

console.log(filter);

const find = arr.find(function(item){
    return item === 14;
});

console.log(find);*/

/* function teste(x){
    let y = 2;

    if(x > 5){
        let y = 4;

        console.log(x,y);
    }
}

teste(10); */



/* const usuario = {nome:'Caique'};

usuario.nome = 'Aline';

console.log(usuario); */


/* class List {
    constructor(){
        this.data= [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}
class TodoList extends List{
    constructor(){
         super();

         this.usuario = 'Caique';

        }

        mostraUsuario(){
            console.log(this.usuario);
        }
    }

var MinhaLista = new TodoList(); // instancia class

document.getElementById('novotudo').onclick = function(){
    MinhaLista.add('Novo Todo');
}

MinhaLista.mostraUsuario();*/