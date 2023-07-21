import './featured.css'

export const Featured = () => {
  return (
    <div className='featured'> 
    <div className='featuredItem'>
    <img src="https://media.istockphoto.com/id/1293415546/photo/3d-rendering-luxury-bedroom-suite-in-resort-high-rise-hotel-with-twin-bed.jpg?s=612x612&w=0&k=20&c=3U5IwFoQUYaQo2OJJtPmSucH_-XnsKYVAPVcbieYsFg=" className='featuredImg'/>
    <div className='featuredTitle'>
    <h1>Deblin</h1>
    <h2>123 properties</h2>
    </div>
    </div>
    <div className='featuredItem'>
    <img src='https://media.istockphoto.com/id/627892060/photo/hotel-room-suite-with-view.jpg?s=612x612&w=0&k=20&c=YBwxnGH3MkOLLpBKCvWAD8F__T-ypznRUJ_N13Zb1cU=' className='featuredImg'/>
    <div className='featuredTitle'>
    <h1>Austin</h1>
    <h2>532 properties</h2>
    </div>
    </div>
    <div className='featuredItem'>
    <img src='https://media.istockphoto.com/id/1300757575/photo/side-view-of-hotel-amenities-on-the-bed.jpg?s=612x612&w=0&k=20&c=NQK76wtCnGhNcvveUfs8FE4JGl9-A1zuqCsSS8vUmgI=' className='featuredImg'/>
    <div className='featuredTitle'>
    <h1>Reno</h1>
    <h2>533 properties</h2>
    </div>
    </div>
    </div>
  )
}
