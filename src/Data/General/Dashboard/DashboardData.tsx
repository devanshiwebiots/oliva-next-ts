import { ImagePath, ThemePrimary } from "@/Constant/constant";
import { CustomApexOptions, CustomMapProps, GrossCategoriesType, Position, ProductOrderTypes } from "@/Types/DashboardType";
import { ApexOptions } from "apexcharts";
import Image from "next/image";
import Link from "next/link";
import ReactApexChart from "react-apexcharts";
import { TableColumn } from "react-data-table-component";
import { Badge, Button, FormGroup, Input, Label } from "reactstrap";

const IncomeOption: ApexOptions = {
  series: [
    {
      name: "series2",
      data: [15, 25, 20, 35, 60, 30, 20, 30, 20, 35, 25, 20],
    },
  ],
  colors: [ThemePrimary, "#FFA941"],
  chart: {
    height: 95,
    type: "bar",
    sparkline: {
      enabled: true,
    },
  },
  tooltip: {
    enabled: false,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  plotOptions: {
    bar: {
      borderRadius: 3,
      distributed: true,
      columnWidth: "50%",
      barHeight: "38%",
      dataLabels: {
        position: "top",
      },
    },
  },
  responsive: [
    {
      breakpoint: 1700,
      options: {
        chart: {
          height: 86,
        },
      },
    },
    {
      breakpoint: 1699,
      options: {
        chart: {
          height: 95,
        },
      },
    },
    {
      breakpoint: 1460,
      options: {
        grid: {
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 5,
          },
        },
      },
    },
    {
      breakpoint: 376,
      options: {
        chart: {
          height: 50,
        },
      },
    },
  ],
};

const ExpenseOptions: ApexOptions = {
  series: [
    {
      name: "Desktops",
      data: [50, 50, 50, 25, 25, 25, 2, 2, 2, 25, 25, 25, 62, 62, 62, 35, 35, 35, 66, 66],
    },
  ],
  chart: {
    height: 100,
    type: "area",
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 5,
      left: 0,
      blur: 2,
      color: "#008dab",
      opacity: 0.2,
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.5,
      opacityTo: 0.1,
      stops: [0, 90, 100],
    },
  },
  tooltip: {
    enabled: false,
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  stroke: {
    curve: "straight",
    width: 2,
  },
  markers: {
    discrete: [
      {
        seriesIndex: 0,
        dataPointIndex: 12,
        fillColor: "#008dab",
        strokeColor: "#fff",
        size: 5,
        shape: "circle",
      },
    ],
  },
};

export const TotalEarningCardsData = [
  {
    id: 1,
    title: "Total Earning",
    rate: "20.790",
    lastWeek: 16.06,
    chart: {
      ...IncomeOption,
      series: IncomeOption.series,
      type: IncomeOption.chart?.type,
    },
  },
  {
    id: 2,
    title: "Total Expense",
    rate: "4683.90",
    lastWeek: 10.34,
    chart: {
      ...ExpenseOptions,
      series: ExpenseOptions.series,
      type: ExpenseOptions.chart?.type,
    },
  },
];

export const MonthlyDropdownList = ["Weekly", "Monthly", "Yearly"];

export const CustomerCardData = [
  {
    id: 1,
    divClass: "col-xxl-3 col-xl-50 col-sm-6 proorder-xl-2",
    color: "primary",
    title: "Customers",
    rate: "1.485",
    icon: "male",
    percent: 4.6,
  },
  {
    id: 2,
    divClass: "col-xxl-3 col-xl-50 col-sm-6 proorder-xl-3",
    bodyClass: "money",
    color: "secondary",
    title: "Revenue",
    rate: "$5.873",
    icon: "money",
    percent: 3.1,
  },
  {
    id: 3,
    divClass: "col-xxl-3 col-xl-50 col-sm-6 proorder-xl-4",
    bodyClass: "profit",
    color: "danger",
    title: "Profit",
    rate: "70%",
    icon: "profile",
    percent: 2.3,
  },
  {
    id: 4,
    divClass: "col-xxl-3 col-xl-50 col-sm-6 proorder-xl-5",
    bodyClass: "invoice-profit",
    color: "success",
    title: "Invoices",
    rate: "1.256",
    icon: "invoice",
    percent: 6.3,
  },
];

export const SalesOverviewOptions: ApexOptions = {
  series: [
    {
      name: "TEAM A",
      type: "area",
      data: [183, 175, 170, 178, 185, 171, 177, 185, 170, 180, 175, 170],
    },
    {
      name: "TEAM B",
      type: "line",
      data: [183, 193, 170, 182, 200, 180, 185, 178, 165, 175, 190, 190],
    },
  ],
  chart: {
    height: 288,
    type: "line",
    stacked: false,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  stroke: {
    curve: "smooth",
    width: [3, 3],
    dashArray: [0, 4],
  },
  grid: {
    show: true,
    borderColor: "#000000",
    strokeDashArray: 0,
    position: "back",
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  markers: {
    discrete: [
      {
        seriesIndex: 0,
        dataPointIndex: 2,
        fillColor: "#fff",
        strokeColor: "#000",
        size: 7,
        shape: "circle",
      },
      {
        seriesIndex: 0,
        dataPointIndex: 4,
        fillColor: "#fff",
        strokeColor: "#000",
        size: 7,
        shape: "circle",
      },
      {
        seriesIndex: 0,
        dataPointIndex: 6,
        fillColor: "#fff",
        strokeColor: "#000",
        size: 7,
        shape: "circle",
      },
      {
        seriesIndex: 0,
        dataPointIndex: 9,
        fillColor: "#fff",
        strokeColor: "#000",
        size: 7,
        shape: "circle",
      },
    ],
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if (typeof y !== "undefined") {
          return y.toFixed(0) + " points";
        }
        return y;
      },
    },
  },
  legend: {
    show: false,
  },
  colors: ["#008dab", "#EAEAEA"],
  fill: {
    type: ["gradient", "solid", "gradient"],
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 1,
      gradientToColors: ["#008dab", "#fff5f7", "#008dab"],
      inverseColors: true,
      opacityFrom: 0.4,
      opacityTo: 0,
      stops: [0, 100, 100, 100],
    },
  },
  xaxis: {
    labels: {
      style: {
        fontFamily: "Outfit, sans-serif",
        fontWeight: 500,
        colors: "#8D8D8D",
      },
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1440,
      options: {
        chart: {
          height: 220,
        },
      },
    },
  ],
};

export const ActiveTasksData = [
  {
    id: 1,
    title: "Regina Cooper",
    text: "Create userflow social application design",
  },
  {
    id: 2,
    title: "Install Appointment",
    text: "Homepage design for slimmuch product",
  },
  {
    id: 3,
    title: "Regina Cooper",
    text: "Interactive prototype design - web design",
  },
  {
    id: 4,
    title: "Regina Cooper",
    text: "Create Application design for topbuzz",
  },
];

