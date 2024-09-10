// function onClickImage(imageSrc){
//     let img = document.getElementById("display");
//     let imagsrc = document.getElementById("display-img");
//     img.style.display = "block";
//     imagsrc.src = imageSrc;

// }

function disappear(){
    modal = document.getElementById("display");
    img = document.getElementById("dis-img");
    modal.style.display = "none";
}

function expand(imageId){
    var image = document.getElementById(imageId);
    destination = document.getElementById("dis-img");
    modal = document.getElementById("display");
    // destination.display = "block";
    modal.style.display = "block";
    destination.src = image.src;
    destination.width = image.width*1.5;
    destination.height = image.height*1.5;
    // var image = document.getElementById(imageId);
    
    // image.width = image.width*1.5;
}

