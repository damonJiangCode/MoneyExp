// clients.js

window.addEventListener('load', function () {
    showTab(1);
});

var firstName, lastName;

function showTab(num) {
    // set default clicked and content
    const allTabs = document.querySelectorAll('.tab');
    allTabs.forEach(tab => tab.classList.remove('selected'));
    const clickedTab = document.querySelector(`.tab:nth-child(${num})`);
    clickedTab.classList.add('selected');
   
    let src;
    if (num == 1) {
        src = '../page/client.html';
    } else if (num == 2) {
        src = '../page/transaction.html';
    } else if (num == 3) {
        src = '../page/history.html';
    } else {
        console.error('Failed to load tab number contents.');
    }
    
    const iframeContainer = document.getElementById('content');

    // Check if there is already an iframe present
    const existingIframe = iframeContainer.querySelector('iframe');
    
    // If an iframe is already present, remove it
    if (existingIframe) {
        iframeContainer.removeChild(existingIframe);
    }

    const iframe = document.createElement('iframe');
    iframe.src = src; 
    iframe.width = '400';
    iframe.height = '300';

    iframeContainer.appendChild(iframe);


    // Wait for the iframe to load
// iframe.onload = function() {
//     // Access the contentDocument of the iframe
//     const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

//     // Access the div inside the iframe and change its text
//     const targetDiv = iframeDocument.getElementById('lastName');
//     if (targetDiv) {
//         targetDiv.innerText = lastName;
//     } else {
//         console.error('Div not found inside the iframe');
//     }
// };
}

function search() {

    firstName = document.getElementById('firstName').value;
    lastName = document.getElementById('lastName').value;

    if (!firstName && !lastName) {
        window.alert("Last name or first name is required!");
    } else {
        const nameSet = {'firstName': firstName, 'lastName': lastName};
        console.log(nameSet);
        window.electronAPI.clientSearch(nameSet);
    }
    
}

function clearFields() {
    // document.getElementById('firstName').value = '';
    // document.getElementById('lastName').value = '';
    // console.log("CLEAR WORKS!");
//     console.log('CLEAR FILEDS CALLED')
//     window.electronAPI.get( (event, value) => {
//         return console.log(value)
//     })
// 
}

// Function to update the iframe content
function updateIframeContent() {
    // Access the contentDocument of the iframe
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

    // Access the div inside the iframe and change its text
    const targetDiv = iframeDocument.getElementById('lastName');
    if (targetDiv) {
        targetDiv.innerText = lastName;
    } else {
        console.error('Div not found inside the iframe');
    }

    // Reload the iframe to apply the changes
    iframe.src = iframe.src;
}

// Attach the onload event to the iframe
iframe.onload = function() {
    // Call the update function when the iframe is loaded
    updateIframeContent();
};