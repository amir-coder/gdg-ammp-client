
import Layout from '../../components/layout'
import StatsCard from "components/StatsCard";
import LineChart from "components/LineChart";
import BoardTable from "components/BoardTable";

export default function Overview() {

              
  const chartData= {
    xAxis:['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22'],
    thisYear: [120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210, 120],
    lastYear: [220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290, 330, 310, 220]
    }
  
                  
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
                      {/* <ReactEcharts option={option}  /> */}
                      <LineChart data={chartData}/>
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
              <BoardTable
              title="Last events"
              data={[
                  { name: "DevFest", status: "pending" },
                  { name: "DesignFest", status: "Done" },
                  { name: "IWD", status: "Done" },
                  { name: "Pending", status: "pending" }
              ]}
              viewAllHref="#"
              />
              <BoardTable
              title="Members Leaderboard"
              data={[
                  { name: "Abdessamed Rezzazi", status: "220 contributions" },
                  { name: "Islem Medhjahdi", status: "220 contributions" },
                  { name: "Nada Hanad", status: "220 contributions" },
                  { name: "Aness Zeredg", status: "220 contributions" }
              ]}
              viewAllHref="#"
              />
              </section>
  
          </main>
      );
  }



Overview.getLayout = function getLayout(page) {
  return (
      <Layout>{page}</Layout>
  )
}