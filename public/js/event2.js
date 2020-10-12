
function Opennew(obj){
    let subnav = document.querySelector(obj.subnav),
        btnList = subnav.querySelectorAll(obj.rules[0]),
        scRightList = subnav.querySelectorAll(obj.rules[1]);
        scRightList[0].classList.add('open');
        btnList[0].classList.add('btn-more');
  btnList.forEach((btn,index) => {
    btn.addEventListener('click', ()=> {
        for(let i = 0; i < scRightList.length; i++) {
            scRightList[i].classList.remove('open');
        }
        for(let i = 0; i < btnList.length; i++) {
            btnList[i].classList.remove('btn-more');
        }
        btn.classList.add('btn-more');
       scRightList[index].classList.add('open');
    })
  });
}
Opennew.isBtn = function (selected){
    return selected;
}
Opennew.isContent = (selected)=> {
    return selected;
}
// function inputChecked() {
//     let searchMobile = document.querySelector(".nav_seacrh-mobile"),
//         afterForm = document.querySelector(".search_form-layout");
//     if(input.checked == false) {
//         console.log(afterForm.after);
//     }
// }
/* thử làm khi click vào thì tạo ra div chèn vào đó 
có nghia là lúc đầu chỉ có 1 div ở trong và tạo ra div khác chèn vào đó
 */