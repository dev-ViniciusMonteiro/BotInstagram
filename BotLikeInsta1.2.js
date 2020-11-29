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
        if(loops>=11){
            console.log('Cerca de 10 loops foram feitos. Reinicie seu BOT')
            return 0
        }
        if(contadorloop<=50){ 
            loop();
        }else{
            if(contadorloop>=51){
                console.log('pausa de alguns segundos...')
                next.click()
                setTimeout(()=>{
                    next.click()
                    console.log(`Cerca de 50 curtidas foram dadas. TOTAL CURTIDAS: ${contadorloop}`)
                    console.log('Zerando o contador.')
                    loops++;
                    contadorloop = 0;
                    console.log(`Contador zerado: ${contadorloop}.`)
                    loop()
                },150000)
                setTimeout(()=>{
                    next.click()
                },150000)
            }else{
                console.log('Erro - 100,101: saiu do loop()')
            }
        }
    },15000)
    
}

console.log('INICIANDO BOT')
loop()

