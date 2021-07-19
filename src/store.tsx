import {makeAutoObservable} from 'mobx'

class Store {
    count: number = 0

    constructor() {
        makeAutoObservable(this)
    }

    increment = (count: number) => {
        this.count = count + 1
    }

    reset = () => {
        this.count = 0
    }

    decrement = (count: number) => {
        this.count = count - 1
    }

}

export default new Store()