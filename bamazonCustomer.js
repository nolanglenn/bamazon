const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'G73bCi29*',
    database: 'bamazon'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    displayInventory();
});


function displayInventory () {
    console.log(`Current Bamazon inventory...
==========================================
    `);

    connection.query("SELECT * FROM products",
        function (err, res) {
            if (err) throw err;
            // Log all results of the SELECT statement
            // console.log(res);
            for(var i = 0; i < res.length; i++){
                console.log(`ID: ${res[i].id} | Product: ${res[i].product_name} | Price: ${res[i].price}`)};
            start();
        });
}

function start() {
    inquirer
    .prompt([
        { 
        type: 'input',
        name: 'purchaseId',
        message: 'What is the ID of the item you would like to purchase?',
        },
        {
        type: 'input',
        name: 'quantity',
        message: 'How many units of the product do you want to pruchase?'
        }])
    .then(answers => {
        if (answers.options === 'POST') {
            userPost();
        }
    });
}


