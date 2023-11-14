// const { ipcRenderer } = require('electron');

window.addEventListener('load', function () {
    showTab(1);
});

function showTab(num) {
    // set default clicked and content
    const allTabs = document.querySelectorAll('.tab');
    allTabs.forEach(tab => tab.classList.remove('selected'));
    const clickedTab = document.querySelector(`.tab:nth-child(${num})`);
    clickedTab.classList.add('selected');
    // choose HTML
    let tabContent;
    if (num==1) {
    tabContent = "../page/client.html"
    } else if (num==2) {
    tabContent = "../page/transaction.html"
    } else {
    tabContent = "../page/history.html"
    }
    fetch(tabContent)
        .then(response => response.text())
        .then(data => {
        document.getElementById("content").innerHTML = data
        console.log('client tab is clicked');
        })
        .catch(error => console.error('Error fetching ' + tabContent + ":", error));
}

function search() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    if (!firstName && !lastName) {
        window.alert("Last name or first name is required!")
    } else {
        console.log('FIRSTNAME: ' + firstName +'& LASTNAME:' + lastName);
        window.electron.ipcRenderer.send('search-client', { firstName, lastName });
    }
    
}

function clearFields() {
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    console.log("CLEAR WORKS!");
}
