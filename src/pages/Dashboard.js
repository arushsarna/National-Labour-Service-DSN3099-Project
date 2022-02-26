import StatusCard from 'components/StatusCard';
import ChartLine from 'components/ChartLine';
import ChartBar from 'components/ChartBar';
import Hired from 'components/Hired';
import TrafficCard from 'components/TrafficCard';


export default function Dashboard() {
    return (
        <>
            <div className="bg-light-blue-500 px-2 md:px-4 h-20" />
            {/* 
            <div className="px-3 md:px-8 -mt-24">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 xl:grid-cols-5">
                        <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
                            <ChartLine />
                        </div>
                        <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
                            <ChartBar />
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="px-1 md:px-8 -mt-10">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4">
                        <StatusCard
                            color="pink"
                            icon="trending_up"
                            title="Notification"
                            amount="22"
                            // percentage="3.48"
                            // percentageIcon="arrow_upward"
                            // percentageColor="green"
                            date="This Week"
                        />
                        <StatusCard
                            color="orange"
                            icon="groups"
                            title="Hired Workers"
                            amount="12"
                            // percentage="3.48"
                            // percentageIcon="arrow_downward"
                            // percentageColor="red"
                            date="Since last week"
                        />
                        <StatusCard
                            color="purple"
                            icon="paid"
                            title="Transactions"
                            amount="Rs 9224"
                            // percentage="1.10"
                            // percentageIcon="arrow_downward"
                            // percentageColor="orange"
                            date="Since yesterday"
                        />
                        <StatusCard
                            color="blue"
                            icon="poll"
                            title="Word Done"
                            amount="49.65%"
                            // percentage="12"
                            // percentageIcon="arrow_upward"
                            // percentageColor="green"
                            date="Since last month"
                        />
                    </div>
                </div>
            </div>

            <div className="px-3 md:px-8 h-auto">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 xl:grid-cols-1">
                        <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
                            <Hired
                                id="ID" name="Name" money="Daily Wage" city="City"
                                id1="1" name1="Ramu" money1="Rs 150" city1="Sehore"
                                id2="2" name2="Shamu" money2="Rs 150" city2="Sehore"
                                id3="3" name3="gita" money3="Rs 150" city3="Sehore"
                                id4="4" name4="sita" money4="Rs 150" city4="Sehore" />
                        </div>
                        {/* <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
                            <TrafficCard />
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}
