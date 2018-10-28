const crypto = require('crypto');
// thread pool: dont play around it.. not a ideal way to deal with...
process.env.UV_THREADPOOL_SIZE = 50;

// get your current time.....
var start = Date.now();

crypto.pbkdf2('a','b', 100000, 512, 'sha512',function () {

    // find time required to execute function......
    console.log("1: ",  Date.now() - start );
});


crypto.pbkdf2('a','b', 100000, 512, 'sha512',function () {

    // find time required to execute function......
    console.log("2: ",  Date.now() - start );
});


crypto.pbkdf2('a','b', 100000, 512, 'sha512',function () {

    // find time required to execute function......
    console.log("3: ",  Date.now() - start );
});


crypto.pbkdf2('a','b', 100000, 512, 'sha512',function () {

    // find time required to execute function......
    console.log("4: ",  Date.now() - start );
});


crypto.pbkdf2('a','b', 100000, 512, 'sha512',function () {

    // find time required to execute function......
    console.log("5: ",  Date.now() - start );
});