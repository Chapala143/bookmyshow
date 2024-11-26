// Example 1
// const http = require('http');

// const server = http.createServer((req, res) =>{
//     res.write('Hello World');
//     res.end();
// });

// server.listen(5010, () => {
//     console.log('Server is running on http://localhost:5010');
// });


// Example 2
// const http = require('http');

// const server = http.createServer((req, res) =>{
//     if (req.url === '/') {
//         res.write('Hello World');
//         res.end();
//     }

//     if (req.url === '/contact-us') {
//         res.write('Contact Us');
//         res.end();
//     }

//     if (req.url === '/about-us') {
//         res.write('About Us');
//         res.end();
//     }
    
// });

// server.listen(5010, () => {
//     console.log('Server is running on http://localhost:5010');
// });


// Example 3
// const http = require('http');

// const server = http.createServer((req, res) =>{
//     if (req.url === '/') {
//         res.write('<html><body><h1>Hello World</h1></body></html>');
//         res.end();
//     }

//     if (req.url === '/contact-us') {
//         res.write('<html><body><h1>Contact Us</h1></body></html>');
//         res.end();
//     }

//     if (req.url === '/about-us') {
//         res.write('<html><body><h1>About Us</h1></body></html>');
//         res.end();
//     }
    
// });

// server.listen(5010, () => {
//     console.log('Server is running on http://localhost:5010');
// });


// Example 4
// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.write('<html><body><h1>Hello World!</h1></body></html>');
//         res.end();
//     }

//     if (req.url === '/about-us') {
//         res.write('<html><body><h1>About Us!</h1></body></html>');
//         res.end();
//     }

//     if (req.url === '/contact-us') {
//         res.write('<html><body><h1>Contact Us!</h1></body></html>');
//         res.end();
//     }

//     if (req.url === '/api/products') {
//         const products = [{
//             id: 1,
//             name: 'Product 1',
//         }, {
//             id: 2,
//             name: 'Product 2',
//         }, {
//             id: 3,
//             name: 'Product 3',
//         }]
//        //    res.write(products);
//        // This site can't be reached.
//        res.write(products.toString());
//        res.end();
            
//     }
    
// });

// server.listen(5010, () => {
//     console.log('Server is running on http://localhost:5010');
// });

// Example 5
// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.write('<html><body><h1>Hello World!</h1></body></html>');
//         res.end();
//     }

//     if (req.url === '/about-us') {
//         res.write('<html><body><h1>About Us!</h1></body></html>');
//         res.end();
//     }

//     if (req.url === '/contact-us') {
//         res.write('<html><body><h1>Contact Us!</h1></body></html>');
//         res.end();
//     }

//     if (req.url === '/api/products') {
//         const products = [{
//             id: 1,
//             name: 'Product 1',
//         }, {
//             id: 2,
//             name: 'Product 2',
//         }, {
//             id: 3,
//             name: 'Product 3',
//         }]
//        res.setHeader('Content-Type', 'application/json');
//        res.write(JSON.stringify(products));
//        res.end();
            
//     }
    
// });

// server.listen(5010, () => {
//     console.log('Server is running on http://localhost:5010');
// });



// Example 6
// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.write('<html><body><h1>Hello World!</h1></body></html>');
//         res.end();
//     }

//     if (req.url === '/about-us') {
//         res.write('<html><body><h1>About Us!</h1></body></html>');
//         res.end();
//     }

//     if (req.url === '/contact-us') {
//         res.write('<html><body><h1>Contact Us!</h1></body></html>');
//         res.end();
//     }

//     if (req.url === '/api/products') {
//         const products = [{
//             id: 1,
//             name: 'Product 1',
//         }, {
//             id: 2,
//             name: 'Product 2',
//         }, {
//             id: 3,
//             name: 'Product 3',
//         }]
//         res.setHeader('Content-Type', 'application/json');
//         try {
//             res.end(products);
//         } catch(e) {
//             res.end('Something went wrong!');
//         }        
//     }
    
// });

// server.listen(5010, () => {
//     console.log('Server is running on http://localhost:5010');
// });

// Example 7
// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.write('<html><body><h1>Hello World!</h1></body></html>');
//         res.end();
//     }

//     if (req.url === '/about-us') {
//         res.write('<html><body><h1>About Us!</h1></body></html>');
//         res.end();
//     }

//     if (req.url === '/contact-us') {
//         res.write('<html><body><h1>Contact Us!</h1></body></html>');
//         res.end();
//     }

//     if (req.url === '/api/products') {
//         const products = [{
//             id: 1,
//             name: 'Product 1',
//         }, {
//             id: 2,
//             name: 'Product 2',
//         }, {
//             id: 3,
//             name: 'Product 3',
//         }]
//         res.setHeader('Content-Type', 'application/json');
//         try {
//             res.end(products);
//             // above line is wrong therfore catch block is executed.
//             // status code 500 is observed in the Header.
//         } catch(e) {
//             res.statusCode = 500;
//             res.end('Something went wrong!');
//         }        
//     }
    
// });

// server.listen(5010, () => {
//     console.log('Server is running on http://localhost:5010');
// });



// Example 8.
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<html><body><h1>Hello World!</h1></body></html>');
        res.end();
    }

    if (req.url === '/about-us') {
        res.write('<html><body><h1>About Us!</h1></body></html>');
        res.end();
    }

    if (req.url === '/contact-us') {
        res.write('<html><body><h1>Contact Us!</h1></body></html>');
        res.end();
    }

    if (req.url === '/api/products') {
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
        try {
            res.end(JSON.stringify(products));
             // status code 200 is observed in the Header.
        } catch(e) {
            res.statusCode = 500;
            res.end('Something went wrong!');
        }        
    }
    
});

server.listen(5010, () => {
    console.log('Server is running on http://localhost:5010');
});




