(function main(){
    const container = document.querySelector(".manifest__assigners ul")
    const btn = document.querySelector(".show-more__btn")

    const buttonMessages = Array.of('data-show-less', 'data-show-more').map( attribute => btn.getAttribute(attribute) )

    const toggleAttribute = (element, attribute) => {

        const hasAttribute = element.hasAttribute(attribute)

        if( hasAttribute ){
            element.removeAttribute(attribute)
        } else {
            element.setAttribute(attribute, true)
        }

        return !(hasAttribute)
    }

    const toggleIsOpen = (element) => element.classList.toggle("--open")

    const toggleMessage = (element, hasAttribute, [firstMessage, secondMessage] ) => {
        element.textContent = (hasAttribute) ? firstMessage : secondMessage
    }

    const toggleButton = (button, isExpanded) => {
        toggleMessage(button, isExpanded, buttonMessages)
        toggleIsOpen(button)
    }

    function handleManifestButtonClick(){
        const value = toggleAttribute(container, 'data-expanded')

        toggleButton(btn, value)
        toggleIsOpen(container)
    }

    
    btn.addEventListener("click", handleManifestButtonClick)
})()