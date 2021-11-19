function calculaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${
    this.idade + anos
  } anos de idade.`;
}

const firstPerson = {
  nome: "Alexandre",
  idade: 27,
};

const secondPerson = {
  nome: "Lucas",
  idade: 33,
};

console.log(calculaIdade.apply(firstPerson, [15]));
console.log(calculaIdade.call(secondPerson, 13));