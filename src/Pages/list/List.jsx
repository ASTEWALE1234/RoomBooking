import './list.css'
import { Header } from '../../components/header/Header'
import { Navbar } from '../../components/navbar/Navbar'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import {format} from 'date-fns'
import { DateRange } from 'react-date-range'
import { SearchItem } from '../../components/searchItem/SearchItem'

export const List = () => {
  const location=useLocation()
  const [destination,setDestination]=useState(location.state.destination)
  const [options, setOptions] =useState(location.state.options)
  const [date,setDate]=useState(location.state.date)
  const [openDate, setOpenDate]=useState(false);

  return (
    <div>
    <Navbar /> <Header type="list"/>
   
    <div className='listContainer'>
    <div className='listWraper'>
    <div className='listSearch'>
    <h1 className='lsTitle'>Search</h1>
    <div className='lsItem'>
    <label>Destination</label>
    <input placeholder={destination} type='text'/>
    </div>
    <div className='lsItem'>
    <label>Check-in Date</label>
    <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate,"MM/dd/yyyy")} to 
    ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
    {openDate &&<DateRange
    onChange={item=>setDate([item.selection])}
    moveRangeOnFirstSelection={false}
    ranges={date}
    minDate={new Date()}
    />}
    </div>
    <div className='lsItem'>
    <div className='lsOptions'>
    <label >Options</label>
    <div className='lsOptionItem'>
    <span className='lsOptionText'>
    Min price <small>per night</small>
    </span>
    <input type='number' className='lsOptionInput'/>
    </div>
    <div className='lsOptionItem'>
    <span className='lsOptionText'>
    Max price <small>per night</small>
    </span>
    <input type='number' className='lsOptionInput'/>
    </div>
    <div className='lsOptionItem'>
    <span className='lsOptionText'>
    Adult 
    </span>
    <input min={1} placeholder={options.adult} type='number' className='lsOptionInput'/>
    </div>
    <div className='lsOptionItem'>
    <span className='lsOptionText'>
    Children 
    </span>
    <input min={0} placeholder={options.children} type='number' className='lsOptionInput'/>
    </div>
    <div className='lsOptionItem'>
    <span className='lsOptionText'>
    Room
    </span>
    <input min={1} placeholder={options.room} type='number' className='lsOptionInput'/>
    </div>
    </div>
    </div>
    <button>Search</button>
    </div>
    <div className='listResult'>
    <SearchItem />
    <SearchItem />
    <SearchItem />
    <SearchItem />
    <SearchItem />
    <SearchItem />   
    <SearchItem />
    <SearchItem />
    <SearchItem />
    <SearchItem />
    <SearchItem />
    </div>
    </div>
    </div>
    
    </div>
  )
}
