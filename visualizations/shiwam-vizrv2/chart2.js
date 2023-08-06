import React from 'react';
import { AreaChart } from 'nr1';

export default class NewsletterSignups extends React.Component {
    render() {

        return <AreaChart accountIds={[4043635]}
        query="SELECT average(host.cpuPercent) AS 'CPU used %' FROM Metric WHERE `entityGuid` = 'NDA0MzYzNXxJTkZSQXxOQXwzMTU2MzA1ODIwNzk4NjU0MjMw' TIMESERIES auto"
        fullWidth
        />;
    }
}