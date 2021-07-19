const form = document.getElementById('form')

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    let nome= document.getElementById('Name').value;
    let email= document.getElementById('E-mail').value;
    let data ={
        nome,
        email,
    }
    let convertData = JSON.stringify(data);
    
    localStorage.setItem('lead', convertData)
    
    let content = document.getElementById('content')
    let carregando = `<p>carregando...</p>`
    let pronto = `<p>pronto</p>`

    content.innerHTML = carregando;

    setTimeout(() =>{
        content.innerHTML = pronto;
    }, 1000

    )


})