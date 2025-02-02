/**
 * Converts a hex color code to an RGB string.
 * 
 * @param {string} hex The hex color code (e.g., "#4ea72e")
 * @returns {string} The RGB color string (e.g., "rgb(78, 167, 46)")
 */
function hexToRGB(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
}

/**
 * Creates an element based on the tag name and classes provided.
 * 
 * @param {string} tag The tag name of the element (i.e. "div", "img, etc.)
 * @param {string} classes Sets the class attribute. Multiple separated by a space
 * 
 * @returns {HTMLElement} The created element
 */
function createElementWithClass(tag, classes) {
    const element = document.createElement(tag);

    element.setAttribute('class', classes);

    return element;
}

/**
 * Creates a palette item based on the given color information.
 * 
 * @param {string} color The value of the color
 * @param {string} desc The description/title/use of the color
 * 
 * @returns {HTMLElement} The created palette
 */
function createItem(color, desc) {
    const elementItem = createElementWithClass('div', 'palette_item');
    const elementColor = createElementWithClass('div', 'palette_color');
    const elementDesc = createElementWithClass('div', 'palette_desc');
    const elementInputHex = createElementWithClass('input', 'palette_input');
    const elementInputRgb = createElementWithClass('input', 'palette_input');

    elementColor.style.backgroundColor = color;
    elementInputHex.value = color;
    elementInputRgb.value = hexToRGB(color);
    elementDesc.textContent = desc;

    elementItem.appendChild(elementColor);
    elementItem.appendChild(elementInputHex);
    elementItem.appendChild(elementInputRgb);
    elementColor.appendChild(elementDesc);

    elementInputHex.onfocus = () => elementInputHex.select();
    elementInputRgb.onfocus = () => elementInputRgb.select();

    return elementItem;
}

const colorList = [
    { "desc": "Vexergy Primary", "color": "#4ea72e" },
    { "desc": "Vexergy Primary Light", "color": "#60bc3f" },
    { "desc": "Vexergy Dark Mode", "color": "#212529" },
    { "desc": "Vexergy Neutral Dark", "color": "#898fa1" },
    { "desc": "Vexergy Neutral Light", "color": "#f8f9fa" },
    { "desc": "Monochrome Black", "color": "#000000" },
    { "desc": "Monochrome Gray", "color": "#858585" },
    { "desc": "Monochrome White", "color": "#ffffff" }
];

const paletteContainer = document.querySelector('.palette');

for (const {desc, color} of colorList) {
    console.log(desc, color);
    paletteContainer.appendChild(createItem(color, desc));
}
