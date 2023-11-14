// ipcHandlers.js

function handleClientSearch(event, data) {
    const { firstName, lastName } = data;
    console.log('Received data from renderer process: (FIRST NAME: ', firstName, '; LAST NAME: ', lastName, ')');
}

module.exports = {
    handleClientSearch
};