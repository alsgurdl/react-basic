import React from 'react';
import Chart from '../Chart/chart';

const ExpenseChart = ({ expenses }) => {
  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  //선택연도의 모든 지출데이터를 꺼내서 월을 추출하면서
  //해당 월의 지출총액을 cjartDotapoint의 월 calue에 누적
  expenses.forEach((exp) => {
    //이 월 정보는 실제 월에서1이 감소되어 있다
    //오히려 인덱스를 지목하가 좋아짐
    const expenseMonth = exp.date.getMonth();
    const expensePrice = exp.price;

    chartDataPoints[expenseMonth].value += expensePrice;
  });

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpenseChart;