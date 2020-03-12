import React from "react";
import { Table, TableBody, TableCell, TableHead, TableRow, Tooltip } from '@material-ui/core';
import { observer } from 'mobx-react';
import { globalState } from '../states/state';

function RenderTableHead(props) {

    console.disableRedBox = true;
    console.log(props.cols);
    if (props.cols.length <= 0) {
        return (
            <TableCell>""</TableCell>
        );
    } else {
        const colNames = props.cols;

        const elements = colNames.map((colName) =>
            <TableCell key={colName}>{colName}</TableCell>
        );

        return (
            <TableRow>
                {elements}
            </TableRow>
        )
    }
}

function RenderTableBody(props) {
    console.disableRedBox = true;
    if (props.rows.length <= 0) {
        return (
            <TableCell>""</TableCell>
        );
    } else {
        const r = props.rows;
        let arry = [];

        for (let i = 0; i < props.rows.length; i++) {
            let arr = props.rows[i];
            let playerLinks = arr.playerid;
            delete arr.playerid;

            console.log(playerLinks);
            arr = Object.values(arr);

            const elements = arr.map((data) =>
                <TableCell key={data} style={{ cursor: 'pointer', }} onClick={() =>
                    window.open(globalState.frontendURL + "/player/" + playerLinks, "_blank")}>{data}</TableCell>
            );

            arry.push(
                <Tooltip title="Go To">
                    <TableRow>
                        {elements}
                    </TableRow>
                </Tooltip>
            )
        }
        return (
            <TableBody>
                {arry}
            </TableBody>
        )
    }
}

const StatsTable = observer(class StatsTable extends React.Component {

    constructor(props) {
        super();
        this.state = {
            cols: [],
            rows: [],
            playerID: []
        }
    }

    render() {
        return (
            <div>
                <Table>
                    <TableHead>
                        <RenderTableHead cols={this.state.cols} />
                    </TableHead>
                    <RenderTableBody rows={this.state.rows} />
                </Table>
            </div>
        )
    }
    componentDidMount() {
        console.log("MOUNTED STATS TABLE");
        console.log(this.props);

        this.setState({ cols: this.props.cols, rows: this.props.rows });
        console.log(this.state);
    }

});

export default function CreateLinkedTable(props) {
    console.log("in create table: " + props.cols);
    if (props.cols !== undefined && props.cols.length > 0) {
        return (
            <StatsTable rows={props.rows} cols={props.cols} />
        );
    } else {
        return (
            <div>
            </div>
        );
    }
}