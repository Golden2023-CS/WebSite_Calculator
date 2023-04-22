const output = document.querySelector("#output");
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", e => {
    const value = e.target.value;
    switch (value) {
        case "C":
            output.textContent = "";
            break;
          case "=":
            try {
              output.textContent = eval(output.textContent);
            } catch (error) {
              output.textContent = "Error";
            }
            break;
          default:
            output.textContent += value;
            break;
          }
        });
      }
      