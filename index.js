let user = {
    get name() {
        return this._name
    },
    set name(value) {
        if (value.length < 4) {
            alert (`too short user name please make another`)
            return false
        } else {
            alert(`${this._name = value} all good`)
            return true
        }
    }
}
while (!user.name) {
    user.name = prompt('Enter name')
}