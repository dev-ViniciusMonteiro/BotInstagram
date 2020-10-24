let contador = 0
let arr = document.querySelectorAll('.L3NKy')
arr.forEach((value, index) => {
    setTimeout(()=>{
        if(!value.classList.contains('_8A5w5')){
            value.click();
            contador++
            console.log('seguiu '+contador+'pessoas')
        }else{
            console.log('tentativa de seguir usuario ja seguido')
        }
    }, index*10000)
})