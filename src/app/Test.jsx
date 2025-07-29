import React from 'react'
import { Graph } from 'react-graph-vis'


const TimeUsageData = [
    {
        id: 1,
        name: "John",
        time_creating: 10,
        time_idle: 10,
        time_editing: 10,
        time_saving: 10,
        time_deleting: 10,
        time_uploading: 10,
        time_downloading: 10,
        time_sharing: 10,
    },
    {
        id: 2,
        name: "Jane",
        time_creating: 10,
        time_idle: 10,
        time_editing: 10,
        time_saving: 10,
        time_deleting: 10,
        time_uploading: 10,
        time_downloading: 10,
        time_sharing: 10,
    }
]

const Test = () => {
    return (
        <div>
            <h1> This is a test</h1>
            <Graph>
                {TimeUsageData.map((data) => (
                    <div key={data.id}>
                        <h2>{data.name}</h2>
                        <p>Time Creating: {data.time_creating}</p>
                        <p>Time Idle: {data.time_idle}</p>
                        <p>Time Editing: {data.time_editing}</p>
                        <p>Time Saving: {data.time_saving}</p>
                        <p>Time Deleting: {data.time_deleting}</p>
                        <p>Time Uploading: {data.time_uploading}</p>
                    </div>

                ))}

            </Graph>
        </div>
    )
}

export default Test;