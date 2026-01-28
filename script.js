
// para colocar função de valor nos botões

function insertToDisplay (data){
   document.querySelector('#display').value += data
}

// para limpar oq foi digitado

function clean(){
    document.querySelector('#display').value = ''
}

// para voltar no que estava antes, apagar um por um

function back(){
    const display = document.querySelector('#display') 
    display.value = display.value.slice(0, -1)
}

function result(){
     const display = document.querySelector('#display') 
     try{
        display.value = eval(display.value)
    } catch{
        display.value = 'Error'

     }
}