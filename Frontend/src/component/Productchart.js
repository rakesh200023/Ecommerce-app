import React from "react";
import { connect } from "react-redux";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { ClipLoader } from "react-spinners";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Productchart(props) {
  console.log("charts", props.products);
  const top = props.products.products.filter((i) => i.view > 5);
  console.log("charts", top);

  if (props.products.products.length <= 0) {
    return (
      <div className=" d-flex justify-content-center mt-50">
        <ClipLoader color={"red"} loading={true} size={50} />
      </div>
    );
  }
  return (
    <div className="col-sm-9">
      <h1 style={{ marginTop: "20px", textAlign: "center" }}>
        Top viewed Products
      </h1>
      {/* <Bar
        data={
          {
            // These labels appear in the legend and in the tooltips when hovering different arcs
            //   labels: ["Red", "Yellow", "Blue"],
          }
        }
        height={400}
        width={400}
      ></Bar> */}
      <Bar
        style={{ marginTop: "50px" }}
        data={{
          labels: top.map((i) => i.productName),
          datasets: [
            {
              label: "No of Views",
              data: top.map((i) => i.view),
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
              ],
              borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
              borderWidth: 1,
            },
          ],
        }}
        // height={4}
        // width={4 }
      />
    </div>
  );
}

export default connect((state) => ({ products: state.products }))(Productchart);
