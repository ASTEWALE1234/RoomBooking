import './mailList.css'

export const MailList = () => {
  return (
    <div className='mail'>
    <h1 className='mailTitle'>Save time, save money!</h1>
    <span className='mailDesc'>sign up and we will send the best deals to you</span>
    <div className='mailInputContainer'>
    <input type='text' placeholder='Your Email'/>
    <button>Subscirbe</button>
    </div>
    </div>
  )
}
