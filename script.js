// Getting refrences to html elements by using their ids
const textParagraph = document.getElementById('text-paragraph');
const colorInput = document.getElementById('color-input');
const borderInput = document.getElementById('border-input');
const applyButton = document.getElementById('apply-button');
// Adding a click event listener to the apply button
applyButton.addEventListener('click', () => {
    // Getting the color value from the color-input field
    const colorValue = colorInput.value;
    // Getting the border width from the border-input field and appending px to make it a valid css value
    const borderWidth = borderInput.value + 'px';
    // Applying the selected color to the text and border of the text-paragraph
    myparagraph.style.color = `rgb(${colorValue})`;
    myparagraph.style.borderColor = `rgb(${colorValue})`;
    myparagraph.style.borderWidth = borderWidth;
});
