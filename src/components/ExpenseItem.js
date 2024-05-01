import React from 'react';
import './ExpenseItem.css';
const ExpenseItem = ({title, price, date}) => {
 
  //날짜 포멧팅 변환 함수 정의


//한자리 수를 두자리로 변환해주는 함수
const make2digit = (text) =>{
return text.toString().padStart(2, '0');
}

const makeFormattdDete = ()=>{
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
return`${year}년 ${make2digit(month)}월 ${make2digit(day)}일`;

  }
//숫자를 화폐 표기법으로 바꾸기
const formattedPrice = new Intl.NumberFormat('ko-KR').format(price);

  return (
    
    <div className='expense-item'>
      <div>{makeFormattdDete()}</div>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{formattedPrice}</div>
      </div>
    </div>
  )
}

export default ExpenseItem