
 var contadorloop = 0
 function deslike(){
    document.querySelectorAll('._8A5w5').forEach((item, index)=>{
        console.log(index)
            
                if(item.innerText == 'Seguindo')
                {
                    item.click();
                } 
            
    })
}


    deslike();
