document.addEventListener("DOMContentLoaded", () => {
    const flexContainer = document.querySelector(".flexContainer");

    function getRandomColor() {
        const r = Math.floor(Math.random() * 256); 
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    function userOutput(num) {
        flexContainer.innerHTML = "";
        
        num = parseInt(num);

        if (num < 4 || num > 100 || isNaN(num)) {
            alert("Please enter a number between 4 and 100.");
            return;
        }

        let boxSize = `${600 / num}px`;

        totalNum = num ** 2;

        for(let i = 0; i < totalNum; i++) {
            const box = document.createElement("div");
            box.className = "box";
            box.style.width = boxSize;
            box.style.height = boxSize;

            box.addEventListener("mouseover", () => {
                box.style.backgroundColor = getRandomColor();
            });

            flexContainer.appendChild(box);
        }

        document.getElementById("widthNum").textContent = num;
        document.getElementById("heightNum").textContent = num;
    }
    
    const button = document.getElementById("userInput");

    button.addEventListener("click", () => {
        let num = prompt("Enter between 4 to 100");
        userOutput(num);
    });
});