// Example 1

// const express = require('express');

// const app = express();

// app.get('*', (req, res) => {
//     res.send('Hello World!');
// });

// app.listen(5015, () => {
//     console.log('Server is running at http://localhost:5015');
// });

// Example 2
// const express = require('express');

// const app = express();

// app.get('/', (req, res) => {
//     res.send(`
//         <html>
//         <body>
//             <h1>Home Page</h1>
//         </body>
//     </html>
//     `);
// });

// app.get('/about-us', (req, res) => {
//     res.send(`
//         <html>
//         <body>
//             <h1>About Us</h1>
//         </body>
//     </html>
//     `);
// });

// app.get('*', (req, res) => {
//     res.send('Hello World!');
// });

// app.listen(5015, () => {
//     console.log('Server is running at http://localhost:5015');
// });


// Example 3

const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.send(`
        <html>
        <body>
            <h1>HomePage</h1>
        </body>
        </html>
    `);
});

app.get('/about-us', (req, res) => {
    res.send(`
        <html>
        <body>
            <h1>About Us</h1>
        </body>
        </html>
    `);
});

app.get('/api/products', (req, res) => {
    const products = [{
        id: 1,
        name: 'Product 1',
    }, {
        id: 2,
        name: 'Product 2',
    }, {
        id: 3,
        name: 'Product 3',
    }]
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(products));
});


app.get('*', (req, res) => {
    res.send('Hello World -- Chapala!');
});

app.listen(5015, () => {
    console.log('Server is running at http://localhost:5015');
});

