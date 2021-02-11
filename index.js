let user = {
    set fullName(value) {
        [this.name, this.surname] = value.split(' ')
    },
    get fullName() {
        return `${this.name} ${this.surname}`
    }
}

user.fullName = 'Max Million'
let aFullName = user.fullName
console.log(aFullName);