function showBsPopover(id) {
  let color = $(`#${id}`).css("background-color");
  $(`#${id}`).popover("show");
}

function hideBsPopover(id) {
  $(`#${id}`).popover("hide");
}

export default {
  name: "Dashboard-mixin",

  mounted() {
    this.loadCharts();
    $(document).ready(() => {
      for (let i = 0; i < this.regions.length; i++) {
        /* let randomColor = Math.floor(Math.random() * 16222215).toString(16); */
        let id = this.regions[i].getAttribute("id");
        let title = this.regions[i].getAttribute("ipa-name");
        let climat = this.regions[i].getAttribute("climat");
        if (climat.includes("Equatorial")) {
          this.regions[i].style.fill = "#038a41";
        }
        if (climat.includes("tropical")) {
          this.regions[i].style.fill = "#f2d930";
        }
        if (climat.includes("Montagne")) {
          this.regions[i].style.fill = "#00a5ec";
        }

        this.regions[i].setAttribute(
          "data-content",
          `Inspection Provinciale Agricole de la province de ${title.bold()}`
        );
        this.regions[i].addEventListener("mouseover", () => {
          showBsPopover(id);
        });

        this.regions[i].addEventListener("mouseout", () => {
          hideBsPopover(id);
        });

        $(`table #${id}-item`).mouseover(() => {
          showBsPopover(id);
          $(`#${id}`).addClass("hovered");
        });

        $(`table #${id}-item`).mouseout(() => {
          hideBsPopover(id);
          $(`#${id}`).removeClass("hovered");
        });
      }
    });
  },

  methods: {
    loadCharts() {
      /* init circles charts */
      Circles.create({
        id: "circles-1",
        radius: 45,
        value: 60,
        maxValue: 100,
        width: 7,
        text: 5,
        colors: ["#f1f1f1", "#FF9E27"],
        duration: 400,
        wrpClass: "circles-wrp",
        textClass: "circles-text",
        styleWrapper: true,
        styleText: true,
      });

      Circles.create({
        id: "circles-2",
        radius: 45,
        value: 70,
        maxValue: 100,
        width: 7,
        text: 36,
        colors: ["#f1f1f1", "#2BB930"],
        duration: 400,
        wrpClass: "circles-wrp",
        textClass: "circles-text",
        styleWrapper: true,
        styleText: true,
      });

      Circles.create({
        id: "circles-3",
        radius: 45,
        value: 40,
        maxValue: 100,
        width: 7,
        text: 12,
        colors: ["#f1f1f1", "#F25961"],
        duration: 400,
        wrpClass: "circles-wrp",
        textClass: "circles-text",
        styleWrapper: true,
        styleText: true,
      });

      /**end circles charts init.**/

      /**bar charts init */
      var totalIncomeChart = document
        .getElementById("totalIncomeChart")
        .getContext("2d");

      var mytotalIncomeChart = new Chart(totalIncomeChart, {
        type: "bar",
        data: {
          labels: ["S", "M", "T", "W", "T", "F", "S", "S", "M", "T"],
          datasets: [
            {
              label: "Total Income",
              backgroundColor: "#ff9e27",
              borderColor: "rgb(23, 125, 255)",
              data: [6, 4, 9, 5, 4, 6, 4, 3, 8, 10],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false,
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  display: false, //this will remove only the label
                },
                gridLines: {
                  drawBorder: false,
                  display: false,
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  drawBorder: false,
                  display: false,
                },
              },
            ],
          },
        },
      });

      $("#lineChart").sparkline([105, 103, 123, 100, 95, 105, 115], {
        type: "line",
        height: "70",
        width: "100%",
        lineWidth: "2",
        lineColor: "#ffa534",
        fillColor: "rgba(255, 165, 52, .14)",
      });

      /*end bar chart init*/
    },
  },
};