export const EarnedOptions: ApexOptions = {
  series: [
    {
      name: "Desktops",
      data: [50, 50, 50, 25, 25, 25, 2, 2, 2, 25, 25, 25, 62, 62],
    },
  ],
  chart: {
    type: "area",
    height: 200,
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 5,
      left: 0,
      blur: 2,
      color: "#008dab",
      opacity: 0.2,
    },
  },
  colors: ["#008dab"],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.6,
      opacityTo: 0.2,
      stops: [0, 100, 100],
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
};

export const CategoriesOptions: ApexOptions = {
  series: [52, 35, 15, 45],
  chart: {
    type: "donut",
    height: 200,
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  responsive: [
    {
      breakpoint: 1700,
      options: {
        chart: {
          height: 150,
        },
      },
    },
    {
      breakpoint: 1441,
      options: {
        chart: {
          height: 205,
        },
      },
    },
    {
      breakpoint: 421,
      options: {
        chart: {
          height: 170,
        },
      },
    },
  ],
  plotOptions: {
    pie: {
      expandOnClick: false,
      donut: {
        size: "70%",
        labels: {
          show: true,
          value: {
            offsetY: 5,
          },
          total: {
            show: true,
            fontSize: "14px",
            color: "#9B9B9B",
            fontFamily: "Outfit', sans-serif",
            fontWeight: 400,
            label: "Total",
            formatter: () => "60%",
          },
        },
      },
    },
  },
  yaxis: {
    labels: {
      formatter: function (val) {
        return val / 100 + "$";
      },
    },
  },
  colors: ["#008dab", "#da9817", "#479447cf", "#e87f24"],
};

export const CategoriesSalesData = [
  {
    id: 1,
    color: "primary",
    title: "Income",
    rate: "21,654",
  },
  {
    id: 2,
    color: "secondary",
    title: "Visitors",
    rate: "62,842",
  },
  {
    id: 3,
    color: "danger",
    title: "Expense",
    rate: "37,210",
  },
];

export const OrderOverviewData = [
  {
    id: 1,
    value: 40,
    text: "Online Order",
    color: "primary",
  },
  {
    id: 2,
    value: 60,
    text: "Offline Order",
    color: "secondary",
  },
  {
    id: 3,
    value: 20,
    text: "Cash On Develery",
    color: "danger",
  },
];

export const MonthlyGrowthOptions: ApexOptions = {
  series: [
    {
      name: "Growth",
      data: [0, 14, 5, 20, 14, 30],
    },
  ],
  chart: {
    height: 120,
    type: "line",
    stacked: true,
    offsetY: 40,
    toolbar: {
      show: false,
    },
  },
  grid: {
    show: false,
    borderColor: "#000000",
    strokeDashArray: 0,
    position: "back",
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  colors: ["#008dab"],
  stroke: {
    width: 3,
    curve: "smooth",
  },
  xaxis: {
    labels: {
      show: false,
    },
    tickAmount: 0,
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    min: -10,
    max: 40,
    labels: {
      show: false,
    },
  },
  markers: {
    discrete: [
      {
        seriesIndex: 0,
        dataPointIndex: 0,
        fillColor: "#008dab",
        strokeColor: "#008dab",
        size: 4,
        shape: "circle",
      },
      {
        seriesIndex: 0,
        dataPointIndex: 1,
        fillColor: "#008dab",
        strokeColor: "#008dab",
        size: 4,
        shape: "circle",
      },
      {
        seriesIndex: 0,
        dataPointIndex: 2,
        fillColor: "#008dab",
        strokeColor: "#008dab",
        size: 4,
        shape: "circle",
      },
      {
        seriesIndex: 0,
        dataPointIndex: 3,
        fillColor: "#008dab",
        strokeColor: "#008dab",
        size: 4,
        shape: "circle",
      },
      {
        seriesIndex: 0,
        dataPointIndex: 4,
        fillColor: "#008dab",
        strokeColor: "#008dab",
        size: 4,
        shape: "circle",
      },
      {
        seriesIndex: 0,
        dataPointIndex: 5,
        fillColor: "#fff",
        strokeColor: "#008dab",
        size: 5,
        shape: "circle",
      },
    ],
  },
};

export const invoicesCard: ApexOptions = {
  series: [
    {
      data: [40, 50, 50, 50, 25, 25, 25, 60, 60, 60, 60, 45, 45, 45, 45, 25, 25, 25, 25, 25, 60],
    },
  ],
  chart: {
    type: "line",
    height: 70,
    sparkline: {
      enabled: true,
    },
    dropShadow: {
      enabled: true,
      top: 8,
      left: 3,
      blur: 2,
      color: "#008dab",
      opacity: 0.4,
    },
  },
  stroke: {
    curve: "stepline",
    width: 2,
  },
  colors: ["#008dab"],
  fill: {
    opacity: [0.5, 0.25, 1],
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  markers: {
    hover: {
      sizeOffset: 4,
    },
    discrete: [
      {
        seriesIndex: 0,
        dataPointIndex: 1,
        fillColor: "#fff",
        strokeColor: "#008dab",
        size: 3,
        shape: "circle",
      },
      {
        seriesIndex: 0,
        dataPointIndex: 4,
        fillColor: "#fff",
        strokeColor: "#008dab",
        size: 3,
        shape: "circle",
      },
      {
        seriesIndex: 0,
        dataPointIndex: 7,
        fillColor: "#fff",
        strokeColor: "#008dab",
        size: 3,
        shape: "circle",
      },
      {
        seriesIndex: 0,
        dataPointIndex: 11,
        fillColor: "#fff",
        strokeColor: "#008dab",
        size: 3,
        shape: "circle",
      },
      {
        seriesIndex: 0,
        dataPointIndex: 15,
        fillColor: "#fff",
        strokeColor: "#008dab",
        size: 3,
        shape: "circle",
      },
      {
        seriesIndex: 0,
        dataPointIndex: 20,
        fillColor: "#fff",
        strokeColor: "#008dab",
        size: 3,
        shape: "circle",
      },
    ],
  },
  responsive: [
    {
      breakpoint: 1320,
      options: {
        chart: {
          offsetX: 0,
        },
      },
    },
    {
      breakpoint: 1236,
      options: {
        chart: {
          height: 80,
        },
      },
    },
    {
      breakpoint: 381,
      options: {
        chart: {
          width: 200,
          offsetX: 25,
        },
      },
    },
  ],
};

export const WebCardData = [
  {
    id: 1,
    md: 6,
    color: "primary",
    icon: "improvement",
    title: "Web & mobile app",
    text: "Dribble Presentation",
    comment: [
      { id: 1, icon: "calendar", spanText: "June 18,2023" },
      { id: 2, icon: "message", spanText: "18" },
      { id: 3, icon: "link", spanText: "08" },
    ],
    customers: [
      { id: 1, image: "1.png" },
      { id: 2, image: "2.png" },
      { id: 3, image: "3.png" },
    ],
    progressValue: 70,
  },
  {
    id: 2,
    md: 6,
    divClass: "nft-card",
    color: "success",
    icon: "NFT",
    title: "NFT website design",
    text: "Pinterest Promotion",
    comment: [
      { id: 1, icon: "calendar", spanText: "June 15,2023" },
      { id: 2, icon: "message", spanText: "20" },
      { id: 3, icon: "link", spanText: "10" },
    ],
    customers: [
      { id: 1, image: "8.png" },
      { id: 2, image: "4.png" },
      { id: 3, image: "7.png" },
    ],
    progressValue: 60,
  },
  {
    id: 3,
    md: 12,
    divClass: "twitter-card",
    color: "danger",
    icon: "management",
    title: "Project dashboard",
    text: "Twitter Marketing",
    comment: [
      { id: 1, icon: "calendar", spanText: "June 25,2023" },
      { id: 2, icon: "message", spanText: "30" },
      { id: 3, icon: "link", spanText: "12" },
    ],
    customers: [
      { id: 1, image: "9.png" },
      { id: 2, image: "5.png" },
      { id: 3, image: "6.png" },
    ],
    progressValue: 50,
  },
];

export const BudgetCardData = [
  {
    id: 1,
    color: "primary",
    icon: "design",
    title: "Design",
    price: " 35,842.00",
  },
  {
    id: 2,
    color: "secondary",
    icon: "development",
    iconClass: "ms-1",
    title: "Development",
    price: " 5,647.00",
  },
  {
    id: 3,
    color: "danger",
    icon: "other",
    iconClass: "mt-2",
    title: "Others",
    price: " 3,237.00",
  },
];

export const BudgetOptions: ApexOptions = {
  series: [
    {
      name: "Desktops",
      data: [15, 14, 11, 20, 10, 15, 11],
    },
  ],
  chart: {
    type: "area",
    height: 120,
    offsetY: 10,
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 5,
      left: 0,
      blur: 2,
      color: "#008dab",
      opacity: 0.2,
    },
  },
  colors: ["#008dab"],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.6,
      opacityTo: 0.2,
      stops: [0, 100, 100],
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  markers: {
    discrete: [
      {
        seriesIndex: 0,
        dataPointIndex: 3,
        fillColor: "#008dab",
        strokeColor: "#fff",
        size: 6,
        shape: "circle",
      },
    ],
  },
};

export const ProjectOptions: CustomApexOptions = {
  series: [
    {
      name: "TEAM A",
      type: "column",
      data: [220, 0, 250, 0, 210, 0, 210, 0, 270, 0, 220, 0, 250, 0, 260, 0, 210, 0, 230],
    },
    {
      name: "TEAM B",
      type: "area",
      data: [210, 170, 240, 160, 200, 170, 200, 150, 260, 170, 210, 170, 240, 160, 250, 140, 200, 140, 220, 220],
    },
  ],
  chart: {
    height: 355,
    type: "area",
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  stroke: {
    width: [0, 2, 5],
    curve: "stepline",
  },
  plotOptions: {
    bar: {
      columnWidth: "100px",
    },
  },
  colors: ["#bebebe", "#008dab"],
  dropShadow: {
    enabled: true,
    top: 5,
    left: 6,
    bottom: 5,
    blur: 2,
    color: "#008dab",
    opacity: 0.5,
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.5,
      opacityTo: 0.1,
      stops: [0, 90, 100],
    },
  },
  grid: {
    show: true,
    strokeDashArray: 3,
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  xaxis: {
    categories: ["Jan", "", "feb", "", "Mar", "", "Apr", "", "May", "", "Jun", "", "July", "", "Aug", "", "Sep", "", "Oct", ""],
    labels: {
      style: {
        fontFamily: "Outfit, sans-serif",
        fontWeight: 500,
        colors: "#8D8D8D",
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  yaxis: {
    labels: {
      style: {
        fontFamily: "Outfit, sans-serif",
        fontWeight: 500,
        colors: "#8D8D8D",
      },
    },
  },
  legend: {
    show: false,
  },
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex }) {
      return '<div class="apex-tooltip p-2">' + "<span>" + '<span class="bg-primary">' + "</span>" + "Project Created" + "<h3>" + "$" + series[seriesIndex][dataPointIndex] + "<h3/>" + "</span>" + "</div>";
    },
  },
};

export const DiscountSliderOptions = {
  dots: true,
  AutoPlay: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
};

export const DiscountCardData = [
  {
    id: 1,
    brand: "IPhone 14 Pro",
    discount: 21.45,
    price: 65.4,
    deal: 48,
    time: [
      { id: 1, digit: 28, text: "Days" },
      { id: 2, digit: 3, text: "Hours" },
      { id: 3, digit: 14, text: "Min" },
      { id: 4, digit: 45, text: "Sec" },
    ],
    image: "7.png",
  },
  {
    id: 2,
    brand: "Apple Airpods",
    discount: 20.35,
    price: 35.43,
    deal: 38,
    time: [
      { id: 1, digit: 20, text: "Days" },
      { id: 2, digit: 5, text: "Hours" },
      { id: 3, digit: 30, text: "Min" },
      { id: 4, digit: 15, text: "Sec" },
    ],
    image: "8.png",
  },
  {
    id: 3,
    brand: "Apple Watch Series 7",
    discount: 25.3,
    price: 45.4,
    deal: 25,
    time: [
      { id: 1, digit: 15, text: "Days" },
      { id: 2, digit: 6, text: "Hours" },
      { id: 3, digit: 18, text: "Min" },
      { id: 4, digit: 30, text: "Sec" },
    ],
    image: "9.png",
  },
];

export const animateImageList = ["code", "write", "chat", "setting"];

export const admissionRatioOption: ApexOptions = {
  series: [
    {
      name: "",
      data: [30, 32.31, 31.47, 30.69, 29.32, 31.65, 31.13, 31.77, 31.79, 31.67, 32.39, 32.63, 32.89, 31.99, 31.23, 31.57, 30.84, 31.07, 31.41, 31.17, 32.37, 32.19, 32.51, 32.37, 32.51, 32.65, 32.64, 32.27, 32.1, 32.91, 33.65, 33.8, 33.92],
    },
  ],
  chart: {
    type: "area",
    height: 115,
    offsetX: 0,
    toolbar: {
      show: false,
    },
  },
  stroke: {
    width: 2,
    curve: "straight",
  },
  grid: {
    show: false,
    borderColor: "var(--light)",
    padding: {
      top: 5,
      right: 0,
      bottom: -30,
      left: 0,
    },
  },
  fill: {
    type: ["gradient"],
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 1,
      gradientToColors: ["#008dab"],
      inverseColors: true,
      opacityFrom: 0.5,
      opacityTo: 0,
      stops: [0, 100, 100, 100],
    },
  },
  dataLabels: {
    enabled: false,
  },
  colors: ["#008dab"],
  xaxis: {
    labels: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    opposite: false,
    min: 29,
    max: 35,
    logBase: 100,
    tickAmount: 4,
    forceNiceScale: false,
    floating: false,
    decimalsInFloat: undefined,
    labels: {
      show: false,
      offsetX: -12,
      offsetY: -15,
      rotate: 0,
    },
  },
  legend: {
    horizontalAlign: "left",
  },
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex }) {
      return '<div class="apex-tooltip p-2">' + "<span>" + '<span class="bg-primary">' + "</span>" + "Sales" + "<h3>" + "$" + series[seriesIndex][dataPointIndex] + "<h3/>" + "</span>" + "</div>";
    },
  },
};

