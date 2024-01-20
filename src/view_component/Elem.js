export default function Elem(props){
    function kattintas(){
        /*  ez történmik, ha rákattintunk az elemre */
        console.log("hahó", props.index)
        /* meghívjuk a szülű megfelelő metódusát */
        props.kattintas(props.index)
    }

    return (
        <div className="elem" onClick={kattintas}>
            <p>{props.ertek}</p>
        </div>
    )
    
}