import LineChart from "./lineChart";
import {mapOptions, options} from "../helper/constants";
import PieChart from "./pieChart";
import {useSelector} from "react-redux";
import GeoChart from "./geoChart/geoChart";

import "./index.css";
import {useMemo} from "react";


const Charts = () => {


    const lineData = useSelector(state => state.PartnerDataDuck.lineData);

    const pieData = useMemo(() => lineData.reduce((data, item) => {
        data[0] += item.pageViews;
        data[1] += item.clicks;
        data[2] += item.signUps;
        return data;
    }, [0, 0, 0]));


    return (
        <section className={"charts"}>
            <LineChart data={lineData} options={options}/>
            <PieChart data={pieData} options={options}/>
            <GeoChart options={mapOptions}/>
        </section>
    );
};

export default Charts;