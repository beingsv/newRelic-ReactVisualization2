import React from 'react';
import { LineChart } from 'nr1';

export default class NewsletterSignups extends React.Component {
    render() {

        return <LineChart accountIds={[4043635]}
        query="SELECT average(host.net.transmitBytesPerSecond) AS 'Transmit bytes per second', average(host.net.receiveBytesPerSecond) AS 'Receive bytes per second' FROM Metric WHERE `entityGuid` = 'NDA0MzYzNXxJTkZSQXxOQXwzMTU2MzA1ODIwNzk4NjU0MjMw' TIMESERIES auto"
        fullWidth
        />;
    }
}