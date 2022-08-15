import './card.css';


export default function Card(props){



    return(
        <div id="card_cover">
            <div id="areaCover">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-quote" viewBox="0 0 16 16">
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
                </svg>

                <div id="imageCover"></div>
                <img id="resim" src={props.image} alt="No image"/>
            </div>
            <p id="name">{props.name.split(' ').map((item,index)=>{return item[0].toUpperCase() + item.substring(1, item.length)}).join(" ")}</p>
            {/* <p id="name">{props.name.split(' ')[0][0].toUpperCase() + props.name.split(' ')[0].substring(1, props.name.split(' ')[0].length ) + " " }</p> */}

            <p id="job">{props.job.toUpperCase()}</p>

            <p id="text">{props.text}</p>

            <div id="fwbw">

            <svg onClick={()=>{
                let sira;
                if(props.cardId > 0) {
                    sira = props.cardId - 1;
                    props.setSira(sira);
                }else{
                    sira = 3;
                    props.setSira(sira);
                }

                console.log("props cardid" , props.cardId);
                console.log("sira ", sira);
                props.changeCard(props.veri[sira]);

            }}
            className="geri hareket" fill="rgb(85, 85, 253)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"/></svg>

            <svg onClick={()=>{
                let sira;
                if(props.cardId < 3) {
                    sira = props.cardId + 1;
                    props.setSira(sira);
                }else{
                    sira = 0;
                    props.setSira(sira);
                }

                console.log("props cardid" , props.cardId);
                console.log("sira ", sira);
                props.changeCard(props.veri[sira]);

            }}
            className="ileri hareket" fill="rgb(85, 85, 253)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"/></svg>


            </div>

            <button id="surprise" onClick={()=>{
                
                let sira = Math.floor(Math.random() * 4);
                // console.log(sira);

                props.changeCard(props.veri[sira]);

            }}>Surprise Me</button>
        </div>
    )
}