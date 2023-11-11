const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();

// Database connection details
const dbPath = 'test.db'; // Replace with your SQLite database file path

// Read JSON data
const jsonData = fs.readFileSync('../assets/cities.json');
const data = JSON.parse(jsonData);

// Create a connection to the SQLite database
const db = new sqlite3.Database(dbPath);



function capitalizeCityName(cityName) {
    return cityName.toLowerCase().replace(/(?:^|\s)\S/g, function (char) {
        return char.toUpperCase();
    });
}



// Iterate through the data and insert into the table
data.forEach(record => {
    const [cityName, provinceCode] = record;
    const formattedCityName = capitalizeCityName(cityName);
    const getProvinceNameQuery = `SELECT provinceName FROM PROVINCE WHERE provinceCode = ?`;
    
    db.get(getProvinceNameQuery, [provinceCode], (error, row) => {
        if (error) throw error;

        if (row) {
            const provinceName = row.provinceName;
            
            // Insert into the CITY table
            const insertCityQuery = `INSERT INTO CITY (cityName, provinceName, provinceCode) VALUES (?, ?, ?)`;
            db.run(insertCityQuery, [formattedCityName, provinceName, provinceCode], function (error) {
                if (error) throw error;
                console.log(`Inserted: ${cityName}, ${provinceName}, ${provinceCode}`);
            });
        } else {
            console.log(`ProvinceCode not found for ${provinceName}`);
        }
    });
});

// Close the database connection
db.close();


