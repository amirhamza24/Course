// find input value
function getInputValueById(inputId) {
    const input = document.getElementById(inputId);
    const inputString = input.value;
    const inputValue = parseFloat(inputString);
    input.value = '';
    return inputValue;
}

// find element title
function getTextElementValueById(elementId) {
    const title = document.getElementById(elementId);
    const titleValue = title.innerText;
    return titleValue;
}

// set a table
function setTableRow(count, titleValue, areaValue,) {
    const parent = document.getElementById('main-table');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${count}.</td>
    <td>${titleValue}</td>
    <td>${areaValue} cm<sup>2</sup></td>
    <td><button class="bg-sky-500 hover:bg-sky-600 px-3 py-2 text-white rounded font-semibold mb-3">Covert to m<sup>2</sup></button></td>
    `;

    parent.appendChild(tr);
}

// set hover effect for every element
function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
} 
  
 
  
