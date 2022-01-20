const createElement = function(html, text, classes){
    
    const element = document.createElement(`${html}`);
    
    element.innerText = text;
    element.classList.add(classes);
    
    return element;
}

export default createElement;