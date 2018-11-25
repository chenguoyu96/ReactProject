import React, {Component} from 'react';
import {Table} from "antd";

const column = [
    {
        title:"用户名",
        dataIndex:"userName"
    }
];

class Data extends Component {

    render() {
        return (
            <div>
                <Table/>
            </div>
        )
    }
}

export default Data;