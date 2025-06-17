document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const nickname = document.getElementById('nickname').value;
    const messageRaw = document.getElementById('message').value;
    const messageHTML = messageRaw.replace(/\n/g, '<br>');

    emailjs.send("service_lybqj5r", "template_9f3y2i7", {
        nickname: nickname,
        message: messageHTML
    })
        .then(function () {
            alert("Thank you for your message!");
            document.getElementById('contact-form').reset();
        }, function (error) {
            alert("There was an error: " + JSON.stringify(error));
        });
});
