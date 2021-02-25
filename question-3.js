
// Remove an attribute or a list of attributes from a target
function removeAttr(target, attr) {
    if (target.length) return removeAttr(target, [attr])
    for (let i = 0; i < attr.length; i++) target.removeAttribute(attr[i])
}
// For a list or single target set a single or multiple attributes
// defined in a {'key': 'value'} pair
function setStyle(target, dict) {
    target.forEach(node => {
        for (let val in dict) node.style[val] = dict[val]
    })
}
// A convenience method to select elements
function select(selector, all) {
    if (all) return document.querySelectorAll(selector)
    return document.querySelector(selector)
}


const NAMES_REGEX = /\w*/g;
function handleNameChange(e) {
        let val = e.target.value;
        let names = val.match(NAMES_REGEX);
        let firstNameVal = names[0];
        let lastNameVal = "";
        names.forEach((current, index) => {
            if (index != 0) {
                lastNameVal += `${current}`
            }
        })
        firstNameInput.value = firstNameVal.trim()
        lastNameInput.value = lastNameVal.trim();
}



const fieldsContainer = select('.ncf__fields', false)

const firstNameParent = select('#firstNameField', false)
const firstNameInput = select('#firstName', false)
const lastNameParent = select('#lastNameField', false)
const lastNameInput = select('#lastName', false)

const referenceNode = select('#primaryTelephoneField', false)
const fullName = firstNameParent.cloneNode(true);
const inputCloned = fullName.querySelector('input')

let textFullName = fullName.querySelector('.o-forms-title__main');
textFullName.textContent = 'Name';

removeAttr(fullName, ['data-validate', 'id'])
removeAttr(inputCloned, ['id', 'name', 'aria-required', 'required'])

inputCloned.setAttribute('placeholder', 'Please enter your full name')
inputCloned.addEventListener('keyup', handleNameChange)

setStyle([firstNameParent, lastNameParent], {'display': 'none'})
fieldsContainer.insertBefore(fullName, referenceNode)