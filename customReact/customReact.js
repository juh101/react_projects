const reactElement = {
    type:'a',
    props: {
        href: 'https://www.google.com/' ,
        target: '_blank'
    },
    children: 'click to visit google'
}
//similar to how React compiles:<a href="www.google.com" target="_blank">click to visit google</a>
//into an object internally.

const container = document.querySelector('#root');

function customRender(reactEle , mainContainer){
    const domEle = document.createElement(reactEle.type) // reactEle.type is 'a'
    domEle.innerHTML = reactEle.children //reactEle.children is 'click to visit google'
    domEle.setAttribute('href' , reactEle.props.href)
    domEle.setAttribute('target' , reactEle.props.target)
    mainContainer.appendChild(domEle);

}
customRender(reactElement , container)