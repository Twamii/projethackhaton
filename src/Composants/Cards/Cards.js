import './Cards.css';
import photo9 from '../../images/Pinata9.jpg'

function SpecialCards({imageForSales}) {
    return (
        <div className="cards">
            <div className="cards-inner">
                <div className="cards-front"><img src={imageForSales} /></div>
                <div className="cards-back">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                    veniam, quis nostrud exercitation ullamco laboris 
                </div>
            </div>
        </div>
    )
}

export default SpecialCards