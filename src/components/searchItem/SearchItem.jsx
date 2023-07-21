import './searchItem.css'

export const SearchItem = () => {
  return (
    <div className='searchItem'>
    <img src='https://media.istockphoto.com/id/1442607457/photo/happy-family-on-a-video-call-with-grandmother.jpg?s=612x612&w=0&k=20&c=ACJ6BGFwzE_7Hy_MrbeIe5k_L9JO3c37uunZphswT-Q=' 
    className='siImg'/>
    <div className='siDesc'>
      <h1 className='siTitle'> Tower street Apartment</h1>
      <span className='siDistance'>500m from center</span>
      <span className='siTaxiOp'>free airport taxi</span>
      <span className='siSubtitle'>Studio Apartment with Air conditioning</span>
      <span className='siFeatured'>Entire Studio * 1 bathroom * 21m' 1 full bed</span>
      <span className='siCancelOp'>Free Cancellation</span>
      <span className='siCancelOpSubTitle'>
      You can cancel later, so lock in this great price today!
      </span>

      </div>
    <div className='siDetails'>
    <div className='siRating'>
    <span>Excellent</span>
    <button>8.9</button>
    </div>
    <div className='siDetailTexts'>
    <span className='siPrice'>$123</span>
    <span className='siTaxOp'>Includes taxes and fees</span>
    <button className='siCheckButton'>See Availability</button>
    </div>
    </div>
    </div>
  )
}
