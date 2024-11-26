const mainContainer = document.getElementById('main');

function showTopic (element) {
    let topicName = element.getAttribute("value");
    
    mainContainer.innerHTML = PSUC[topicName];
    console.log(topicName)
}