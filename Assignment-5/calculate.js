let count = 0;

// for triangle
document.getElementById('btn-triangle').addEventListener('click', function() {
    const triangleFirstValue = getInputValueById('triangle-first-input');

    const triangleSecondValue = getInputValueById('triangle-second-input');

    const triangleTitleValue = getTextElementValueById('triangle-title');

    // checking a value for input number is valid number or not...
    if (isNaN(triangleFirstValue) || isNaN(triangleSecondValue) || typeof triangleFirstValue == 'string' || typeof triangleSecondValue == 'string' || triangleFirstValue <= 0 || triangleSecondValue <= 0) {
        alert('Please enter Valid number');
        return false;
    } 

    count = count + 1;
    
    const triangleArea = 0.5 * triangleFirstValue * triangleSecondValue;
    const triangleAreaValue = triangleArea.toFixed(2);

    // calling function for set a calculation result in the new element table
    setTableRow(count, triangleTitleValue, triangleAreaValue);
})

// for rectangle
document.getElementById('btn-rectangle').addEventListener('click', function() {
    
    const rectangleFirstValue = getInputValueById('rectangle-first-input');

    const rectangleSecondValue = getInputValueById('rectangle-second-input');

    const rectangleTitleValue = getTextElementValueById('rectangle-title');

    // checking a value for input number is valid number or not...
    if (isNaN(rectangleFirstValue) || isNaN(rectangleSecondValue) || typeof rectangleFirstValue == 'string' || typeof rectangleSecondValue == 'string' || rectangleFirstValue <= 0 || rectangleSecondValue <= 0) {
        alert('Please enter Valid number');
        return false;
    } 

    count = count + 1;

    const rectangleArea = rectangleFirstValue * rectangleSecondValue;
    const rectangleAreaValue = rectangleArea.toFixed(2);

    // calling function for set a calculation result in the new element table
    setTableRow(count, rectangleTitleValue, rectangleAreaValue);
})

// for parallelogram
document.getElementById('btn-parallelogram').addEventListener('click', function() {
    
    const parallelogramFirstValue = getInputValueById('parallelogram-first-input');

    const parallelogramSecondValue = getInputValueById('parallelogram-second-input');

    const parallelogramTitleValue = getTextElementValueById('parallelogram-title');

    // checking a value for input number is valid number or not...
    if (isNaN(parallelogramFirstValue) || isNaN(parallelogramSecondValue) || typeof parallelogramFirstValue == 'string' || typeof parallelogramSecondValue == 'string' || parallelogramFirstValue <= 0 || parallelogramSecondValue <= 0) {
        alert('Please enter Valid number');
        return false;
    } 

    count = count + 1;

    const parallelogramArea = parallelogramFirstValue * parallelogramSecondValue;
    const parallelogramAreaValue = parallelogramArea.toFixed(2);

    // calling function for set a calculation result in the new element table
    setTableRow(count, parallelogramTitleValue, parallelogramAreaValue);
})

// for rhombus
document.getElementById('btn-rhombus').addEventListener('click', function() {
    
    const rhombusFirstValue = getInputValueById('rhombus-first-input');

    const rhombusSecondValue = getInputValueById('rhombus-second-input');

    const rhombusTitleValue = getTextElementValueById('rhombus-title');

    // checking a value for input number is valid number or not...
    if (isNaN(rhombusFirstValue) || isNaN(rhombusSecondValue) || typeof rhombusFirstValue == 'string' || typeof rhombusSecondValue == 'string' || rhombusFirstValue <= 0 || rhombusSecondValue <= 0) {
        alert('Please enter Valid number');
        return false;
    }

    count = count + 1;

    const rhombusArea = 0.5 * rhombusFirstValue * rhombusSecondValue;

    const rhombusAreaValue = rhombusArea.toFixed(2);

    // calling function for set a calculation result in the new element table
    setTableRow(count, rhombusTitleValue, rhombusAreaValue);
})

// for pentagon
document.getElementById('btn-pentagon').addEventListener('click', function() {
    
    const pentagonFirstValue = getInputValueById('pentagon-first-input');

    const pentagonSecondValue = getInputValueById('pentagon-second-input');

    const pentagonTitleValue = getTextElementValueById('pentagon-title');

    // checking a value for input number is valid number or not...
    if (isNaN(pentagonFirstValue) || isNaN(pentagonSecondValue) || typeof pentagonFirstValue == 'string' || typeof pentagonSecondValue == 'string' || pentagonFirstValue <= 0 || pentagonSecondValue <= 0) {
        alert('Please enter Valid number');
        return false;
    }

    count = count + 1;

    const pentagonArea = 0.5 * pentagonFirstValue * pentagonSecondValue;

    const pentagonAreaValue = pentagonArea.toFixed(2);

    // calling function for set a calculation result in the new element table
    setTableRow(count, pentagonTitleValue, pentagonAreaValue);
})

// for ellipse
document.getElementById('btn-ellipse').addEventListener('click', function() {
    
    const ellipseFirstValue = getInputValueById('ellipse-first-input');

    const ellipseSecondValue = getInputValueById('ellipse-second-input');

    const ellipseTitleValue = getTextElementValueById('ellipse-title');

    // checking a value for input number is valid number or not...
    if (isNaN(ellipseFirstValue) || isNaN(ellipseSecondValue) || typeof ellipseFirstValue == 'string' || typeof ellipseSecondValue == 'string' || ellipseFirstValue <= 0 || ellipseSecondValue <= 0) {
        alert('Please enter Valid number');
        return false;
    }
    
    count = count + 1;

    const ellipsePiArea = 3.1416 * ellipseFirstValue * ellipseSecondValue;

    const ellipseAreaValue = ellipsePiArea.toFixed(2);

    // calling function for set a calculation result in the new element table
    setTableRow(count, ellipseTitleValue, ellipseAreaValue);
})

// adding new blog page where some question and answers
document.getElementById('btn-question').addEventListener('click', function() {
    window.location.href = 'blog.html';
})

// calling function for triangle to add random hover effect
document.getElementById('triangle-hover').addEventListener('mouseover',function(){
    document.getElementById('triangle-hover').style.backgroundColor = randomColor();
  })

  // calling function for rectangle to add random hover effect
  document.getElementById('rectangle-hover').addEventListener('mouseover',function(){
    document.getElementById('rectangle-hover').style.backgroundColor = randomColor();
  })

  // calling function for parallelogram to add random hover effect
  document.getElementById('parallelogram-hover').addEventListener('mouseover',function(){
    document.getElementById('parallelogram-hover').style.backgroundColor = randomColor();
  })

  // calling function for rhombus to add random hover effect
  document.getElementById('rhombus-hover').addEventListener('mouseover',function(){
    document.getElementById('rhombus-hover').style.backgroundColor = randomColor();
  })

  // calling function for pentagon to add random hover effect
  document.getElementById('pentagon-hover').addEventListener('mouseover',function(){
    document.getElementById('pentagon-hover').style.backgroundColor = randomColor();
  })

  // calling function for ellipse to add random hover effect
  document.getElementById('ellipse-hover').addEventListener('mouseover',function(){
    document.getElementById('ellipse-hover').style.backgroundColor = randomColor();
  })

  
