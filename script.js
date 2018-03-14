
var secret = new Audio('secret.mp3');

function diffImage(img)
{


    //when not clicked leave as zelda, else change to sheik and play sound
    if(img.src.match(/blank/))
        img.src = "zelda_p.jpg";
    else
        img.src = "sheik_p.jpg";
        secret.play();
        secret = null
}