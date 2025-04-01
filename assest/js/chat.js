document.addEventListener("DOMContentLoaded", function () {
    const chatButton = document.getElementById("chatButton");
    // console.log("jijij");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 200) { 
            chatButton.style.visibility = "visible"; 
        } else {
            chatButton.style.visibility = "hidden"; 
        }
    });
});



let chatButton = document.getElementById("chatButton");
let chatBox = document.getElementById("chatBox");
chatButton.addEventListener("click", function (event) {
    chatBox.style.display = "block";
    chatButton.style.display = "none";
    event.stopPropagation(); 
});
let sendBtn = document.getElementById("sendBtn");
let chatBody1 = document.getElementById("chatBody1");
let chatBody2 = document.getElementById("chatBody2");
sendBtn.addEventListener("click", function () {
    chatBody1.style.display = "none";
    chatBody2.style.display = "block";
});
document.addEventListener('click', function(event) {
    if (chatBox.style.display === 'block') { 
      if (!chatBox.contains(event.target) && event.target !== chatButton) {
        chatBox.style.display = 'none';
        chatButton.style.display = 'flex';
      }
    }
});


