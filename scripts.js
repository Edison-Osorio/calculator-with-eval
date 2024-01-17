const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
	btn.addEventListener("click", () => {
		switch (btn.id) {
			case "=":
				display.value = eval(display.value);
				break;
			case "ac":
				display.value = "";
				break;
			case "de":
				display.value = display.value.slice(0, -1);
				break;
			default:
				display.value += btn.id;
				break;
		}
	});
});
