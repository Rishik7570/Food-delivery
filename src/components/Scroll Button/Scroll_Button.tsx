
import { FaArrowUp } from "react-icons/fa6";
import './Scroll_Button.css'



const Scroll_Button = () => {
    const visible = true

    const scrolltotop = () => {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    }

  return (
    <div className="scrollbtn">
      <button onClick={scrolltotop}> 
     <FaArrowUp    
     style={{display: visible ? 'inline' : 'none'}} /> 
    </button> 
    </div>
  )
}

export default Scroll_Button
