// 柱子做背景
// 20190606
/*
有2个X轴
*/

```
option = {
    yAxis: {
        type: 'value'
    },
        xAxis: [{
        type: 'category',
        data: ['a', 'b', 'c', 'd', 'e'],
        axisTick: {show: false},
        axisLabel: {
            formatter: 'nice'
        }
    },
    {
       type: 'category',
       axisTick: {show: false},
        axisLabel: {
            formatter: 'nice'
        }
    }
    ],
    series: [{
        data: [120, 200, 150, 80, 70],
        type: 'bar',
        z: 10,
        barWidth: 10
    },
    {
        data: [120, 200, 150, 80, 70],
        type: 'bar',
        z: 10,
        barWidth: 10
    },
        {
        data: [120, 200, 150, 80, 70],
        type: 'bar',
        z: 10,
        barWidth: 10
    },
        {
        data: [120, 200, 150, 80, 70],
        type: 'bar',
        z: 10,
        barWidth: 50,
        xAxisIndex: 1,
        barGap: '-100%',
        itemStyle: {
            color: 'rgba(0,0,0, 0.3)'
        }
    },
    ]
};

```
