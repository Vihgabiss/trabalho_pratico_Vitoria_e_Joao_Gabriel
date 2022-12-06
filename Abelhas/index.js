const imagesUrl = [
    "../IMG/abelha-1.jpg",
    "../IMG/abelha-2.jpg",
    "../IMG/abelha-3.jpg",
    "../IMG/abelha-4.jpg",
    "../IMG/abelha-5.jpg",
    
]


function init(){
    
    const container = document.querySelector('#barras');
    imagesUrl.forEach((e, i)=>{
        
        let element = document.createElement('div');
        element.addEventListener('click', (()=>{
            const imagemAtivaContainer = document.querySelector('#imageAtiva');

            imagemAtivaContainer.setAttribute('src', imagesUrl[i])
        }))
        element.innerText = ''
        element.setAttribute('class', 'bar')

       container.appendChild(element)
    })

}
init()