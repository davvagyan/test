export const required = value => {
    if(value){

        return undefined
    }
    return 'Field is required'
}

export const requiredSymbol = value => {
    if(value[0]!=="#"){

        return 'First Symbol Must Be #  '
    }
    return undefined
}

 export const length = value=>{
     if(value.length!==4 && value.length!==7){
         return "it must be 3 or 6 symbols"
     }
     return undefined
 }



let lettersreg = /[g-zG-Z]/;
export const letters = value => {
    let check = value.match(lettersreg)
    if(check){
        console.log(check)
        return 'enter letters from a-f'
    }else{
        return undefined
    }

}

