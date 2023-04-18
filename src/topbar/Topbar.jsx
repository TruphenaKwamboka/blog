import "./topbar.css"

export default function Topbar() {
  return (
    <div className='top'>
        <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItems">HOME</li>
                <li className="topListItems">ABOUT</li>
                <li className="topListItems">CONTACT</li>
                <li className="topListItems">WRITE</li>
                <li className="topListItems">LOGOUT</li>
            </ul>
        </div>
        <div className="topRight">
            <img 
            className="topImg"
            src="profile.jpg" alt="" />
            <i className="topSearchIcon fas fa-search"></i>
        </div>
    </div>
  )
}