export const newCustomersData = [
  {
    id: 1,
    image: "10.jpg",
    name: "Rachel Green",
    email: "Rache87@.com",
    product: "Headphone",
    sale: "564",
    rate: "239",
  },
  {
    id: 2,
    image: "11.jpg",
    name: "Fran Loain",
    email: "fran34@.com",
    product: "Fashion",
    sale: "654",
    rate: "326",
  },
  {
    id: 3,
    image: "12.jpg",
    name: "Loie Fenter",
    email: "loie234@.com",
    product: "Bookshop",
    sale: "347",
    rate: "254.23",
  },
];

export const grossCategoriesData: GrossCategoriesType[] = [
  {
    id: 1,
    image: "10.png",
    product: "Headphone",
    orderId: "#203565",
    date: "15/02/24",
    amount: "$512",
    status: "In Stock",
    statusColor: "primary",
    quantity: "20 PCS",
  },
  {
    id: 2,
    image: "11.png",
    product: "Asus tuf f15",
    orderId: "#568923",
    date: "30/03/24",
    amount: "$618",
    status: "Low Stock",
    statusColor: "success",
    quantity: "03 PCS",
  },
  {
    id: 3,
    image: "12.png",
    product: "Iphone 13",
    orderId: "#956874",
    date: "20/05/24",
    amount: "$510",
    status: "In Stock",
    statusColor: "primary",
    quantity: "01 PCS",
  },
  {
    id: 4,
    image: "13.png",
    product: "Mi Smart Watch",
    orderId: "#365894",
    date: "11/08/24",
    amount: "$200",
    status: "Full Stock",
    statusColor: "warning",
    quantity: "10 PCS",
  },
];

