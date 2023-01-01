import "./startFiling.css"

export default function StartFiling() {
  return (
      <div className='startFiling'>
          <p className='startFilingTitle'>Started filling the application</p>
          <p className='startFilingDetail'>Consectetur adipiscing elit. Sed neque, faucibus eget felis.</p>
          <div className='startFilingBox'>
              <span className='startFilingDate'>10 Sep 2022, 01:40 PM</span>
              <div className='startFilingImgWrapper'>
                  <span className='startFilingAuthor'>Mike Wheeler</span>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHKiE_vVIqldC8YQ8HVXbnxVOhtOLMH4coyg&usqp=CAU" alt="" />
              </div>
       </div>
      </div>
  )
}
