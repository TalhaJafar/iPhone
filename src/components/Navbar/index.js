import {useEffect} from 'react';
import './index.scss';
// import {FiMenu} from 'react-icons/fi'
import {AiFillApple} from 'react-icons/ai'
import {FiSearch} from 'react-icons/fi'
import gsap from 'gsap'

function Navbar() {
  useEffect(() => {

    let timeLine = gsap.timeline();
    timeLine.from('.menu_icon', {duration:0.75 , x:-50 ,opacity:0});
    timeLine.from('.lng', {duration:0.75 , x:-50 ,opacity:0});
    timeLine.from('.search_icon', {duration:0.75 , x:-50 ,opacity:0});

  }, [])
  return (
    <div className="navbar_section">
      <div className="navbar_container">
        <div className="navbar">
          <div className="menu_container">
            <div className="menu_icon">
              <AiFillApple size={40}/>
            </div>
            {/* <div className="menu_bar">
              <FiMenu size={30}/>
            </div> */}
          </div>
          
          
          <div className="search_section d-flex align-items-center">
            <div className="lng">Eu</div>
            <div className="search_icon"><FiSearch size={20}/></div>

          </div>
        </div>
      </div>
        
    </div>
  );
}

export default Navbar;
