function adjustTypingSize() {
  const selector = `[data-animation="typing"]`;
  const typingElements = document.querySelectorAll(selector);
  typingElements.forEach((element) => {
    element.style.setProperty("--typing-length", element.innerText.length);
  });
}

adjustTypingSize();
