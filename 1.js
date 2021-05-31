// var count;
// function counter(){
//     for (count = 0; count<10 ; count++){
//     return(
        
//         document.getElementById("result").innerHTML=count+1
//     );}
// }

const form = document.querySelector("submitForm");
form.addEventListener('submit',runEvent);
function runEvent(e){
    console.log(e.type);
}
let student = {code: 101, firstName: razie, lastName: jafari};
let code = student.code;

let {code,firstName}=student;
[
    {"code":101,"firstName":razie, "lastName":jafari}
]