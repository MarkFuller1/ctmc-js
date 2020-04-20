
import React from 'react';
import { Grid, Typography } from '@material-ui/core/';
import { globalState } from '../states/state';
import { getPlayerSalaries, getPlayerTeams } from '../API/Requests';
import { observer } from '../../node_modules/mobx-react/dist';
import {
    LineChart, Line, XAxis, YAxis, Label, Tooltip, Legend, CartesianGrid, ResponsiveContainer, Text,
    Pie, PieChart, Cell
} from 'recharts';

const GeneralPlayerStats = observer(class GeneralPlayerStats extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            playerSalaries: [],
            averageSalaries: [],
            years: [],
            salaryData: [],
            teamData: []
        }
    }
    COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#ff81e0', '#ff5e53'];

    render() {

        return (
            <div style={{ overflowX: "hidden", overflowY: "hidden" }}>
                <Grid container direction="column" justify="center" alignItems="center">
                    <Grid container direction="row" justify="flex-start" alignItems="center" spacing={5}>
                        <Grid item>
                            <LineChart width={730} height={250} data={this.state.salaryData}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis label={
                                    <Text x={0} y={0} dx={1} dy={25000} offset={0} angle={-90}>
                                        Year</Text>
                                } dataKey="yearID" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="average" stroke="#8884d8" />
                                <Line type="monotone" dataKey="salary" stroke="#82ca9d" />
                            </LineChart>
                        </Grid>
                        <Grid item>
                            <PieChart width={200} height={250} >
                                <Tooltip />
                                <Legend />
                                <Pie data={this.state.teamData} dataKey="Years" nameKey="Team" cx="50%" cy="50%"
                                    outerRadius={50} label >
                                    {
                                        this.state.teamData.map((entry, index) => <Cell key={`cell-${index}`} fill={this.COLORS[index % this.COLORS.length]} />)
                                    }
                                </Pie>
                            </PieChart>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }

    async componentDidMount() {
        const response = await getPlayerSalaries(this.props.playerID);
        const teamResponse = await getPlayerTeams(this.props.playerID);

        //Iterate through respones objects and create array of averages and salaires
        //Place year gap in legend
        let avgs = [];
        let plys = [];
        let yrs = [];
        response.forEach(x => {
            avgs.push(x["average"]);
            plys.push(x["salary"]);
            yrs.push(x["yearID"]);
        })

        this.setState({
            averageSalaries: avgs, playerSalaries: plys, years: yrs, salaryData: response,//});
            teamData: teamResponse
        });
        //console.log(this.state.averageSalaries + "IN AVERAGE I GUESS");
    }
});


export default GeneralPlayerStats;
