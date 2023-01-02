import "./countrySearch.css"
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

export default function CountrySearch() {
    return (
        <div className="countrySearch">
            <div className="countrySearchTop" contentEditable={true} >
        
                <span style={{ color: "#aaaaaa", fontWeight: 600 }} >Search</span>
                <CloseOutlinedIcon style={{ color: "#aaaaaa", fontWeight: 600 }} />
            </div>
            <div className="countryContainer">
                <div className="countryItem">
                    <div className="countryItemWrapper">
                        <img src="https://cdn-icons-png.flaticon.com/128/3909/3909444.png" alt="" />
                        <span>India</span>
                    </div>
                    <span style={{ color:"#aaaaaa",fontWeight:600}}>+91</span>
                </div>
                <div className="countryItem">
                    <div className="countryItemWrapper">
                        <img src="https://cdn-icons-png.flaticon.com/128/197/197430.png" alt="" />
                        <span>Canada</span>
                    </div>
                    <span style={{ color:"#aaaaaa",fontWeight:600}}>+61</span>
                </div>
                <div className="countryItem">
                    <div className="countryItemWrapper">
                        <img src="https://cdn-icons-png.flaticon.com/128/197/197564.png" alt="" />
                        <span>Sweden</span>
                    </div>
                    <span style={{ color:"#aaaaaa",fontWeight:600}}>+46</span>
                </div>
                <div className="countryItem">
                    <div className="countryItemWrapper">
                        <img src="https://cdn-icons-png.flaticon.com/512/197/197562.png" alt="" />
                        <span>South Africa</span>
                    </div>
                    <span style={{ color:"#aaaaaa",fontWeight:600}}>+27</span>
                </div>
                <div className="countryItem">
                    <div className="countryItemWrapper">
                        <img src="https://cdn-icons-png.flaticon.com/512/197/197484.png" alt="" />
                        <span>United States</span>
                    </div>
                    <span style={{ color:"#aaaaaa",fontWeight:600}}>+1</span>
                </div>
                <div className="countryItem">
                    <div className="countryItemWrapper">
                        <img src="https://cdn-icons-png.flaticon.com/512/197/197571.png" alt="" />
                        <span>Germany</span>
                    </div>
                    <span style={{ color:"#aaaaaa",fontWeight:600}}>+49</span>
                </div>
            </div>
        </div>
    )
}
