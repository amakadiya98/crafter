document.getElementById('menuBtn').addEventListener('click', () => {

    let ariaExpanded = document.getElementById('menuBtn').getAttribute('aria-expanded')
    let bodyTag = document.getElementsByTagName("BODY")[0]
    if(ariaExpanded == "true"){
        bodyTag.style.overflow = "hidden";
    }else{
        bodyTag.style.overflow = "";
    }


})
