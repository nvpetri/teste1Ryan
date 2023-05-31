const imageElements = document.querySelectorAll('.faixa__informacoes');

imageElements.forEach((element) => {
  
  const imageLink = element.querySelector('a');

  imageLink.addEventListener('click', (event) => {
    event.preventDefault(); 

    const imageUrl = imageLink.getAttribute('href');

    const userChoice = prompt('Enter "d" to download the image or "o" to open it in a new tab.');

    if (userChoice && userChoice.toLowerCase() === 'd') {
      const downloadLink = document.createElement('a');
      downloadLink.href = imageUrl;
      downloadLink.download = ''; 
      downloadLink.style.display = 'none';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } else {
      window.open(imageUrl, '_blank'); 
    }
  });
});
