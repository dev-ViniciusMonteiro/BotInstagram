 var contadorloop = 0 , loops = 0

var next = document.querySelector('a.coreSpriteRightPaginationArrow')

function doLike(){
    const like_btn = document.querySelector('article > div.eo2As > section.ltpMr.Slqrh > span.fr66n > button')

    if(like_btn){
        like_btn.click();
        contadorloop++;
        console.log(contadorloop + ' Foi curtido;' 
                    + ` ${loops} ciclos` );
    }
    next.click()
}

function loop(){
    setTimeout(()=>{
        doLike();
        if(contadorloop<=50){ 
            loop();
        }else{
            if(contadorloop>=51){
                setTimeout(()=>{
                    console.log(`Cerca de 50 curtidas foram dadas. TOTAL CURTIDAS: ${contadorloop}`)
                    console.log('Zerando o contador.')
                    loops++;
                    contadorloop = 0;
                    console.log(`Contador zerado: ${contadorloop}.`)
                    loop()
                },500000)
            }else{
                console.log('Erro - 100,101: saiu do loop()')
            }
        }
    },15000)
    
}

loop()

