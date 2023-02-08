import ReactEcharts from 'echarts-for-react';

const LineChart = ({data}) => {

    const options = {
        color: ['rgba(55, 81, 255, 1)','rgba(223, 224, 235, 1)'],
        title: {
            text: 'Active Members'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['this year', 'last year'],
            right: '1%',
            top: '5%',

        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },

        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: data.xAxis
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: 'this year',
                type: 'line',
                stack: 'Total',
                data: data.thisYear,
                smooth: true,
                symbol: 'none',
                areaStyle: {
                    opacity: 0.025
                },

            },

            {
                name: 'last year',
                type: 'line',
                stack: 'Total',
                data: data.lastYear,
                smooth: true,
                symbol: 'none',
            },

        ]
    };

    return ( 
        <ReactEcharts
            option={options}
        />
     );
}
 
export default LineChart;