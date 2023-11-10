fetch("./clients_client.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("content").innerHTML = data
    })
    .catch(error => console.error('Error fetching clients_client.html: ', error));

function showTab(num) {
    // set default clicked and content
    const allTabs = document.querySelectorAll('.tab');
    allTabs.forEach(tab => tab.classList.remove('selected'));
    const clickedTab = document.querySelector(`.tab:nth-child(${num})`);
    clickedTab.classList.add('selected');
    // choose HTML
    let tabContent;
    if (num==1) {
    tabContent = "./clients_client.html"
    } else if (num==2) {
    tabContent = "./clients_transaction.html"
    } else {
    tabContent = "./clients_history.html"
    }
    fetch(tabContent)
        .then(response => response.text())
        .then(data => {
        document.getElementById("content").innerHTML = data
        })
        .catch(error => console.error('Error fetching ' + tabContent + ":", error));
}
function search() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    console.log("SEARCHING WORK!");
}

function clearFields() {
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    console.log("CLEAR WORKS!");
}