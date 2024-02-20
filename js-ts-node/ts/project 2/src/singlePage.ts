
$(() => {
    renderAboutPage();
    $("nav a").on("click", function (e) {
        e.preventDefault();
        let thisPage = this.dataset.page;

        $(`content`).removeClass(`show`);
        $(`#${thisPage}`).addClass(`show`);
        let liveInterval = undefined;

        if (thisPage === "live-reports") {
            let coinsData = [];
            let coinsSymbols = []
            let seclectedCoinsData = [];

            checkedcoins.forEach(coin => {
                let coinSymbol = coins.filter(obj => obj.id === coin)
                    .map(filteredCoin => filteredCoin.symbol);
                coinsSymbols.push(coinSymbol);
            });


            var options = {
                exportEnabled: true,
                animationEnabled: true,
                title: {
                    text: "LIVE PRICES CHART"
                },
                subtitles: [{
                    text: "Click Legend to Hide or Unhide Data Series"
                }],
                axisX: {
                    title: "Date"
                },
                axisY: {
                    title: "PRICE OF BLUE LINE",
                    titleFontColor: "#4F81BC",
                    lineColor: "#4F81BC",
                    labelFontColor: "#4F81BC",
                    tickColor: "#4F81BC"
                },
                axisY2: {
                    title: "REST OF COINS",
                    titleFontColor: "#C0504E",
                    lineColor: "#C0504E",
                    labelFontColor: "#C0504E",
                    tickColor: "#C0504E"
                },
                toolTip: {
                    shared: true
                },
                legend: {
                    cursor: "pointer",
                },
                data: [{
                    type: "spline",
                    name: "Units Sold",
                    showInLegend: true,
                    xValueFormatString: "",
                    yValueFormatString: "$#,##0.#",
                    dataPoints: []
                },
                {
                    type: "spline",
                    name: "",
                    axisYType: "secondary",
                    showInLegend: true,
                    xValueFormatString: "MMM YYYY",
                    yValueFormatString: "$#,##0.#",
                    dataPoints: []
                },
                {
                    type: "spline",
                    name: "",
                    axisYType: "secondary",
                    showInLegend: true,
                    xValueFormatString: "MMM YYYY",
                    yValueFormatString: "$#,##0.#",
                    dataPoints: []
                },
                {
                    type: "spline",
                    name: "",
                    axisYType: "secondary",
                    showInLegend: true,
                    xValueFormatString: "MMM YYYY",
                    yValueFormatString: "$#,##0.#",
                    dataPoints: []
                },
                {
                    type: "spline",
                    name: "",
                    axisYType: "secondary",
                    showInLegend: true,
                    xValueFormatString: "MMM YYYY",
                    yValueFormatString: "$#,##0.#",
                    dataPoints: []
                }]
            };
            let chart = ($("#live") as any).CanvasJSChart(options);
            if (coinsSymbols.length) {
                liveInterval = setInterval(async () => {
                    await fetch(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${coinsSymbols}&tsyms=USD`)
                        .then(res => res.json())
                        .then(res => {
                            coinsData = Object.entries(res);
                            for (let i = 0; i < coinsData.length; i++) {

                                if (!seclectedCoinsData[i]) seclectedCoinsData[i] = [];
                                options.data[i].name = coinsData[i][0];
                                let coin = {
                                    x: new Date(),
                                    y: coinsData[i][1].USD
                                }
                                seclectedCoinsData[i].push(coin);
                                options.data[i].dataPoints = seclectedCoinsData[i];
                            }
                        })
                    chart.CanvasJSChart().render();
                }, 2000)
            }
        } else {
            clearInterval(liveInterval)
        }
    })
})