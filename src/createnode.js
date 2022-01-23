const createNode = function(nodeType, text, classes, id){
    
    const element = document.createElement(`${nodeType}`);
    
    if(text){ 
        element.innerText = text; 
    };    
    if(classes){ 
        element.classList.add(classes); 
    };
    if(id){ 
        element.setAttribute('id', id)
    };
    
    return element;
}

export default createNode;