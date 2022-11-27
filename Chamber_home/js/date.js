var result  = Math.round((Date.now() - localStorage.getItem('date')) / (1000 * 3600 * 24));
      document.getElementById('dayField').textContent = result ?? 0;
    localStorage.setItem('date', Date.now());