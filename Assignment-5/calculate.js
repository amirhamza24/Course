let count = 0;

document.getElementById('btn-triangle').addEventListener('click', function() {
    count = count + 1;
    // const triangleFirst = document.getElementById('triangle-first-input');
    // const triangleFirstString = triangleFirst.value;
    // const triangleFirstValue = parseFloat(triangleFirstString);
    const triangleFirstValue = getInputValueById('triangle-first-input');

    const triangleSecondValue = getInputValueById('triangle-second-input');

    // const triangleSecond = document.getElementById('triangle-second-input');
    // const triangleSecondString = triangleSecond.value;
    // const triangleSecondValue = parseFloat(triangleSecondString);

    // const triangleTitle = document.getElementById('triangle-title');
    // const triangleTitleValue = triangleTitle.innerText;

    const triangleTitleValue = getTextElementValueById('triangle-title');

    const triangleAreaValue = 0.5 * triangleFirstValue * triangleSecondValue;



    setTableRow(count, triangleTitleValue, triangleAreaValue);

    // const parent = document.getElementById('main-table');
    // const tr = document.createElement('tr');
    // tr.innerHTML = `
    // <td>${count}</td>
    // <td>${triangleTitleValue}</td>
    // <td>${areaValue}cm<sup>2</sup></td>
    // <td><button class="bg-sky-500 px-3 py-2 text-white rounded font-semibold">Covert to m<sup>2</sup></button></td>
    // `;

    // parent.appendChild(tr);
})

document.getElementById('btn-rectangle').addEventListener('click', function() {
    count = count + 1;
    const rectangleFirstValue = getInputValueById('rectangle-first-input');

    const rectangleSecondValue = getInputValueById('rectangle-second-input');

    const rectangleTitleValue = getTextElementValueById('rectangle-title');

    const rectangleAreaValue = rectangleFirstValue * rectangleSecondValue;

    setTableRow(count, rectangleTitleValue, rectangleAreaValue);
})


document.getElementById('btn-parallelogram').addEventListener('click', function() {
    count = count + 1;
    const parallelogramFirstValue = getInputValueById('parallelogram-first-input');

    const parallelogramSecondValue = getInputValueById('parallelogram-second-input');

    const parallelogramTitleValue = getTextElementValueById('parallelogram-title');

    const parallelogramAreaValue = parallelogramFirstValue * parallelogramSecondValue;

    setTableRow(count, parallelogramTitleValue, parallelogramAreaValue);
})


document.getElementById('btn-rhombus').addEventListener('click', function() {
    count = count + 1;
    const rhombusFirstValue = getInputValueById('rhombus-first-input');

    const rhombusSecondValue = getInputValueById('rhombus-second-input');

    const rhombusTitleValue = getTextElementValueById('rhombus-title');

    const rhombusAreaValue = 0.5 * rhombusFirstValue * rhombusSecondValue;

    setTableRow(count, rhombusTitleValue, rhombusAreaValue);
})


document.getElementById('btn-pentagon').addEventListener('click', function() {
    count = count + 1;
    const pentagonFirstValue = getInputValueById('pentagon-first-input');

    const pentagonSecondValue = getInputValueById('pentagon-second-input');

    const pentagonTitleValue = getTextElementValueById('pentagon-title');

    const pentagonAreaValue = 0.5 * pentagonFirstValue * pentagonSecondValue;

    setTableRow(count, pentagonTitleValue, pentagonAreaValue);
})


document.getElementById('btn-ellipse').addEventListener('click', function() {
    count = count + 1;
    const ellipseFirstValue = getInputValueById('ellipse-first-input');

    const ellipseSecondValue = getInputValueById('ellipse-second-input');

    const ellipseTitleValue = getTextElementValueById('ellipse-title');

    const ellipsePiValue = 3.1416 * ellipseFirstValue * ellipseSecondValue;

    const ellipseAreaValue = ellipsePiValue.toFixed(2);

    setTableRow(count, ellipseTitleValue, ellipseAreaValue);
})


