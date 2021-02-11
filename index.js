Function.prototype.defers = function (ms) {
    (...args) => {
        setTimeout(() => {
            this.apply(this, args)
        }, ms)
    }
}


