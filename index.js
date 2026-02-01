
var input = document.querySelector("input");
input.addEventListener("change",changeHandaler);

function changeHandaler(e){
    // console.log(e);
    // console.log(e.type);
    // console.log(e.target);
    // console.log(e.target.className);
    // console.log(e.target.id);
    console.log(e.target.value);

}

var email = document.querySelector("input");
email.addEventListener("change",emailHandale);


console.clear();

const checked = document.querySelectorAll("input[name=programm]");
console.log(checked);

Array.from(checked).map((programm)=>{
    programm.addEventListener("change",programmHand);
});

function programmHand(e){
    if(e.target.checked){
        // console.log(checked);
        console.log(e.target.value);
    };
};

const department = document.querySelector("#Department");
console.log(department);

department.addEventListener("change",handleDepartment);

function handleDepartment(e){
    // console.log(seleted);
    console.log(e.target.value);
}