import "./addresses.css"

export default function Addresses() {
  return (
    <div className="addresses">
      <div className="addBox">
        <div className="addItem">
          <span className="addTitle">Addresses</span>
          <div className="addDetail">
            <div className="addWrapper">
              <p style={{textAlign:"end",fontSize:"14px",fontWeight:"700"}}>Last Edited</p>
              <p style={{ textAlign: "end", color: "#aaaaaa", fontSize: "14px",fontWeight:"600" }}>20 Sep 2022, 01:40 PM</p>
            </div>
            <button className="addBtn">+</button>
          </div>

        </div>
        <div className="addItem">
          <div className="addWrapper">
            <span style={{fontSize:"15px",fontWeight:"700"}}>
              Addresses
            </span>
            <div>
              <span style={{ fontSize: "12px", fontWeight: "700" }}>
                Last Edited
              </span>
              <span style={{ marginLeft: "10px", color: "#aaaaaa", fontSize: "12px", fontWeight: "600" }}>20 Sep 2022, 01:40 PM</span>
            </div>
          </div>
          <button className="addBtn">+</button>
        </div>
      </div>

    </div>

  )
}
