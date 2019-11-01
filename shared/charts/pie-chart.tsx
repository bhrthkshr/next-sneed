import Chart from "react-google-charts";

const PieChart = (props) => (
  <div className="pie-chart">
    <Chart
      width={"500px"}
      height={"300px"}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={props.chartData}
      options={{
        title: props.chartTitle
      }}
      rootProps={{ "data-testid": "1" }}
    />
  </div>
);

export default PieChart;
