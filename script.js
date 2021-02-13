function Calculator() {
    this.methods = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
    };

    this.calculate = function( str ) {
        let arrSplit = str.split( ' ' );

        let a = +arrSplit[0],
            op = arrSplit[1],
            b = +arrSplit[2];

        if ( !this.methods[op] || isNaN( a ) || isNaN( b ) ) return NaN;
        else return this.methods[op](a, b);
    }

    this.addMethod = function( name, func) {
        this.methods[name] = func;
    };
}