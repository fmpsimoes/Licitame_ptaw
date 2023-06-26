let obj = document.getElementById("news");
let eSource = new EventSource("realtime2.php?value=42");

eSource.onmessage = (event) => {
  obj.innerHTML += `<p>${event.data}</p>`;
};

eSource.onerror = () => {
  obj.innerHTML += `EventSource failed!`;
};