export const grossCategoriesColumns: TableColumn<GrossCategoriesType>[] = [
  {
    name: (
      <FormGroup check>
        <Input type="checkbox" value="" />
        <Label check></Label>
      </FormGroup>
    ),
    sortable: false,
    cell: () => {
      return (
        <FormGroup check>
          <Input type="checkbox" value="" />
          <Label check></Label>
        </FormGroup>
      );
    },
    width: "5%",
  },
  {
    name: "Product name",
    selector: (row) => row.product,
    sortable: true,
    cell: (row) => (
      <div className="d-flex">
        <div className="flex-shrink-0">
          <Image src={`${ImagePath}/dashboard-2/product/${row.image}`} width={42} height={42} alt="" />
        </div>
        <div className="flex-grow-1 ms-3">
          <Link href={`/app/ecommerce/product-list`}>
            <h6>{row.product}</h6>
          </Link>
        </div>
      </div>
    ),
  },
  {
    name: "Order ID",
    selector: (row) => row.orderId,
    sortable: true,
  },
  {
    name: "Date",
    selector: (row) => row.date,
    sortable: true,
  },
  {
    name: "Amount",
    selector: (row) => row.amount,
    sortable: true,
  },
  {
    name: "Status",
    selector: (row) => row.status,
    sortable: true,
    cell: (row) => <Button color={row.statusColor}>{row.status}</Button>,
  },
  {
    name: "Quantity",
    selector: (row) => row.quantity,
    sortable: true,
  },
];

export const revenueChart: ApexOptions = {
  series: [
    {
      name: "Earning",
      data: [78, 45, 60, 78, 78, 45, 25, 50, 60, 60, 78, 40],
    },
    {
      name: "Expense",
      data: [-70, -70, -40, -30, -70, -30, -25, -45, -40, -50, -70, -50],
    },
  ],
  chart: {
    type: "bar",
    height: 330,
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  colors: ["#e87f24", "#008dab"],
  plotOptions: {
    bar: {
      columnWidth: "70%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  stroke: {
    width: 10,
    colors: ["#fff"],
  },
  grid: {
    show: false,
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    labels: {
      style: {
        fontSize: "13px",
        colors: "#959595",
        fontFamily: "Lexend, sans-serif",
      },
    },
    axisBorder: {
      show: true,
    },
    axisTicks: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1501,
      options: {
        plotOptions: {
          bar: {
            columnWidth: "90%",
          },
        },
      },
    },
    {
      breakpoint: 480,
      options: {
        plotOptions: {
          bar: {
            columnWidth: "130%",
          },
        },
      },
    },
  ],
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex }) {
      return '<div class="apex-tooltip p-2">' + "<span>" + '<span class="bg-primary">' + "</span>" + "Earning" + "<h3>" + "$" + series[seriesIndex][dataPointIndex] + "<h3/>" + "</span>" + "</div>";
    },
  },
};

export const companyViewChart: ApexOptions = {
  series: [
    {
      name: "This Month ",
      type: "area",
      data: [215, 260, 360, 420, 320, 280, 360],
    },
    {
      name: "This Month",
      type: "area",
      data: [90, 130, 280, 350, 400, 350, 400],
    },
  ],
  chart: {
    height: 380,
    type: "area",
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: [3, 3],
    curve: "straight",
    dashArray: [0, 6],
  },
  colors: ["#e87f24", "#008dab"],
  markers: {
    discrete: [
      {
        seriesIndex: 0,
        dataPointIndex: 0,
        fillColor: "#fff",
        strokeColor: "#e87f24",
        size: 5,
        shape: "circle",
      },
      {
        seriesIndex: 0,
        dataPointIndex: 1,
        fillColor: "#fff",
        strokeColor: "#e87f24",
        size: 5,
        shape: "circle",
      },
      {
        seriesIndex: 0,
        dataPointIndex: 2,
        fillColor: "#fff",
        strokeColor: "#e87f24",
        size: 5,
        shape: "circle",
      },
      {
        seriesIndex: 0,
        dataPointIndex: 3,
        fillColor: "#fff",
        strokeColor: "#e87f24",
        size: 5,
        shape: "circle",
      },
      {
        seriesIndex: 0,
        dataPointIndex: 4,
        fillColor: "#fff",
        strokeColor: "#e87f24",
        size: 5,
        shape: "circle",
      },
      {
        seriesIndex: 0,
        dataPointIndex: 5,
        fillColor: "#fff",
        strokeColor: "#e87f24",
        size: 5,
        shape: "circle",
      },
      {
        seriesIndex: 0,
        dataPointIndex: 6,
        fillColor: "#fff",
        strokeColor: "#e87f24",
        size: 5,
        shape: "circle",
      },
    ],
  },
  xaxis: {
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      style: {
        fontSize: "13px",
        colors: "#959595",
        fontFamily: "Lexend, sans-serif",
      },
    },
  },
  yaxis: {
    labels: {
      formatter: function (val) {
        return val + "" + "k";
      },
      style: {
        fontSize: "14px",
        colors: "$black",
        fontWeight: 500,
        fontFamily: "Lexend, sans-serif",
      },
    },
  },
  fill: {
    colors: ["#e87f24", "#008dab"],
    type: ["gradient", "gradient"],
    gradient: {
      shade: "light",
      type: "vertical",
      opacityFrom: 0.5,
      opacityTo: 0.1,
      stops: [0, 100, 0, 0],
    },
  },
  grid: {
    borderColor: "#f1f1f1",
  },
  legend: {
    show: false,
  },
  responsive: [
    {
      breakpoint: 1200,
      options: {
        chart: {
          height: 330,
        },
      },
    },
    {
      breakpoint: 480,
      options: {
        plotOptions: {
          bar: {
            columnWidth: "150%",
          },
        },
      },
    },
  ],
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex }) {
      return '<div class="apex-tooltip p-2">' + "<span>" + '<span class="bg-primary">' + "</span>" + "Deliveries" + "<h3>" + "$" + series[seriesIndex][dataPointIndex] + "<h3/>" + "</span>" + "</div>";
    },
  },
};

