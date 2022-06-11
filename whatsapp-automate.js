function createDialogTR() {
    const trMessenger = document.createElement('div', '');
    const body = document.body;
    trMessenger.classList.add('trMessenger');
    trMessenger.style = "position: relative;z-index: 200;top: 0;left: 0;height: 100%;background: #1a2622a1;opacity: 100%;display: flex;justify-content: center;align-items: center;"
    body.appendChild(trMessenger);

    const trDialog = document.createElement('div', '');
    trDialog.style = "height: 50vh;width: 50vh;background: #22322d;box-shadow: 1px 1px 9px 6px #121212";
    trMessenger.appendChild(trDialog);

    const trDialogHeader = document.createElement('div', '');
    trDialogHeader.style = "height: 15%;background: #1c1c1c;display: flex;justify-content: space-between;"
    trDialog.appendChild(trDialogHeader);

    const trDialogHeaderTitle = document.createElement('p', '');
    trDialogHeaderTitle.innerHTML += "Messages";
    trDialogHeaderTitle.style = "font-size: 120%;padding: 5% 5%;";
    trDialogHeader.appendChild(trDialogHeaderTitle);

    // Close Dialog Button
    trDialogHeader.innerHTML += "<span onclick=\"closeDialogTR()\" id=\"closeDialogTR\" data-testid=\"x-viewer\" data-icon=\"x-viewer\"  style=\"padding: 5% 5%;cursor: pointer;\"><svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" ><path fill=\"currentColor\" d=\"m19.8 5.8-1.6-1.6-6.2 6.2-6.2-6.2-1.6 1.6 6.2 6.2-6.2 6.2 1.6 1.6 6.2-6.2 6.2 6.2 1.6-1.6-6.2-6.2 6.2-6.2z\"></path></svg></span>";

    const dialogTRBody = document.createElement('div', '');
    dialogTRBody.classList.add("dialogTRContainer");
    dialogTRBody.style = "height: 80%;width: 100%;display: flex;justify-content: center;align-items: center;flex-direction: column;";
    trDialog.appendChild(dialogTRBody);

    const limitLabel = document.createElement('label', '');
    limitLabel.innerHTML += "Limit";
    limitLabel.style = "margin-right: 55%;margin-bottom: 10px;font-size: 25px;";
    dialogTRBody.appendChild(limitLabel);

    const limitInput = document.createElement('input', '');
    limitInput.type = "text";
    limitInput.style = "background: #7a7a7a;border: 0;border-radius: 5px;height: 35px;width: 244px;color: white;font-size:20px;";
    dialogTRBody.appendChild(limitInput);

    const msgLabel = document.createElement('label', '');
    msgLabel.innerHTML += "Message";
    msgLabel.style = "margin-right: 47%;margin-top: 10px;font-size: 25px;";
    dialogTRBody.appendChild(msgLabel);

    const msgInput = document.createElement('input', '');
    msgInput.type = "text";
    msgInput.style = "margin-top: 3%;background: #7a7a7a;border: 0;border-radius: 5px;height: 35px;width: 244px;color: white;font-size:20px;";
    dialogTRBody.appendChild(msgInput);

    const sendBtn = document.createElement('button', '');
    sendBtn.style = "font-size: 22px;margin-top: 20px;border-radius: 7px;cursor: pointer;color: #fff;background: #199b63;border: 0;padding: 10px 22px;";
    sendBtn.innerHTML += "Send";
    dialogTRBody.appendChild(sendBtn);

    sendBtn.onclick = function () {
        sendMessages(msgInput.value.split(","), limitInput.value)
    }
}
createDialogTR()
function closeDialogTR() {
    document.getElementsByClassName("trMessenger")[0].remove()
}

function random_item(items) {
    return items[Math.floor(Math.random() * items.length)];
}

function sendMessages(messages, totalMessages) {
    // const messages = ["Message1", "Message2", "Message3"];
    // const totalMessages = 10;
    closeDialogTR();
    const msgboxPlaceHolder = document.querySelectorAll("div._2vbn4")[1];
    const msgboxContainer = document.querySelectorAll("div._1UWac._1LbR4")[0];
    const msgbox = document.querySelectorAll("div._13NKt.copyable-text.selectable-text")[1];

    let i = 0;
    const timeOut = setInterval(function (){
        let sendMsgBtn = document.querySelector("button.tvf2evcx.oq44ahr5.lb5m6g5c.svlsagor.p2rjqpw5.epia9gcq");
        if(sendMsgBtn == null){
            msgboxPlaceHolder.style = "visibility: hidden";
            msgboxContainer.focus();
            msgbox.focus();
            msgbox.innerHTML += random_item(messages);
            // it will add text to active textfield
            // Without it text cannot be send
            const textToActiveField = ' ';
            document.execCommand('insertText', false, textToActiveField)
        }else{
            sendMsgBtn.click(); 
            i++;
        }
        if(i== totalMessages){
            clearInterval(timeOut)
        }
    }, 500)
}
