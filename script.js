//declarando data
/*

let data = new Date()
document.write(data)
document.wirte("<br> <br>")

let data = new Date().getDate()
document.write(data)

document.write("<br> <br>")

let data1 =new Date().getDate()
document.write(('0' + data1).slice(0-2));
document.write("<br> <br>")

//pega o mes 
let data = new Date().getMonth()+1
document.write(data)
document.write("<br> <br>")


//pega o ano
let data = new Date().getFullYear()
document.write(data)
document.write("<br> <br>")

//pega dia da semana
let data = new Date()
let diasSemana =['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado' ]
document.write(diasSemana[data.getDay()])
*/
//Formatação completa de data

let data = new Date()
let dia =('0' +data.getDate()).slice(0-2)
let mes = data.getMonth()
let meses = ['Janeiro', 'Fevereiro', 'Março','Abril', 'Maio', 'Junho','Julho', 'agosto', 'Setembro', 'outubro', 'Novembro', 'Dezembro'] 

let ano = data.getFullYear()
document.write(dia + ' de ' +meses[mes]+ ' de '+ano);