export const newsUpdateData = [
  {
    id: 1,
    image: "1.png",
    title: "Wikipedia project application review.",
    text: "Today's newspaper headlines...",
    time: "4hr ago",
  },
  {
    id: 2,
    image: "2.png",
    title: "Develop your company's logo.",
    text: "check out the latest...",
    time: "6hr ago",
  },
  {
    id: 3,
    image: "3.png",
    title: "Commercial project research",
    text: "Articles in English: Get...",
    time: "8 Jun",
  },
  {
    id: 4,
    image: "4.png",
    title: "Recruiting in the Department",
    text: "Technology and...",
    time: "23 Jun",
  },
  {
    id: 5,
    image: "5.png",
    title: "Corporate research on the project",
    text: "Contributions private...",
    time: "25 july",
  },
];

export const goalOverviewChart: ApexOptions = {
  series: [65],
  chart: {
    height: 390,
    type: "radialBar",
    offsetY: -10,
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      inverseOrder: true,
      hollow: {
        margin: 20,
        size: "65%",
        image: `${ImagePath}/logo/chart-logo.png`,
        imageWidth: 80,
        imageHeight: 80,
        imageClipped: false,
        background: "#008dab1a",
        dropShadow: {
          enabled: false,
          top: 0,
          left: 0,
          blur: 1,
          opacity: 0.3,
        },
      },
      track: {
        opacity: 0.7,
      },
      dataLabels: {
        name: {
          fontSize: "16px",
          color: "#000",
          offsetY: 150,
        },
        value: {
          offsetY: 110,
          fontSize: "20px",
          color: "#008dab",
          formatter: function (val) {
            return val + "%";
          },
        },
      },
    },
  },
  responsive: [
    {
      breakpoint: 1600,
      options: {
        chart: {
          height: 300,
        },
        plotOptions: {
          radialBar: {
            hollow: {
              imageWidth: 60,
              imageHeight: 60,
            },
          },
        },
      },
    },
    {
      breakpoint: 1330,
      options: {
        chart: {
          height: 250,
        },
        plotOptions: {
          dataLabels: {
            show: false,
          },
        },
      },
    },
    {
      breakpoint: 1200,
      options: {
        chart: {
          height: 380,
        },
        plotOptions: {
          dataLabels: {
            show: false,
          },
        },
      },
    },
    {
      breakpoint: 360,
      options: {
        chart: {
          height: 300,
        },
        plotOptions: {
          dataLabels: {
            show: false,
          },
        },
      },
    },
  ],
  labels: ["Goal In Progress"],
  colors: ["#008dab"],
};

export const totalLikesOption: ApexOptions = {
  series: [
    {
      name: "series2",
      data: [0, 40, 25, 80, 35, 40, 38, 50, 35, 70, 40, 100, 20],
    },
  ],
  chart: {
    height: 105,
    type: "area",
    sparkline: {
      enabled: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  colors: ["#008dab"],
  fill: {
    type: ["gradient"],
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 1,
      gradientToColors: ["#008dab"],
      inverseColors: true,
      opacityFrom: 0.6,
      opacityTo: 0,
      stops: [0, 100, 100, 100],
    },
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex }) {
      return '<div class="apex-tooltip p-2">' + "<span>" + '<span class="bg-primary">' + "</span>" + "Total-Sales" + "<h3>" + "$" + series[seriesIndex][dataPointIndex] + "<h3/>" + "</span>" + "</div>";
    },
  },
};

export const visitorChart: ApexOptions = {
  series: [
    {
      name: "series2",
      data: [60, 50, 114, 65, 56, 93, 50, 72, 60, 50, 114, 65, 56],
    },
  ],
  colors: ["#e87f2433", "#e87f2433", "#e87f2433", "#e87f2433", "#e87f24", "#e87f24", "#e87f24", "#e87f24", "#e87f24", "#e87f2433", "#e87f2433", "#e87f2433", "#e87f2433"],
  chart: {
    height: 105,
    type: "bar",
    offsetY: 25,
    sparkline: {
      enabled: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      distributed: true,
      barHeight: "35%",
      dataLabels: {
        position: "top",
      },
    },
  },
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex }) {
      return '<div class="apex-tooltip p-2">' + "<span>" + '<span class="bg-primary">' + "</span>" + "Total-Visitors" + "<h3>" + "$" + series[seriesIndex][dataPointIndex] + "<h3/>" + "</span>" + "</div>";
    },
  },
};

export const totalSaleData = [
  {
    id: 1,
    color: "primary",
    icon: "fill-Buy",
    rate: "65.340",
    title: "Total Sales",
    percent: "5.8",
    chart: {
      ...totalLikesOption,
      series: totalLikesOption.series,
      type: totalLikesOption.chart?.type,
      height: totalLikesOption.chart?.height,
    },
  },
  {
    id: 2,
    color: "secondary",
    icon: "user",
    rate: "54.568",
    title: "Total Visitor",
    percent: "9.2",
    chart: {
      ...visitorChart,
      series: visitorChart.series,
      type: visitorChart.chart?.type,
      height: visitorChart.chart?.height,
    },
  },
];

export const sellingProductData = [
  {
    id: 1,
    image: "1.png",
    name: "Nike Sports NK",
    subText: "Free delivery",
    customer: "Rodney Cannon",
    email: "rodney@gmail.com",
    progressValue: 80,
    progressColor: "primary",
    total: "18.00",
    shipping: "512.00",
  },
  {
    id: 2,
    image: "2.png",
    name: "Women Bag",
    subText: "$83.97 delivery",
    customer: "Mike franklin",
    email: "mike@gmail.com",
    progressValue: 60,
    progressColor: "secondary",
    total: "62.00",
    shipping: "325.00",
  },
  {
    id: 3,
    image: "3.png",
    name: "Sunglasses",
    subText: "Free delivery",
    customer: "Louis Franklin",
    email: "louis@gmail.com",
    progressValue: 50,
    progressColor: "success",
    total: "51.00",
    shipping: "956.00",
  },
];

