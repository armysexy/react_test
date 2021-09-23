import React, { Component } from 'react';
import new_icon from '../images/new_ico.gif';

class IngList extends Component{
  render(){
    return(
      <div className="ing_List">
      	<section class="ing_wrap">
      		<h3>진행중 프로젝트</h3>
      		<ol>
      			<li>
      				<a href="">
      					<span className="project_name">
      						(주)우리엘젠자
      						<b><img src= { new_icon } alt="new icon image"/></b>
      					</span>
      					<em className="date_tx">2017-07-25</em>
      				</a>
      			</li>
      			<li>
      				<a href="">
      					<span className="project_name">
      						(주)모아모아삽
      						<b><img src= { new_icon } alt="new icon image"/></b>
      					</span>
      					<em className="date_tx">2017-07-19</em>
      				</a>
      			</li>
      			<li>
      				<a href="">
      					<span className="project_name">
      						(주)에스케이이노베이션
      						<b><img src= { new_icon } alt="new icon image"/></b>
      					</span>
      					<em className="date_tx">2017-07-14</em>
      				</a>
      			</li>
      			<li>
      				<a href="">
      					<span className="project_name">(주)마노피디자인</span>
      					<em className="date_tx">2017-07-08</em>
      				</a>
      			</li>
      			<li>
      				<a href="">
      					<span className="project_name">(주)에스아이스테이션</span>
      					<em className="date_tx">2017-07-02</em>
      				</a>
      			</li>
      			<li>
      				<a href="">
      					<span className="project_name">(주)에스아이스테이션</span>
      					<em className="date_tx">2017-07-02</em>
      				</a>
      			</li>
      			<li>
      				<a href="">
      					<span className="project_name">(주)에스아이스테이션</span>
      					<em className="date_tx">2017-07-02</em>
      				</a>
      			</li>
      			<li>
      				<a href="">
      					<span className="project_name">(주)에스아이스테이션</span>
      					<em className="date_tx">2017-07-02</em>
      				</a>
      			</li>
      			<li>
      				<a href="">
      					<span className="project_name">(주)에스아이스테이션</span>
      					<em className="date_tx">2017-07-02</em>
      				</a>
      			</li>

      		</ol>
      	</section>
      	<div className="quick_close">
      		<a href="" className="quick_cbtn">close</a>
      	</div>
      </div>
    );
  }
}

export default IngList
