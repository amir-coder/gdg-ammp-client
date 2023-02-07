const   StatsCard= ({title,stats}) => {
    return ( 
        <div className="stats-card rounded-lg bg-white w-full ml-0 mb-2 md:w-1/4 py-6">
            <h2 className="font-bold stats-title text-center mb-3">{title}</h2>
            <p className="stats-number font-bold text-center text-4xl">{stats}</p>
        </div>
    );
}
 
export default StatsCard ;