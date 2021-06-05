let options = {
    width: 1366,
    height: 768,
    background: 'red',
    font: {
        size: '16px',
        color: '#fff'
    }
};

console.log(JSON.stringify(options));// peredajet v formate JSON

console.log('__________________');

console.log(JSON.parse(JSON.stringify(options))); // preobrazovyvajet dannyje v oby4nyj format


