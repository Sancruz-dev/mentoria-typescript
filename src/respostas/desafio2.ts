interface Iprofissao  {
  profissao: 'Atriz' | 'Padeiro'
}

interface employeeInfo extends Iprofissao {
  nome: string
  idade: number
}

let pessoa1: employeeInfo = {
  nome: "Maria",
  idade: 29,
  profissao: "Atriz"
}

let pessoa2: employeeInfo = {
  nome: "Roberto",
  idade: 19,
  profissao: "Padeiro"
}

let pessoa3: employeeInfo = {
  nome: "Laura",
  idade: 32,
  profissao: "Atriz"
}

let pessoa4: employeeInfo = {
  nome: "Carlos",
  idade: 19,
  profissao: "Padeiro"
}

console.log(pessoa3.profissao)
