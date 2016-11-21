// var dataPie = [{
//     value: 40,
//     color: "#3F51B5",
//     label: "PHP(Laravel)"
// }, {
//     value: 20,
//     color: "#FF9800",
//     label: "MySQL"
// },{
//     value: 10,
//     color: "#F44336",
//     label: "Java SE"
// },{
//     value: 40,
//     color: "#4CAF50",
//     label: "HTML&CSS(Bootstrap)"
// },{
//     value: 10,
//     color: "#616161",
//     label: "Pascal"
// },{
//     value: 30,
//     color: "#03A9F4",
//     label: "JavaScript(jQuery)"
// }];
var dataPie = {
    labels: [
        "PHP(Laravel)",
        "MySQL",
        "Java SE",
        "HTML&CSS(Bootstrap)",
        "Pascal",
        "JavaScript(jQuery)"
    ],
    datasets: [
        {
            data: [40,20,10,40,10,30],
            backgroundColor: [
                "#3F51B5",
                "#FF9800",
                "#F44336",
                "#4CAF50",
                "#616161",
                "#03A9F4"
            ],
            hoverBackgroundColor: [
                "#3F51B5",
                "#FF9800",
                "#F44336",
                "#4CAF50",
                "#616161",
                "#03A9F4"
            ]
        }]
};
// var ctx = $("#myChartPie").get(0).getContext("2d");
var ctx = document.getElementById("myChartPie");
// var pieChart = new Chart(ctx).Doughnut(dataPie);
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: dataPie,
});
