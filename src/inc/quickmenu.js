import React, { Component } from 'react';

class Quickmenu extends React.Component{
  render(){
    return(
      <div className="quickBox">
      	<h3>빠른 상담 신청</h3>
        <form method="post" action="">
        	<fieldset id="right_quick_menu">
        		<legend>빠른상담신청입력폼</legend>
        		<input name="qc_user_name" title="고객명 입력폼" type="text" maxlength="25" placeholder="성명을 입력해주세요"/>
        		<div className="emailBox">
        			<input name="qc_user_email" title="사용자 이메일 입력" id="qc_user_email" type="text" placeholder="이메일을 입력해주세요."/>
        		</div>
        		<div className="telBox">
        			<input name="qc_user_mobile" title="사용자 연락처 입력" id="qc_user_mobile" type="text" maxlength="11" placeholder="연락처를 입력해주세요."/>
        		</div>
        		<textarea name="qc_user_memo" title="메모 입력" id="qc_user_memo" placeholder="메모를 입력해주세요."></textarea>

        		<div className="inpuTinfo">
        			개인정보 처리방침&동의 내용
        		</div>
        		<div className="chkbox">
        			<input name="qc_agree" id="qc_agree" type="checkbox"/><label for="qc_agree">개인정보 처리방침&동의</label>
        		</div>
        		<a className="btn_apply" href="javascript:void(0)">무료상담신청</a>
        	</fieldset>
        </form>
      	<p class="bannerCall">
      		<span className="bcallTit">상담예약 및 안내전화</span>
      		<span className="bcallTxt">070-7576-4261</span>
      	</p>
      	<div className="quick_close">
      		<a href="" class="quick_cbtn">close</a>
      	</div>
      </div>
    );
  }
}

export default Quickmenu
