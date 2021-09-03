function readUrl() {
    
    var url = document.getElementById("memeUploader").value;
    
    alert("Image dropped");
    // alert(url);

    // document.getElementById('memeImage').src = url;


    var input = document.getElementById("memeUploader");
    console.log(input);

    var fReader = new FileReader();
    fReader.readAsDataURL(input.files[0]);
    
    fReader.onloadend = function(event){
        var img = document.getElementById("memeImage");
        img.src = event.target.result;
    }

  

}

// (Not done yet)
function generateMeme(){
    
    const scale = 2;
    const domNode = document.getElementById('theUserMeme');

    var checkBox = document.getElementById("TandCs");

    var options = {
        quality: 1,
    };
    

    if (checkBox.checked == true){

        // alert("Sounds good checkbox is working well");


        
        domtoimage.toBlob(document.getElementById('theUserMeme'), {
            width: domNode.clientWidth * scale,
            height: domNode.clientHeight * scale,
            style: {
            transform: 'scale('+scale+')',
            transformOrigin: 'top left'
        }})
        .then(function () {
            
            domtoimage.toBlob(document.getElementById('theUserMeme'), {
                width: domNode.clientWidth * scale,
                height: domNode.clientHeight * scale,
                style: {
                transform: 'scale('+scale+')',
                transformOrigin: 'top left'
            }}).then(function(blob){

                window.saveAs(blob, 'meme.jpeg');
            })

            

            
        });

        

    }
    else{

        alert("You MUST agree with the terms and conditions");
    }

    

    
}


function changeMemeText(){

    var textEntered = document.getElementById("memeChanger").value;

    document.getElementById("memeWords").innerHTML = textEntered; 

}

function changeFontSize(){

    var textEntered = document.getElementById("fontSizeController").value;

    // alert(textEntered);

    document.getElementById("memeWords").style.fontSize = textEntered + "px";

}

function alignLeft(){

    // alert("text is aligned to the left hand side");
    document.getElementById("memeWords").style.textAlign = "left";

}

function alignMiddle(){

    // alert("text is aligned to the left hand side");
    document.getElementById("memeWords").style.textAlign = "center";

}

function alignRight(){

    // alert("text is aligned to the right hand side");
    document.getElementById("memeWords").style.textAlign = "right";

}

