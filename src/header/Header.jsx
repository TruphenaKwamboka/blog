import "./header.css"

export default function Header() {
  return (
    <div className="header">
    <div className="headerTitles">
      <span className="headerTitlesSm">React & Node</span>
      <span className="headerTitleLg">Blog</span>
    </div>
    <img 
    className="headerImg" 
    src="imageh.jpg" 
    alt="" />
    </div>
  )
}
