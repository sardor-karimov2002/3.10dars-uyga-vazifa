var formEl=document.querySelector('.form')
var inputEl=document.querySelector('.input')
var the_resultEl=document.querySelector('.the_result')

var juft=document.querySelector('.couple_son')
var toq=document.querySelector('.ninety')


var couple_sonEL=[]
var ninetyEl=[]

formEl.addEventListener('submit',evt=>{
    evt.preventDefault()
    var inputElValue=inputEl.value ;
    if(inputElValue%2==0){
        couple_sonEL.push(inputElValue)
        console.log(couple_sonEL)
        juft.innerHTML=couple_sonEL
        the_resultEl.textContent="Bu juft son"
        return
    }
    if(inputElValue%2==1){
        ninetyEl.push(inputElValue)
        console.log(ninetyEl)
        toq.innerHTML=ninetyEl
        the_resultEl.textContent="Bu toq son"
        return
     }
})
console.log(couple_sonEL);
console.log(ninetyEl);