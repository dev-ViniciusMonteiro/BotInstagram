
 var contadorloop = 0
 function deslike(){
    document.querySelectorAll('._8A5w5').forEach((item, index)=>{
            setTimeout(()=>{
                if(item.innerText == 'Seguindo')
                {
                    item.click();
                    setTimeout(()=>{
                    document.querySelectorAll('.-Cab_').forEach((item,index)=>{
                        if(item.innerText == 'Deixar de seguir'){
                            item.click()
                            contadorloop ++
                            console.log('deixou de seguir' + contadorloop)
                        }
                    })
                }, index*20000)
                } 
            }, index*15000)
    })
}

