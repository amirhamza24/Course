function getInputValueById(inputId) {
    const input = document.getElementById(inputId);
    const inputString = input.value;
    const inputValue = parseFloat(inputString);
    return inputValue;
}

function getTextElementValueById(elementId) {
    const title = document.getElementById(elementId);
    const titleValue = title.innerText;
    return titleValue;
}

function setTableRow(count, titleValue, areaValue,) {
    const parent = document.getElementById('main-table');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${count}</td>
    <td>${titleValue}</td>
    <td>${areaValue}cm<sup>2</sup></td>
    <td><button class="bg-sky-500 px-3 py-2 text-white rounded font-semibold">Covert to m<sup>2</sup></button></td>
    `;

    parent.appendChild(tr);
}