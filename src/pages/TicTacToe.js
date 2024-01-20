import { useState } from "react";
import TictactoeModel from "../model/TictactoeModel";
import Elem from "../view_component/Elem";
import "./tictactoe.css"

const tictactoeModel = new TictactoeModel();
//komponensen kívül példányosítjuk a modellt

export default function TicTacToe(props) {
    //const list=tictactoeModel.getList();

    const [list, setList] = useState(tictactoeModel.getList())
    const [aktJatekos, setAktJatekos] = useState(tictactoeModel.getAktJatekos())
    
    function kattintas(id) {
        /* Itt kezeljük le a gyerektől jövő infót - SZÜLŐ komponensben */
        console.log(id)
        tictactoeModel.setAllapot(id)
        //újra lekérjük a lista értékét
        setAktJatekos(tictactoeModel.getAktJatekos())
        setList(tictactoeModel.getList())
    }

    const [szam, setSzam]=useState(1)

    function novel(){
        /* szam++
        szam=szam+1 */
        let a = szam+1
        setSzam(a)
    }

    return (
        <div className="jatek">
            <div className="pelda">
                <h3>State használata példa</h3>
                <button onClick={novel} >növel</button>
                <p>{szam} </p>
            </div>



            <h2> Tic-Tac-Toe</h2>
            <div className="jatekter">
                {
                    list.map(
                        (elem, index) => {
                            return (
                                <Elem kattintas={kattintas} ertek={elem} key={index} index={index} />
                            )
                        }
                    )
                }



            </div>
            <p>A következő játékos: {aktJatekos}</p>
        </div>
    )
}