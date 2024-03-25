let programacao = ['Heloa', 'Maria Rafaela', 'Maria Eduarda', 'Diego', 'João Victor', 'Gabriel', 'Luana', 'Thauanne', 'Aline', 'Lucas']

let funcionarios = ['Leonardo', 'Miguel', 'João Paulo', 'Rafael']
funcionarios.pop();
programacao.push('Rafael');

console.log('Time de programação:', programacao );
console.log('---------------------------------------------------------')
console.log('Time de segurança:', funcionarios);
 
let empresa = programacao.concat (funcionarios);
console.log(empresa)