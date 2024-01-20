export default class TictactoeModel {
    #list = []
    #aktJatekos = "X"
    constructor() {

        this.#list = [" ", " ", "O", " ", "X", " ", " ", " ", " "]
    }
    getList() {
        //a listával úgy térünk vissza, hogy új memóriaterületre másoljuk, 
        //teljesen új listát hozunk létre!
        return [...this.#list];
    }

    getAktJatekos(){
        return this.#aktJatekos
    }

    setAllapot(id) {
        this.#list[id] = this.#aktJatekos;
        if (this.#aktJatekos === "X") {
            this.#aktJatekos = "O"
        } else {
            this.#aktJatekos = "X"
        }
        console.log(this.#aktJatekos)
        console.log(this.#list)
    }

}