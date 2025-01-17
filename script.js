document.addEventListener("DOMContentLoaded", function () {
  const bars = document.querySelectorAll(".bar");

  bars.forEach(bar => {
    const percent = bar.getAttribute("data-percent");
    
    bar.style.width = percent + "%";
    
    const percentText = bar.parentElement.querySelector(".percent");
    percentText.textContent = percent + "%";
  });
});
