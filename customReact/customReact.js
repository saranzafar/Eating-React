function customRender(reactElement, container) {
    /*
    const domElement = document.createElement(reactElement.type);
    domElement.textContent = reactElement.children;
    // Use textContent instead of innerHTML(use whan there is tag i.e. <h1></h1>)
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);
    container.appendChild(domElement);
    */

    const domElement = document.createElement(reactElement.type)
    domElement.textContent = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
    },
    children: 'Click me to visit Google'
};

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);
