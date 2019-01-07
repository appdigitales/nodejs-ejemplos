const hbs = require('hbs');

// helpers
hbs.registerHelper('getCiudad', () => {
    return 'madrid'; 
})

hbs.registerHelper('capitalize', (txt) => {
    return txt.charAt(0).toUpperCase() + txt.slice(1);
})