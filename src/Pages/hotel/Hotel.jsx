import './hotel.css'
import { Navbar } from '../../components/navbar/Navbar'
import { MailList } from '../../components/mailList/MailList'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocation } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export const Hotel = () => {
  const [slideNumber,setSlideNumber]=useState(0);
  const [open, setOpen]=useState(false);
  const photos=[
{
src:"https://media.istockphoto.com/id/1432232153/photo/businesswoman-using-wireless-devices-in-hotel-room.jpg?s=612x612&w=0&k=20&c=eUuKXyQcFmmnC1JF4rC-zqJGqNh3UQMRiqEGUcmRVG0="
},
{
  src:"https://media.istockphoto.com/id/1392171961/photo/portrait-of-an-asian-tourist-woman-standing-nearly-window-looking-to-beautiful-view-with-her.jpg?s=612x612&w=0&k=20&c=Q4GVjzoG10bpmXW4GzbdFtOhpjbkTD1U3HN_yfCZ6t8="
},
{
  src:"https://media.istockphoto.com/id/1419290595/photo/3d-rendering-of-comfortable-bed-in-a-luxury-resort-bedroom.jpg?s=612x612&w=0&k=20&c=8SY9httD0tTxGvjUWbWkWGmMjjJW0g7V-QL1a9dri7Y="
},
{
  src:"https://media.istockphoto.com/id/1432232153/photo/businesswoman-using-wireless-devices-in-hotel-room.jpg?s=612x612&w=0&k=20&c=eUuKXyQcFmmnC1JF4rC-zqJGqNh3UQMRiqEGUcmRVG0="
  },
  {
    src:"https://media.istockphoto.com/id/1392171961/photo/portrait-of-an-asian-tourist-woman-standing-nearly-window-looking-to-beautiful-view-with-her.jpg?s=612x612&w=0&k=20&c=Q4GVjzoG10bpmXW4GzbdFtOhpjbkTD1U3HN_yfCZ6t8="
  },
  {
    src:"https://media.istockphoto.com/id/1419290595/photo/3d-rendering-of-comfortable-bed-in-a-luxury-resort-bedroom.jpg?s=612x612&w=0&k=20&c=8SY9httD0tTxGvjUWbWkWGmMjjJW0g7V-QL1a9dri7Y="
  },
  {
    src:"https://media.istockphoto.com/id/1432232153/photo/businesswoman-using-wireless-devices-in-hotel-room.jpg?s=612x612&w=0&k=20&c=eUuKXyQcFmmnC1JF4rC-zqJGqNh3UQMRiqEGUcmRVG0="
    },
    {
      src:"https://media.istockphoto.com/id/1392171961/photo/portrait-of-an-asian-tourist-woman-standing-nearly-window-looking-to-beautiful-view-with-her.jpg?s=612x612&w=0&k=20&c=Q4GVjzoG10bpmXW4GzbdFtOhpjbkTD1U3HN_yfCZ6t8="
    },
    {
      src:"https://media.istockphoto.com/id/1419290595/photo/3d-rendering-of-comfortable-bed-in-a-luxury-resort-bedroom.jpg?s=612x612&w=0&k=20&c=8SY9httD0tTxGvjUWbWkWGmMjjJW0g7V-QL1a9dri7Y="
    },
    {
      src:"https://media.istockphoto.com/id/1419290595/photo/3d-rendering-of-comfortable-bed-in-a-luxury-resort-bedroom.jpg?s=612x612&w=0&k=20&c=8SY9httD0tTxGvjUWbWkWGmMjjJW0g7V-QL1a9dri7Y="
    },
    {
      src:"https://media.istockphoto.com/id/1432232153/photo/businesswoman-using-wireless-devices-in-hotel-room.jpg?s=612x612&w=0&k=20&c=eUuKXyQcFmmnC1JF4rC-zqJGqNh3UQMRiqEGUcmRVG0="
      },
      {
        src:"https://media.istockphoto.com/id/1392171961/photo/portrait-of-an-asian-tourist-woman-standing-nearly-window-looking-to-beautiful-view-with-her.jpg?s=612x612&w=0&k=20&c=Q4GVjzoG10bpmXW4GzbdFtOhpjbkTD1U3HN_yfCZ6t8="
      },
      {
        src:"https://media.istockphoto.com/id/1419290595/photo/3d-rendering-of-comfortable-bed-in-a-luxury-resort-bedroom.jpg?s=612x612&w=0&k=20&c=8SY9httD0tTxGvjUWbWkWGmMjjJW0g7V-QL1a9dri7Y="
      }
  ];
  const handleOpen=(i)=>{
    setSlideNumber(i);
    setOpen(true)
  }
  const handleMove=(direction)=>{
    let newSlideNumber;
    if(direction==="l"){
      newSlideNumber= slideNumber===0?5:slideNumber-1;
    }else{
      newSlideNumber= slideNumber=== 5?0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber)
  };
  return (
    <div>
    <Navbar />
    <Header type="list"/>
    <div className='hotelContainer'>

     { open &&<div className='slider'>

    <FontAwesomeIcon icon={faCircleXmark} onClick={()=>setOpen(false)} className='close'/>
    <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={()=>handleMove("l")}/>
    <div className='sliderwrapper'>
    <img src={photos[slideNumber].src} className='sliderImg' />
    </div>
    <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={()=>handleMove("r")}/>
     </div>}

    <div className='hotelWrapper'>
    <button className='bookNow'>Reserve or Book Now</button>
    <h1 className='hotelTitle'>Grand Hotel</h1>
    <div className='hotelAddress'>
    <FontAwesomeIcon icon={faLocation}/>
    <span>Elton St 125 New york</span>
    </div>
    <span className='hotelDistance'>Excellent location - 500m from center</span>
    <span className='hotelPriceHightLight'>Book a stay over $114 at this propery and get a free airport taxi</span>
    <div className='hotelImage'>
     {photos.map((photo,i)=>(
      <div className='hotelImageWrapper'>
      <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className='hotelImg'/>
      </div>
  ))}
    </div>
    <div className='hotelDetails'>
    <div className='hotelDetailsTexts'>
    <h1 className='hotelTitle'>Stay in the heart of krakow</h1>
    <p className='hotelDesc'>A hotel is a commercial establishment that provides lodging,
     meals, and other services to guests, travelers, and tourists.
      Hotels can range from small family-run businesses to large 
      international chains. Most hotels list a variety of services,
       such as room service, laundry, and concierge.
       travelers, and tourists.
      Hotels can range from small family-run businesses to large 
      international chains. Most hotels list a variety of services,
       such as room service, laundry, and concierge
       </p>
    </div>
    <div className='hotelDetailsPrice'>
    <h1>Perfect for a 9-night stay!</h1>
    <span>
    Located in the real heart of krakow, 
    this property has an excellent location score of 9.8!
    </span>
    <h2>
    <b>$945</b> (9 night)
    </h2>
    <button>Reserve or Book Now</button>
    </div>
    </div>
    </div>
    <MailList />
    <Footer/>
    </div>
    
    </div>
  )
}
