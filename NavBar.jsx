
import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
    return (
      <nav className="navbar">
        <ul className="main-ul">
          {/* Home */}
          <li className="nav-item">
            <a href="#">Home</a>
            <div className="sub-nav">
              <ul>
                <li><a href="https://www.youtube.com/watch?v=etTE-mjLiTw">Item 1</a></li>
                <li><Link to = "/gptlogicpage">AI CHAT</Link></li>
                <li><a href="#">Item 1</a></li>
              </ul>
            </div>
          </li>
  
          {/* About Us */}
          <li className="nav-item">
            <a href="#">About Us</a>
            <div className="sub-nav">
              <ul>
                <li><a href="#">Item 2</a></li>
                <li><a href="#">Item 2</a></li>
                <li><a href="#">Item 2</a></li>
              </ul>
            </div>
          </li>
  
          {/* Blogs */}
          <li className="nav-item">
            <a href="#">Blogs</a>
            <div className="sub-nav">
              <ul>
                <li><a href="#">Item 3</a></li>
                <li><a href="#">Item 3</a></li>
                <li><a href="#">Item 3</a></li>
              </ul>
            </div>
          </li>
  
          {/* Newsroom */}
          <li className="nav-item">
            <a href="#">Newsroom</a>
            <div className="sub-nav">
              <ul>
                <li><a href="#">Item 4</a></li>
                <li><a href="#">Item 4</a></li>
                <li><a href="#">Item 4</a></li>
              </ul>
            </div>
          </li>
  
          {/* Need Help */}
          <li className="nav-item">
            <a href="#">Need Help</a>
            <div className="sub-nav">
              <ul>
                <li><a href="#">Item 5</a></li>
                <li><a href="#">Item 5</a></li>
                <li><a href="#">Item 5</a></li>
              </ul>
            </div>
          </li>
  
          {/* Donate */}
          <li className="nav-item">
            <a href="#">Donate</a>
            <div className="sub-nav">
              <ul>
                <li><a href="#">Item 6</a></li>     
                <li><a href="#">Item 6</a></li>
                <li><a href="#">Item 6</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default NavBar;
  