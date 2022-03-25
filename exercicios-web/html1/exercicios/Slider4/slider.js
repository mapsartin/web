// ----Primeiro-----

// function slide1(){
//     document.getElementById('id').src="images/slider-01.jpg";
//     setTimeout("slide2()", 1000)
//     }
    
//     function slide2(){
//     document.getElementById('id').src="images/slider-02.jpg";
//     setTimeout("slide3()", 1000)
//     }
    
//     function slide3(){
//     document.getElementById('id').src="images/slider-03.jpg";
//     setTimeout("slide1()", 1000)
//     }

//----- Segundo ----- Link??

// function slide1(){
//     document.getElementById('id').src="images/slider-01.jpg";
//     setTimeout("slide2()", 3000)
//     document.getElementById('aId').href="link1.html"
//     }
    
//     function slide2(){
//     document.getElementById('id').src="images/slider-02.jpg";
//     setTimeout("slide3()", 3000)
//     document.getElementById('aId').href="link2.html"
//     }
    
//     function slide3(){
//     document.getElementById('id').src="images/slider-03.jpg";
//     setTimeout("slide1()", 3000)
//     document.getElementById('aId').href="link3.html"
//     }


//----- Terceiro -----


array1 = new Array ("images/slider-01.jpg", "images/slider-02.jpg", "images/slider-03.jpg")

function comeco(){
document.getElementById('imgId').src = array1[0]
document.form.texto.value="0"
}

function mais(){
document.form.texto.value = Math.floor (1+ 1 - 2 + (document.form.texto.value) * 1 + 1)
if (document.form.texto.value > 2)
{document.form.texto.value = 0}
}

function menos(){
document.form.texto.value = Math.floor (1+ 1 - 2 + (document.form.texto.value) * 1 -1)
if (document.form.texto.value < 0)
{document.form.texto.value = 2}
}

function regular(){
document.getElementById('imgId').src = array1[document.form.texto.value];
setTimeout("regular()", 1)
}
