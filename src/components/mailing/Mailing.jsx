import "./mailing.css"

export default function Mailing() {
  return (
    <div className="mailing">
      <span className='titleMailing'>Mailing Address</span>
      <div className="detailsConatainer">
        <div className="detailsMail">
          <span className="lightMailing">Address Line</span>
          <span className="darkMailing">Level 1 Phoenix Building, Beside Genpact Road, Uppal</span>
        </div>
        <div className="detailsLoc">
          <div>
            <div style={{marginBottom:"10px"}}  className="lightMailing">City</div>
            <div className="darkMailing">Hyderabad</div>
          </div>
          <div>
            <div  style={{marginBottom:"10px"}} className="lightMailing">State</div>
            <div className="darkMailing">Telangana</div>
          </div>
          <div>
            <div style={{marginBottom:"10px"}} className="lightMailing">Country</div>

            <div className="darkMailing">India</div>
          </div>
        </div>

        <div className="detailsMail">
          <div className="lightMailing">Pincode</div>
          <div className="darkMailing">500039</div>
        </div>
      </div>
    </div>
  )
}
