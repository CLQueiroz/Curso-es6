"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Exercício 1
// classe pai
var Usuario =
/*#__PURE__*/
function () {
  function Usuario(email, senha) {
    _classCallCheck(this, Usuario);

    this.email = '';
    this.senha = '';
  }

  _createClass(Usuario, [{
    key: "isAdmin",
    value: function isAdmin() {
      return this.admin;
    }
  }]);

  return Usuario;
}(); // classe filha


var Admin =
/*#__PURE__*/
function (_Usuario) {
  _inherits(Admin, _Usuario);

  function Admin() {
    var _this;

    _classCallCheck(this, Admin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Admin).call(this));
    _this.admin = true;
    return _this;
  }

  return Admin;
}(Usuario);

var User1 = new Usuario('email@teste.com', 'senha123');
var Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()); // false

console.log(Adm1.isAdmin()); // true

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
