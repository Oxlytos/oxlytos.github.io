var base;
function loadingSpinner(){
    //Laddar in sidan med en spinner
    base=setTimeout(showPage, 1000);
}

function showPage(){
    //Ladda in sidan
    document.getElementById("loader").style.display="none";
    document.getElementById("pageContent").style.display="block";
}