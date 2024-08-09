import { useContext, useState } from 'react'
import { assets } from '../Assets/frontend_assets/Data'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { ShopContext } from '../Shopcontext/Shopcontext'


interface navprops {
  setshowLogin:React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar:React.FC<navprops> = ({setshowLogin}) => {

  const[menu,setmenu] = useState<string>("Home")

  const[search,setsearch] = useState('')

  const shopcontext = useContext(ShopContext)



  return (
    <div className='navbar'>
      <div className="website-icon">
        <Link to='/'><img src={assets.logo} alt="" /></Link>
      </div>
      <div className="nav-menu">
          <ul>
            <Link to='/' style={{textDecoration:'none', color:'#000000'}}><li onClick={()=>{setmenu("Home")}}>Home{menu=='Home'?<hr />:<></>}</li></Link>
            <a href="#explore-menu" style={{textDecoration:'none', color:'#000000'}}><li onClick={()=>{setmenu("Menu")}}>Menu{menu=='Menu'?<hr />:<></>}</li></a>
            <a href="#footer" style={{textDecoration:'none', color:'#000000'}}><li onClick={()=>{setmenu("Contact Us")}}>Contact Us{menu=='Contact Us'?<hr />:<></>}</li></a>
          </ul>
      </div>
      <div className="login-cart">
            {search==''?<img src={assets.search_icon} alt="" onClick={()=>{setsearch('Search')}}/>
            :<input placeholder='Search Food' onSubmit={()=>{setsearch('')}} onKeyDown={(event)=>{
              if(event.key=='Enter'){
                setsearch('')
              }
            }}/>}
            <div className="dot_container">
              <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
              <div className={shopcontext?.gettotalcartamount()==0?'':'dot'}></div>
            </div>
            <Link to='' style={{textDecoration:'none', color:'#000000'}}><div className='sign-in' onClick={()=>setshowLogin(true)}>Sign in</div></Link>
      </div>
    </div>
  )
}

export default Navbar
