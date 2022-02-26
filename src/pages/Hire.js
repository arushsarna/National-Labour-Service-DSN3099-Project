import StatusCard from 'components/StatusCard';
import TableCard from 'components/TableCard';

export default function Dashboard() {
    return (
        <>
            <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto">
                {/* <div className="container mx-auto max-w-full"> */}
                {/* <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
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
                </div> */}
            </div>

            <div className="px-3 md:px-8 h-auto -mt-24">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 px-4 mb-16">
                        <TableCard title="Name" money="Daily Wage" status="Status" pictures="Photo"
                            title1="Ramu" money1="Rs 150" status1="Open to Hire"
                            title2="Shamu" money2="Rs 150" status2="Open to Hire"
                            title3="gita" money3="Rs 150" status3="Open to Hire"
                            title4="sita" money4="Rs 150" status4="Open to Hire" />
                    </div>
                </div>
            </div>
        </>
    );
}