export const saleChart: ApexOptions = {
  series: [
    {
      data: [30, 20, 25, 15, 35, 38, 49, 38, 45, 35, 55, 57],
    },
  ],
  chart: {
    width: 180,
    height: 120,
    type: "line",
    toolbar: {
      show: false,
    },
    offsetY: 10,
    dropShadow: {
      enabled: false,
    },
  },
  grid: {
    show: false,
  },
  colors: ["#008dab"],
  stroke: {
    width: 2,
    curve: "smooth",
  },
  labels: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"],
  markers: {
    size: 0,
  },
  xaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
  tooltip: {
    marker: {
      show: false,
    },
    x: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1790,
      options: {
        chart: {
          width: 150,
        },
      },
    },
    {
      breakpoint: 1660,
      options: {
        chart: {
          width: 120,
        },
      },
    },
    {
      breakpoint: 1520,
      options: {
        chart: {
          width: 100,
        },
      },
    },
    {
      breakpoint: 1200,
      options: {
        chart: {
          width: 180,
          height: 120,
          offsetX: -10,
        },
      },
    },
    {
      breakpoint: 992,
      options: {
        chart: {
          width: 130,
          height: 120,
          offsetX: 10,
        },
      },
    },
    {
      breakpoint: 768,
      options: {
        chart: {
          width: 180,
          height: 120,
          offsetX: 0,
        },
      },
    },
    {
      breakpoint: 380,
      options: {
        chart: {
          width: 110,
          height: 120,
          offsetX: 0,
        },
      },
    },
  ],
};

export const orderChart: ApexOptions = {
  series: [
    {
      data: [30, 20, 28, 20, 28, 17, 50, 45, 63, 52, 66, 30],
    },
  ],
  chart: {
    width: 180,
    height: 120,
    type: "line",
    toolbar: {
      show: false,
    },
    offsetY: 10,
    dropShadow: {
      enabled: false,
    },
  },
  grid: {
    show: false,
  },
  colors: ["#008dab"],
  stroke: {
    width: 2,
    curve: "smooth",
  },
  labels: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"],
  markers: {
    size: 0,
  },
  xaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
  tooltip: {
    marker: {
      show: false,
    },
    x: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1790,
      options: {
        chart: {
          width: 150,
        },
      },
    },
    {
      breakpoint: 1660,
      options: {
        chart: {
          width: 120,
        },
      },
    },
    {
      breakpoint: 1520,
      options: {
        chart: {
          width: 100,
        },
      },
    },
    {
      breakpoint: 1200,
      options: {
        chart: {
          width: 180,
          height: 120,
          offsetX: -10,
        },
      },
    },
    {
      breakpoint: 992,
      options: {
        chart: {
          width: 130,
          height: 120,
          offsetX: 10,
        },
      },
    },
    {
      breakpoint: 768,
      options: {
        chart: {
          width: 180,
          height: 120,
          offsetX: 0,
        },
      },
    },
    {
      breakpoint: 380,
      options: {
        chart: {
          width: 110,
          height: 120,
          offsetX: 0,
        },
      },
    },
  ],
};

export const deliveryChart: ApexOptions = {
  series: [
    {
      data: [55, 30, 40, 35, 50, 35, 32, 10, 60, 15, 20, 30],
    },
  ],
  chart: {
    width: 180,
    height: 120,
    type: "line",
    toolbar: {
      show: false,
    },
    offsetY: 10,
    dropShadow: {
      enabled: false,
    },
  },
  grid: {
    show: false,
  },
  colors: ["#da9817"],
  stroke: {
    width: 2,
    curve: "smooth",
  },
  labels: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"],
  markers: {
    size: 0,
  },
  xaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
  tooltip: {
    marker: {
      show: false,
    },
    x: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1790,
      options: {
        chart: {
          width: 150,
        },
      },
    },
    {
      breakpoint: 1660,
      options: {
        chart: {
          width: 120,
        },
      },
    },
    {
      breakpoint: 1520,
      options: {
        chart: {
          width: 100,
        },
      },
    },
    {
      breakpoint: 1200,
      options: {
        chart: {
          width: 180,
          height: 120,
          offsetX: -10,
        },
      },
    },
    {
      breakpoint: 992,
      options: {
        chart: {
          width: 130,
          height: 120,
          offsetX: 10,
        },
      },
    },
    {
      breakpoint: 768,
      options: {
        chart: {
          width: 180,
          height: 120,
          offsetX: 0,
        },
      },
    },
    {
      breakpoint: 380,
      options: {
        chart: {
          width: 110,
          height: 120,
          offsetX: 0,
        },
      },
    },
  ],
};

export const progressItemData = [
  {
    id: 1,
    title: "Online Order",
    arrowColor: "danger",
    arrowIcon: "arrow-chart",
    percent: "-6.3",
    rate: "16,287",
    color: "primary",
    icon: "basket",
    value: 25,
    chart: {
      ...saleChart,
      series: saleChart.series,
      type: saleChart.chart?.type,
      height: saleChart.chart?.height,
    },
  },
  {
    id: 2,
    title: "Offline Order",
    arrowColor: "success",
    arrowIcon: "arrow-chart-up",
    percent: "+8.3",
    rate: "35,235",
    color: "secondary",
    icon: "delivery",
    value: 15,
    chart: {
      ...orderChart,
      series: orderChart.series,
      type: orderChart.chart?.type,
      height: orderChart.chart?.height,
    },
  },
  {
    id: 3,
    title: "Total Revenue",
    arrowColor: "warning",
    arrowIcon: "arrow-chart-yellow",
    percent: "+3.5",
    rate: "45,956",
    color: "warning",
    icon: "increased",
    value: 20,
    chart: {
      ...deliveryChart,
      series: deliveryChart.series,
      type: deliveryChart.chart?.type,
      height: deliveryChart.chart?.height,
    },
  },
];

//ecommerce
export const priceChartOptions1: ApexOptions = {
  series: [
    {
      data: [1, 20, 10, 30, 10, 55, 20, 30],
    },
  ],
  chart: {
    type: "line",
    width: "80",
    height: 15,
    sparkline: {
      enabled: true,
    },
  },
  fill: {
    opacity: 1,
  },
  colors: ["#479447"],
  stroke: {
    curve: "smooth",
    width: 3,
  },

  tooltip: {
    enabled: false,
  },
};

export const priceChartOptions2: ApexOptions = {
  series: [
    {
      data: [1, 25, 10, 25, 25, 18, 25, 10, 30],
    },
  ],
  chart: {
    type: "line",
    width: "80",
    height: 15,
    sparkline: {
      enabled: true,
    },
  },
  fill: {
    opacity: 1,
  },
  colors: ["#da9817"],
  stroke: {
    curve: "smooth",
    width: 3,
  },

  tooltip: {
    enabled: false,
  },
};

