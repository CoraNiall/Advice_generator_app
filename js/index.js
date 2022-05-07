const fetchData = function () {
  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
      const { advice, id } = data.slip;
      document.getElementById('advice-quote').innerHTML = advice;
      document.getElementById('advice-id').innerHTML = `Advice #${id}`;
    });
};
