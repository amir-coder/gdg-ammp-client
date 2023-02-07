import StatsCard from "components/StatsCard";
import Link from "next/link";
import ReactEcharts from "echarts-for-react";
const Overview = () => {

    // chart options that will be passed to the chart component 
    const option = {
        // add a color palette to the chart using colors in global.scss
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
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22']
},
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'this year',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210, 120 ],
            smooth: true,
            symbol: 'none',
          },
        
          {
            name: 'last year',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290, 330, 310, 220] ,
            smooth: true,
            symbol: 'none',
          },
          
        ]
      };
                              
                
    return ( 
        <main className="p-8">
            
            {/* the cards at the top */}
            <header className="stats container md:flex  md:space-x-8 ">
                <StatsCard title="Members" stats="1200" className=""/>
                <StatsCard title="Active Members" stats="560" className=""/>
                <StatsCard title="Events" stats="5" className=""/>
                <StatsCard title="Projects" stats="5" className=""/>
            </header>

            {/* the chart and the stats cards section */}
            <section className=" my-8 container divide-x-0 md:divide-x-2 divide-y-2 md:divide-y-0 md:flex rounded-lg overflow-hidden ">
                {/* the chart */}
                <div className="chart bg-white  md:w-3/4" >
                    <ReactEcharts option={option}  />
                </div>
                {/* the stats cards */}
                <aside className="  md:flex-col md:w-1/4 ">
                    <div className="inline-card bg-white text-center border-b-2 py-4">
                        <p className="stats-title">Active members</p>
                        <h2 className="stats-number text-2xl font-bold ">500</h2>
                    </div>
                    <div className="inline-card bg-white text-center  border-b-2 py-4">
                        <p className="stats-title">Newbies Active members</p>
                        <h2 className="stats-number text-2xl font-bold ">200</h2>
                    </div>
                    <div className="inline-card bg-white text-center  border-b-2 py-4">
                        <p className="stats-title">Percentage of active members</p>
                        <h2 className="stats-number text-2xl font-bold ">46.66%</h2>
                    </div>
                    <div className="inline-card bg-white text-center  border-b-2 py-4">
                        <p className="stats-title">Last year percentage</p>
                        <h2 className="stats-number text-2xl font-bold ">38%</h2>
                    </div>
                    <div className="inline-card bg-white text-center  py-2">
                        <p className="stats-title">Percentage</p>
                        <h2 className="stats-number text-2xl font-bold ">95%</h2>
                    </div>
                </aside>
            </section>

            {/* the tables section */}
            <section className="tables container  md:flex  gap-6">
                {/* the last events table */}
                <div className="basic-table bg-white md:w-1/2 mb-8 md:mb-0 rounded-lg">
                    <div className="table-head mb-3 flex justify-between p-4 items-center">
                            <h2 className="text-xl md:text-2xl font-bold">Last events</h2>
                        <Link className="all-link" href="#">
                        <p className="text-sm font-semibold ">View all</p>
                        </Link>
                    </div>
                    <div className="table-item flex justify-between p-4 border-b-2">
                        <p className=" text-sm font-semibold ">DevFest</p>
                        <p className=" text-sm font-semibold  text-gray-300 ">pending</p>
                    </div>
                    <div className="table-item flex justify-between p-4 border-b-2">
                        <p className=" text-sm font-semibold ">DesignFest</p>
                        <p className=" text-sm font-semibold  text-gray-300 ">Done</p>
                    </div>
                    <div className="table-item flex justify-between p-4 border-b-2">
                        <p className=" text-sm font-semibold ">IWD</p>
                        <p className=" text-sm font-semibold  text-gray-300 ">Done</p>
                    </div>
                    <div className="table-item flex justify-between p-4">
                        <p className=" text-sm font-semibold ">Pending</p>
                        <p className=" text-sm font-semibold  text-gray-300 ">pending</p>
                    </div>
                </div>
                {/* the members leaderboard table */}
                <div className="basic-table bg-white md:w-1/2 rounded-lg">
                    <div className="table-head mb-3 flex justify-between  items-center p-4">
                        <h2 className=" text-xl md:text-2xl font-bold">Members Leaderboard</h2>
                        <Link className="all-link" href="#">
                        <p className="text-sm font-semibold ">View all</p>
                        </Link>
                    </div>
                    <div className="table-item flex justify-between p-4 border-b-2">
                        <p className=" text-sm font-semibold ">Abdessamed Rezzazi</p>
                        <p className=" text-sm font-semibold  text-gray-300 ">220 contributions</p>
                    </div>
                    <div className="table-item flex justify-between p-4 border-b-2">
                        <p className=" text-sm font-semibold ">Islem Medhjahdi</p>
                        <p className=" text-sm font-semibold  text-gray-300 ">220 contributions</p>
                    </div>
                    <div className="table-item flex justify-between p-4 border-b-2">
                        <p className=" text-sm font-semibold ">Nada Hanad</p>
                        <p className=" text-sm font-semibold  text-gray-300 ">220 contributions</p>
                    </div>
                    <div className="table-item flex justify-between p-4">
                        <p className=" text-sm font-semibold ">Aness Zeredg</p>
                        <p className=" text-sm font-semibold  text-gray-300 ">p220 contributions</p>
                    </div>
                </div>
            </section>

        </main>
    );
}
 
export default Overview;