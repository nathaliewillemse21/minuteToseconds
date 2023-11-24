function convertMinutesToSeconds() {
      const minutes = parseFloat(document.getElementById('minutesInput').value);
      
      if (isNaN(minutes)) {
        document.getElementById('result').innerText = "Enter a valid number for minutes, please.";
        return;
      }

      const seconds = minutes * 60;
      document.getElementById('result').innerText = minutes + " minutes is equal to " + seconds + " seconds";
    }