import React, { Component } from 'react';
import irae_logo from '../images/irae_black.png';

class Header extends Component{
  render(){
    return(
      <div className="header" id="header">
    		<a href="#container" title="본문페이지로 바로가기" class="contentLink">본문페이지로 바로 이동</a>
    		<div className="header_wrap">
    			<div className="logo">
    				<a href="../main/main.html">
              <img src= { irae_logo } alt="이레로고" />
    				</a>
    			</div>
    			<ul className="gnb">
    				<li><a href="../about/about.html">ABOUT</a></li>
    				<li><a href="../portfolio/portfolio.html">PORTFOLIO</a></li>
    				<li><a href="../making/making.html">MAKING</a></li>
    				<li><a href="../maintenance/maintenance.html">MAINTENANCE</a></li>
    				<li><a href="../community/community_01.html">COMMUNITY</a></li>
    			</ul>
    		</div>
    	</div>
    );
  }
}

export default Header
