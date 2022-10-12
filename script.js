let students = [
    {
        name: "Maria",
        noteOne: 6.9,
        noteTwo: 9,
    },
    {
        name: "Pedro",
        noteOne: 2,
        noteTwo: 8.4,
    },
    {
        name: "Jonatan",
        noteOne: 8,
        noteTwo: 6,
    },
    {
        name: "Camila",
        noteOne: 4.8,
        noteTwo: 9.9,
    },
]

for(student of students){
    let average = (student.noteOne + student.noteTwo) / 2
    if(average >= 7){
        alert(`A média do(a) aluno(a) ${student.name} é: ${average}\n Parabéns ${student.name} você foi aprovado(a) no concurso!`)
    }else{
        alert(`A média do(a) aluno(a) ${student.name} é: ${average}\n Não foi dessa vez, ${student.name}! Tente novamente!`)
    }
}