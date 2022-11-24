// Write your code here!
main.remove();

const newHeader = document.createElement("h1");
document.body.appendChild(newHeader);
newHeader.setAttribute("id", 'victory');

const name = "Michelle";

newHeader.innerHTML = `Michelle is the champion`;
