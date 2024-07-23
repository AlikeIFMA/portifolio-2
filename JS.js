function atualizarmenu(){
    if (document.getElementsById('menuresponsivo').checked == true) {
        (document.getElementsById('menu').style.borderBottomRightRadius = '0');
        (document.getElementsById('menu').style.borderBottomLeftRadius = '0');
        (document.getElementsById('texto').style.borderBottomRightRadius = '0');
        (document.getElementsById('texto').style.borderBottomLeftRadius = '0');

    }else{
        (document.getElementsById('menu').style.borderRadius = '3px');
    }
}