export const priceChartOptions3: ApexOptions = {
  series: [
    {
      data: [1, 25, 10, 25, 25, 10, 25, 18, 30],
    },
  ],
  chart: {
    type: "line",
    width: "80",
    height: 15,
    sparkline: {
      enabled: true,
    },
  },
  fill: {
    opacity: 1,
  },
  colors: ["#479447"],
  stroke: {
    curve: "smooth",
    width: 3,
  },

  tooltip: {
    enabled: false,
  },
};

export const priceChartOptions4: ApexOptions = {
  series: [
    {
      data: [1, 25, 10, 25, 25, 18, 25, 10, 30],
    },
  ],
  chart: {
    type: "line",
    width: "80",
    height: 15,
    sparkline: {
      enabled: true,
    },
  },
  fill: {
    opacity: 1,
  },
  colors: ["#da9817"],
  stroke: {
    curve: "smooth",
    width: 3,
  },

  tooltip: {
    enabled: false,
  },
};

export const productOrderData: ProductOrderTypes[] = [
  {
    id: 1,
    image: "5.png",
    product: "T-shirt",
    subText: "Free delivery",
    date: "16 Aug",
    stock: "65554",
    chart: {
      ...priceChartOptions1,
      series: priceChartOptions1.series,
      type: priceChartOptions1.chart?.type,
      height: priceChartOptions1.chart?.height,
      width: priceChartOptions1.chart?.width,
    },
    rate: "$84464",
    badgeColor: "primary",
    badge: "Done",
  },
  {
    id: 2,
    image: "6.png",
    product: "Sports Shoes",
    subText: "$83.97 delivery",
    date: "2 Oct",
    stock: "65491",
    chart: {
      ...priceChartOptions2,
      series: priceChartOptions2.series,
      type: priceChartOptions2.chart?.type,
      height: priceChartOptions2.chart?.height,
      width: priceChartOptions2.chart?.width,
    },
    rate: "$28239",
    badgeColor: "warning",
    badge: "Pending",
  },
  {
    id: 3,
    image: "3.png",
    product: "Smart Watch",
    subText: "Free delivery",
    date: "21 Mar",
    stock: "95361",
    chart: {
      ...priceChartOptions3,
      series: priceChartOptions3.series,
      type: priceChartOptions3.chart?.type,
      height: priceChartOptions3.chart?.height,
      width: priceChartOptions3.chart?.width,
    },
    rate: "$84568",
    badgeColor: "primary",
    badge: "Done",
  },
  {
    id: 4,
    image: "4.png",
    product: "Laptop Bag",
    subText: "$12.55 delivery",
    date: "31 Dec",
    stock: "98744",
    chart: {
      ...priceChartOptions4,
      series: priceChartOptions4.series,
      type: priceChartOptions4.chart?.type,
      height: priceChartOptions4.chart?.height,
      width: priceChartOptions4.chart?.width,
    },
    rate: "$84464",
    badgeColor: "warning",
    badge: "Pending",
  },
];

export const productOrderColumns: TableColumn<ProductOrderTypes>[] = [
  {
    name: (
      <FormGroup check>
        <Input type="checkbox" value="" />
        <Label check></Label>
      </FormGroup>
    ),
    sortable: false,
    cell: () => {
      return (
        <FormGroup check>
          <Input type="checkbox" value="" />
          <Label check></Label>
        </FormGroup>
      );
    },
    width: "5%",
  },
  {
    name: "Product name",
    selector: (row) => row.product,
    sortable: true,
    cell: (row) => (
      <div className="d-flex custom-Product">
        <div className="flex-shrink-0">
          <Image src={`${ImagePath}/dashboard-2/product/${row.image}`} width={38} height={38} alt="" />
        </div>
        <div className="flex-grow-1">
          <Link href={`/app/ecommerce/product`}>
            <h6 className="f-w-600">{row.product}</h6>
            <span>{row.subText}</span>
          </Link>
        </div>
      </div>
    ),
  },
  {
    name: "Date",
    selector: (row) => row.date,
    sortable: true,
  },
  {
    name: "Stock",
    selector: (row) => row.stock,
    sortable: true,
  },
  {
    name: "Value",
    selector: (row) => row.chart,
    sortable: true,
    cell: (row) => (
      <div id="priceChart2">
        <ReactApexChart options={row.chart} series={row.chart.series} type={row.chart.type} height={row.chart.height} width={row.chart.width} />
      </div>
    ),
  },
  {
    name: "Rate",
    selector: (row) => row.rate,
    sortable: true,
  },
  {
    name: "Payment",
    selector: (row) => row.badge,
    sortable: true,
    cell: (row) => (
      <Badge color={`light-${row.badgeColor}`} className={`txt-${row.badgeColor}`} pill>
        {row.badgeColor}
      </Badge>
    ),
  },
];

export const newOrderData = [
  {
    id: 1,
    image: "14.jpg",
    name: "Pot",
    subText: "100",
    code: "3LIX040",
    percent: "-65",
    price: "99.00",
  },
  {
    id: 2,
    image: "15.jpg",
    name: "iphone",
    subText: "380 Item",
    code: "JP563",
    percent: "-19",
    price: "69.00",
  },
  {
    id: 3,
    image: "18.jpg",
    name: "Headphone",
    subText: "513 Item",
    code: "MH723",
    percent: "-92",
    price: "84.00",
  },
  {
    id: 4,
    image: "17.jpg",
    name: "Glass",
    subText: "235 Item",
    code: "DFG87",
    percent: "-67",
    price: "34.00",
  },
  {
    id: 5,
    image: "16.jpg",
    name: "Watch",
    subText: "365 Item",
    code: "TRX938",
    percent: "-20",
    price: "31.00",
  },
];

export var userActivityChart: ApexOptions = {
  chart: {
    height: 285,
    type: "radialBar",
  },
  series: [69],
  colors: ["#008dab"],
  plotOptions: {
    radialBar: {
      hollow: {
        size: "57%",
      },
      track: {
        background: ["#008dab"],
        opacity: 0.2,
      },
      dataLabels: {
        name: {
          show: true,
          color: "#9B9B9B",
          fontSize: "20px",
          fontWeight: "600",
        },
        value: {
          color: "#363636",
          fontSize: "24px",
          fontWeight: "500",
          show: true,
        },
      },
    },
  },
  stroke: {
    lineCap: "round",
  },
  responsive: [
    {
      breakpoint: 1400,
      options: {
        chart: {
          height: 335,
        },
      },
    },
    {
      breakpoint: 1200,
      options: {
        chart: {
          height: 290,
        },
      },
    },
    {
      breakpoint: 360,
      options: {
        chart: {
          height: 250,
        },
      },
    },
  ],
  labels: ["Activity"],
};

export const applicationsMenu = [
  {
    id: 1,
    title: "Online Applications",
    value: 60,
  },
  {
    id: 2,
    title: "Offline Applications",
    value: 39,
  },
];

