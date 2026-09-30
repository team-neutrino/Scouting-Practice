(function() {
  // 1. Create the container element
  const consoleBox = document.createElement('div');
  consoleBox.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 400px;
    background: #1e1e1e;
    color: #fff;
    padding: 10px;
    font-family: monospace;
    border-radius: 5px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.5);
    z-index: 99999;
  `;

  // 2. Create the scrollable log history area
  const logsContainer = document.createElement('div');
  logsContainer.style.cssText = `
    height: 200px;
    overflow-y: auto;
    border-bottom: 1px solid #444;
    margin-bottom: 10px;
    padding-bottom: 5px;
  `;

  // 3. Create the text input field
  const inputField = document.createElement('input');
  inputField.type = 'text';
  inputField.placeholder = 'Type JS here and press Enter...';
  inputField.style.cssText = `
    width: 100%;
    background: #2d2d2d;
    color: #fff;
    border: 1px solid #555;
    padding: 5px;
    box-sizing: border-box;
    font-family: monospace;
  `;

  // Assemble the UI components
  consoleBox.appendChild(logsContainer);
  consoleBox.appendChild(inputField);
  document.body.appendChild(consoleBox);

  // Helper function to append text blocks to the display
  function consoleLog(text, color='#888') {
    const div = document.createElement('div');
    div.style.color = color;
    div.style.marginBottom = '4px';
    div.style.whiteSpace = 'pre-wrap';
    div.textContent = typeof text === 'object' ? JSON.stringify(text) : text;
    logsContainer.appendChild(div);
    logsContainer.scrollTop = logsContainer.scrollHeight;
  }

  // 4. Set up the input execution logic
  inputField.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      const code = inputField.value.trim();
      if (!code) return;

      // Echo the original command back into the logs
      consoleLog(`> ${code}`, '#888');
      
      try {
        // Execute the code and print the evaluation result
        const result = eval(code);
        consoleLog(result === undefined ? 'undefined' : result, '#4af');
      } catch (error) {
        // Print syntax or runtime errors in red
        consoleLog(error.toString(), '#f44');
      }
      
      inputField.value = '';
    }
  });

    window.consoleLog = function(text, color = '#fff') {
    const div = document.createElement('div');
    div.style.color = color;
    div.style.marginBottom = '4px';
    div.style.whiteSpace = 'pre-wrap';
    div.textContent = typeof text === 'object' ? JSON.stringify(text) : text;
    logsContainer.appendChild(div);
    logsContainer.scrollHeight;
    logsContainer.scrollTop = logsContainer.scrollHeight;
  };
})();
