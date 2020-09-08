/**
 * Init trigger for element
 * @param elementName
 * @param eventName
 * @returns {boolean}
 */
function filterTrigger(elementName, eventName){
    var element = document.getElementsByName(elementName);


    console.log(element);
    var event = new Event(eventName);
    return element.dispatchEvent(event);
}
