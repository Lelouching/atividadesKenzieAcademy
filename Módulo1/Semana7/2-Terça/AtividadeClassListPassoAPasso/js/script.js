document.addEventListener("click", (event) => {
    const space_lamp = document.getElementById("space_lamp");
    const id = event.target.id;
    const style = "on"
    
    if (id == space_lamp.id) {
      space_lamp.classList.toggle(style)
    }
    });