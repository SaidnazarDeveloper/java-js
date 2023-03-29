// let a = document.querySelector("input");
// let b = document.querySelector("button");

// b.onclick =()=> {
//     if(a.value==1234){
//         alert("siz parolni to`g`ri kiritdingiz");
//         b.style.color="green";
//         b.style.marginTop="100px";
//     }else{
//         alert("siz xato parol kiritdingiz")
//     };
    

// }


let word = document.querySelectorAll("h2")
let btn = document.querySelector("button")

btn.onclick = () => {
    for(let i =0; i <= word.length - 1; i++){
        word[i].style.color="red"
        word[i].style.textAlign="center"

    }
    

}



