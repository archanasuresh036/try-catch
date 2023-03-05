
let btn = document.getElementById('btn')
btn.addEventListener('click',function(){
    try{
        let value = document.getElementById('inputValue').value
        if(value=='') throw 'Age cannot be blank!!'
        if(isNaN(value)) throw "Age should be a number"
        if(value<18) throw 'Age should be above 18'
        console.log(value)
    }catch (error){
        alert(error)
    }
    finally{
        console.log('I run nomatter what happens above')
    }
    
})