const result = document.getElementById("result");

const stockData = {
  AAPL: { price: 189.25, change: +1.35 },
  GOOGL: { price: 138.1, change: -0.82 },
  AMZN: { price: 145.6, change: +0.55 },
  MSFT: { price: 378.9, change: +2.1 },
  TSLA: { price: 212.45, change: -1.75 },
};

function getStock() {
  const stock = document.getElementById("stockSelect").value;
  const data = stockData[stock];

  const changeClass = data.change >= 0 ? "up" : "down";
  const sign = data.change >= 0 ? "+" : "";

  result.innerHTML = `
    📈 <strong>${stock}</strong><br><br>
    Price: $${data.price}<br>
    <span class="${changeClass}">
      Change: ${sign}${data.change}%
    </span>
  `;
}
