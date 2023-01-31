export const doughnutLegends = [
  { title: 'Football', color: 'bg-blue-500' },
  { title: 'Cricket', color: 'bg-teal-600' },
  { title: 'Chess', color: 'bg-purple-600' },
  { title: 'Volleyball', color: 'bg-red-600' },
  { title: 'Carrom', color: 'bg-yellow-600' },
]

export const lineLegends = [
  { title: 'Students', color: 'bg-teal-600' },
  { title: 'Coordinators', color: 'bg-purple-600' },
]

export const barLegends = [
  { title: 'Football', color: 'bg-teal-600' },
  { title: 'Cricket', color: 'bg-purple-600' },
]

export const doughnutOptions = {
  data: {
    datasets: [
      {
        data: [21, 31, 11,14,21],
        /**
         * These colors come from Tailwind CSS palette
         * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
         */
        backgroundColor: ['#0694a2', '#1c64f2', '#7e3af2','#0e9f6e',"#ff5a1f"],
        label: 'Dataset 1',
      },
    ],
    labels: ['Football', 'Cricket', 'Volleyball','Chess','Carrom'],
  },
  options: {
    responsive: true,
    cutoutPercentage: 80,
  },
  legend: {
    display: false,
  },
}

export const lineOptions = {
  data: {
    labels: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'students',
        /**
         * These colors come from Tailwind CSS palette
         * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
         */
        backgroundColor: '#0694a2',
        borderColor: '#0694a2',
        
        data: [643,754,898,998,1200,1399],
        fill: false,
      },
      {
        label: 'coordinators',
        fill: false,
        /**
         * These colors come from Tailwind CSS palette
         * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
         */
        backgroundColor: '#7e3af2',
        data: [43, 48, 56, 73, 74, 83, 97],
        borderColor: '#7e3af2',
        
      },
    ],
  },
  options: {
    responsive: true,
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true,
    },
    scales: {
      x: {
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Month',
        },
      },
      y: {
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Value',
        },
      },
    },
  },
  legend: {
    display: false,
  },
}

export const barOptions = {
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Shoes',
        backgroundColor: '#0694a2',
        // borderColor: window.chartColors.red,
        borderWidth: 1,
        data: [-3, 14, 52, 74, 33, 90, 70],
      },
      {
        label: 'Bags',
        backgroundColor: '#7e3af2',
        // borderColor: window.chartColors.blue,
        borderWidth: 1,
        data: [66, 33, 43, 12, 54, 62, 84],
      },
    ],
  },
  options: {
    responsive: true,
  },
  legend: {
    display: false,
  },
}
