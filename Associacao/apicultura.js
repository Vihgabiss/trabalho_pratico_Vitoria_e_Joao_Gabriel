const imagesUrl = [
    "../IMG/apicultor_1.avif",
    "../IMG/apicultor_2.avif",
    "../IMG/apicultor_3.avif",
    "../IMG/apicultor_4.avif",
    "../IMG/apicultor_5.avif",
    
]


function init(){
    
    const container = document.querySelector('#barras1');
    imagesUrl.forEach((e, i)=>{
        
        let element = document.createElement('div');
        element.addEventListener('click', (()=>{
            const imagemAtivaContainer = document.querySelector('#imageAtiva1');

            imagemAtivaContainer.setAttribute('src', imagesUrl[i])
        }))
        element.innerText = ''
        element.setAttribute('class', 'bar')

       container.appendChild(element)
    })

}
init()