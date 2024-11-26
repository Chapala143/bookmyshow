const fs = require('fs');
// Example 1
// console.log(fs);


const demoFileData = fs.readFileSync('./demo.txt');
// Example 2
// console.log(demoFileData);
// Example 3
// console.log(demoFileData.toString());


// Example 4
// fs.appendFileSync('./demo.txt', '-- By Chirag Goel');
// const demoFileUpdatedData = fs.readFileSync('./demo.txt');
// console.log(demoFileUpdatedData.toString());

// Example 5
// console.log(fs.mkdirSync('dummy'));

// Example 6
// fs.writeFileSync('./index.html', `
//     <html>
//         <body>
//             <h1>Demo Html Page</h1>
//         </body>
//     </html>
//     `);




