function btnSearch(){
    var x = document.getElementById('search-box');
     if(x.style.opacity == '1'){
        x.style.opacity= '0';
        x.style.transition = ".2s";
        x.style.top = "100px";
    }
    else{
    x.style.opacity = '1';
    x.style.top = "40px";
    x.style.transition = ".2s";
    }
}

window.addEventListener('scroll',() =>{
        var btn = document.getElementById('theScroll');
        const scrolled = window.scrollY;
        if(scrolled > 500){
            btn.style.display = 'block';
        }
        else{
            btn.style.display = 'none';
        }
        btn.addEventListener('click', function(){
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        })
        var fixed = document.getElementById('row'),
            header = document.querySelector(".header-first");
        if(scrolled > 30) {
            fixed.classList.add('fixed');
        }
        else{fixed.classList.remove('fixed');}     
    
})
/*
click vào button thì hiển thị div tương ứng với nó
và buton 1 sẽ được hiển thị trc
*/







