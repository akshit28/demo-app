export const data = {
    datasets: [
      {
        label: 'Scatter Dataset 1',
        fill: false,
        borderColor: '#00ff00',
        backgroundColor: '#00ff00',
        data: [
          { x: 1, y: 1 },
          { x: 2, y: 1 },
          { x: 4, y: -1 },
          { x: 6, y: 2 },
          { x: 8, y: -2 },
          { x: 10, y: 2 }
        ],
        radius: 6, // Make the dots larger (default is 3)
        hoverRadius: 8, // Make them slightly larger when hovered
      }
    ]
  }
  
  export const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow chart to resize based on container's size
    scales: {
      x: {
        min: 0,
        max: 12, // X-axis range from 0 to 12
        grid: {
          color: '#D5DEE3', // Default grid line color
          borderColor: '#FF6B34', // Top and bottom lines red
        },
        ticks: {
          display: true, // Show numbers on the X-axis
          color: '#ffffff', // White numbers
        }
      },
      y: {
        min: -3,
        max: 3, // Y-axis range from -3 to 3
        grid: {
          color: (context) => {
            // Customize specific grid lines
            if (context.tick.value === -1 || context.tick.value === 1) {
              return '#00C068'; // Green for -1 and 1
            } else if (context.tick.value === -3 || context.tick.value === 3) {
              return '#FF6B34'; // Red for -3 and 3
            }
            return '#D5DEE3'; // Default grid line color
          },
          borderDash: (context) => {
            // Make lines for -1 and 1 dotted, others solid
            if (context.tick.value === -1 || context.tick.value === 1) {
              return [2, 2]; // Dotted line
            }
            return []; // Solid line for other values
          },
          borderColor: '#ff0000', // Red top and bottom axis lines
        },
        ticks: {
          display: true, // Show numbers on the Y-axis
          color: '#ffffff', // White numbers
        }
      }
    },
    plugins: {
      legend: {
        display: false // Hide the legend
      },

      }
  }
  