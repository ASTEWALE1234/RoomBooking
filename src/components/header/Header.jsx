import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './header.css'
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { DateRange, DateRangePicker } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import { format }  from 'date-fns';
import { useNavigate } from 'react-router-dom';

export const Header = ({type}) => {

  const [destination, setDestination]=useState("");
  const [openDate, setOpenDate]=useState(false);

  const [date,setDate]=useState([
{
  startDate:new Date(),
  endDate:new Date(),
  key:'selection'
}
  ]);
  const [openOptions,SetOpenOptions]=useState(false);
  const [options, setOptions]=useState(
    {
      adult:1,
      children:0,
      room:1,
    }
  );
  const navigate= useNavigate();
  const handleOptions=(name, operation)=>{
    setOptions(prev=>{
      return {
        ...prev, [name]:operation==="i"? options[name] +1:options[name]-1,
      }
    })
  }
  const handleSearch=()=>{
    navigate("/hotels",{state:{destination,date,options}});
  }
  return (
    <div className='header'>
    <div className= {type==='list'? "headerContainer listMode":"headerContainer"}>
    <div className='headerList'>
    <div className='headerListItem active'>
    <FontAwesomeIcon icon={faBed} />
    <span>Stays</span>
    </div>
    <div className='headerListItem'>
    <FontAwesomeIcon icon={faPlane} />
    <span>Flights</span>
    </div>
    <div className='headerListItem'>
    <FontAwesomeIcon icon={faCar}/>
    <span>Car rentals</span>
    </div>
    <div className='headerListItem'>
    <FontAwesomeIcon icon={faBed} />
    <span>Attractions</span>
    </div>
    <div className='headerListItem'>
    <FontAwesomeIcon icon={faTaxi} />
    <span>Airport taxis</span>
    </div>
    </div>
    {type!="list" &&
      <>
      <h1 className='headerTitle'>A lifetime of discounts? It's Genius.</h1>
    <p className='headerDesc'>Get rewarder for yiur travels - inlock instant savings of 10% or more
    with a free algabooking account</p>
    <button className='headerBtn'>Sign in /Register</button>
    <div className='headerSearch'>
    <div className='headerSearchItem'>
    <FontAwesomeIcon icon={faBed} className='headerIcon'/>
    <input type='text' placeholder='where are you going?' className='headerSearchInput' 
    onChange={e=>setDestination(e.target.value)}
    />
    </div>
    <div className='headerSearchItem'>
    <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
    <span onClick={()=>setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
    {openDate&& <DateRange 
    editableDateInputs={true}
    onChange={(item)=>setDate([item.selection])}
    moveRangeOnFirstSelection={false}
    ranges={date}
    className='date'
    />}
    </div>
    <div className='headerSearchItem'>
    <FontAwesomeIcon icon={faPerson} className='headerIcon' />
    <span onClick={()=>SetOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
  {openOptions &&<div className='options'>
  <div className='optionItem'>
  <span className='optionText'>Adult</span>
  <div className='optionCounter'>

  <button disabled={options.adult <=1} className='optionCounterButton' onClick={()=>handleOptions("adult", "d")}>-</button>
  <span className='optionCounterNumber'>{options.adult}</span>
  <button  className='optionCounterButton' onClick={()=>handleOptions("adult", "i")}>+</button>
  </div>
  </div>
  <div className='optionItem'>
  <span className='optionText'>Children</span>
  <div className='optionCounter'>
  <button disabled={options.children<=0} className='optionCounterButton' onClick={()=>handleOptions("children", "d")}>-</button>
  <span className='optionCounterNumber'>{options.children}</span>
  <button className='optionCounterButton' onClick={()=>handleOptions("children", "i")}>+</button>
  </div>
  </div>
  <div className='optionItem'>
  <span className='optionText'>Room</span>
  <div className='optionCounter'>
  <button disabled={options.room<=0} className='optionCounterButton' onClick={()=>handleOptions("room", "d")}>-</button>
  <span className='optionCounterNumber'>{options.room}</span>
  <button className='optionCounterButton' onClick={()=>handleOptions("room", "i")}>+</button>
  </div>
  </div>
  </div>}
    </div>
    <div className='headerSearchItem'>
    <button className='searchBtn' onClick={handleSearch}>Search</button>
    </div>
    
    </div></>}
    </div>
    </div>
  )
}
