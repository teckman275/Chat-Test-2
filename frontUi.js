let messages = []

function updateMessages(data){
    messages = data;
    updateText();
}

function updateText(){
    
    //clear screen
    const element = document.getElementById("messageContainer"); //get messages section
    while(element.hasChildNodes()){
        element.removeChild(element.firstElementChild);
    }

    //rebuild screen
    messages.forEach( (i) => {
        const newTextElement = document.createElement("p");
        const newText = document.createTextNode(i);
        newTextElement.appendChild(newText);
        element.appendChild(newTextElement);
    });
}

function sendMsg(){
    const inputBox = document.getElementById("textBox");
    let msg = inputBox.value;

    if(msg != ""){
        inputBox.value = "";

        sendToServer(msg);

        updateText();
    }

}

document.addEventListener('keypress', (event)=>{

    // event.keyCode or event.which  property will have the code of the pressed key
    let keyCode = event.keyCode ? event.keyCode : event.which;

    // 13 points the enter key
    if(keyCode === 13) {
      // call click function of the buttonn 
      sendMsg();
    }
      
  });