export const monthlyInvoicesData = [
  {
    id: 1,
    icon: "bookmark",
    title: "Growth of Camelun iOS",
    subText: "20 paid month out of 24",
    price: "15.00",
    link: `invoice-1`,
  },
  {
    id: 2,
    icon: "Ticket-Star",
    title: "ReactDT Motions",
    subText: "Late payment  12 week - pay invoce",
    price: "20.00",
    link: `invoice-4`,
  },
  {
    id: 3,
    icon: "Discovery",
    title: "Arocca Store",
    subText: "Error sending payment - Detail information",
    price: "30.00",
    link: `invoice-2`,
  },
  {
    id: 4,
    icon: "Shield-Done",
    title: "EnterPress Project",
    subText: "25 paid days out of 113",
    price: "18.00",
    link: `invoice-3`,
  },
];

export var optionsRevenue: ApexOptions = {
  series: [
    {
      type: "area",
      data: [35, 40, 30, 46, 36, 45],
    },
    {
      type: "line",
      data: [27, 25, 48, 50, 44, 53],
    },
  ],
  chart: {
    type: "line",
    height: 358,
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 8,
      left: 0,
      blur: 3,
      color: "#008193",
      opacity: 0.2,
    },
  },
  colors: ["#008dab", "#e87f24"],
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  stroke: {
    curve: "smooth",
    width: [2, 3],
    dashArray: [0, 2],
  },
  grid: {
    show: true,
    borderColor: "#F3F3F3",
    position: "back",
  },
  tooltip: {
    x: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 6,
    },
  },
  fill: {
    opacity: [0.05, 1],
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    labels: {
      style: {
        colors: "#363636",
        fontWeight: 500,
        fontFamily: "Poppins, sans-serif",
      },
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    crosshairs: {
      show: true,
      width: 30,
      position: "back",
      opacity: 0.2,
      stroke: {
        color: "#008193",
        width: 0,
        dashArray: 0,
      },
      fill: {
        type: "solid",
        color: "#008dab",
      },
    },
  },
  yaxis: {
    logBase: 10,
    tickAmount: 5,
    min: 10.0,
    max: 60.0,
    labels: {
      show: true,
      align: "right",
      style: {
        colors: "#363636",
        fontWeight: 500,
        fontFamily: "Poppins, sans-serif",
      },
      formatter: (value) => {
        return `$${value}0`;
      },
    },
  },
};

export const notificationsCardData = [
  {
    id: 1,
    image: "5.png",
    details: [
      {
        name: "Zaynab Azzahr",
        text: "recommended this online shop to buy electronics,",
      },
      {
        name: "Elecktrosop",
      },
    ],
    subText: "Elecktroshop",
    time: "Now",
  },
  {
    id: 2,
    image: "6.png",
    details: [
      {
        name: "Erin Porit",
        text: "sent the goods for you to see",
      },
    ],
    subText: "New item",
    time: "25m ago",
  },
  {
    id: 3,
    image: "7.png",
    details: [
      {
        name: "Wildan",
        text: "changed",
      },
      {
        name: "the cosmetic payment",
        text: "due date to sunday ",
      },
      {
        name: "06 March 2024",
      },
    ],
    subText: "Payment",
    time: "2h ago",
  },
  {
    id: 4,
    image: "8.png",
    details: [
      {
        name: "Erin Porit",
        text: "sent the goods for you to see",
      },
      {
        name: "New item",
      },
    ],
    subText: "Elecktroshop",
    time: "4h ago",
  },
];

export const saleTopCountriesData = [
  {
    id: 1,
    data: [
      {
        id: 1,
        country: "India",
        value: 70,
      },
      {
        id: 2,
        country: "Australia",
        value: 35,
      },
    ],
  },
  {
    id: 2,
    data: [
      {
        id: 1,
        country: "Dubai",
        value: 40,
      },
      {
        id: 2,
        country: "Brazil",
        value: 50,
      },
    ],
  },
];

export const reviewSlider = {
  slidesToShow: 1,
  swipeToSlide: true,
  arrows: false,
  dots: true,
};

export const socialReviewList = [
  { id: 1, link: "https://www.facebook.com/", icon: "facebook" },
  { id: 2, link: "https://accounts.google.com/", icon: "google-plus" },
  { id: 3, link: "https://twitter.com/", icon: "twitter" },
  { id: 4, link: "https://www.facebook.com/", icon: "instagram" },
  { id: 5, link: "https://www.facebook.com/", icon: "rss" },
];

export const reviewSliderData = [
  {
    id: 1,
    image: "9.png",
    title: "John Connor",
    rate: "4.3",
    number: "136",
    paragraph: "“Best  Product i’ve been seen on market, best price, best quality! Overall Amazing!!!”",
  },
  {
    id: 2,
    image: "10.png",
    title: "Paul Miller",
    rate: "5.6",
    number: "120",
    paragraph: `"The best product I've seen on the market, best price, and best quality!" Overall, Amazing!!!"`,
  },
  {
    id: 3,
    image: "11.png",
    title: "Alen Lee",
    rate: "6.3",
    number: "140",
    paragraph: `"greatest product I've ever seen on the market, greatest pricing, and best quality! Overall, great!!!"`,
  },
];

export const groupChartOption: ApexOptions = {
  series: [
    {
      name: "Good",
      data: [380, 600, 500, 800, 650, 480, 520, 380, 620, 400, 380, 550],
    },
    {
      name: "Very Good",
      data: [690, 500, 600, 600, 500, 650, 800, 400, 400, 550, 450, 500],
    },
  ],
  colors: ["#008dab", "#e87f24"],
  chart: {
    type: "bar",
    height: 325,
    offsetX: 0,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
    },
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  grid: {
    show: true,
    borderColor: "#E5E5E5",
    position: "back",
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  yaxis: {
    show: true,
    labels: {
      show: true,
      style: {
        colors: "#363636",
        fontWeight: 500,
        fontFamily: "Poppins, sans-serif",
      },
      formatter: (value) => {
        return `${value}k`;
      },
    },
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    labels: {
      show: true,
      style: {
        colors: "#363636",
        fontWeight: 500,
        fontFamily: "Poppins, sans-serif",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
  responsive: [
    {
      breakpoint: 1399,
      options: {
        chart: {
          height: 300,
        },
        series: [
          {
            name: "Good",
            data: [170, 250, 350, 150, 230, 120, 330, 350, 280],
          },
          {
            name: "Very Good",
            data: [290, 180, 120, 290, 370, 250, 230, 200, 140],
          },
        ],
      },
    },
    {
      breakpoint: 835,
      options: {
        chart: {
          height: 315,
        },
        series: [
          {
            name: "Good",
            data: [170, 250, 350, 150, 230, 120, 330],
          },
          {
            name: "Very Good",
            data: [290, 180, 120, 290, 370, 250, 230],
          },
        ],
      },
    },
  ],
};
