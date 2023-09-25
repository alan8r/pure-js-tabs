// determines the tab that we'll start on
let defaultTabIndex = 0

// get references to the outer divs to hold our tabs and panes
const   tabContainer = document.querySelector("#tabContainer"),
        contentPane = document.querySelector("#contentPane")

// arrays to hold our tabs and panes
let     tabs = [],
        panes = []

// create the tabs and panes
for (var i = 0; i < 5; i++) {
    let tab = document.createElement('div'),
        pane = document.createElement('div')

    // tab stuff
    tab.id = 'tab'+i
    tab.className = "tab"
    if (i == defaultTabIndex)
        tab.className = "tabSelected"
    tab.innerText = "tab"+i
    

    // pane stuff
    pane.id = 'pane'+i
    pane.innerText = "pane "+i

    if (i != defaultTabIndex) 
        pane.style.display = "none"

    tabContainer.appendChild(tab)
    contentPane.appendChild(pane)

    tabs.push(tab)
    panes.push(pane)
}

// spacer to fix top-border gap of content pane
let tabSpacer = document.createElement('div')
tabSpacer.id = "tabSpacer"
tabContainer.appendChild(tabSpacer)

// bind click stuff to each tab
for (tabIndex in tabs) {
    (function(tabIndex) {
        tabs[tabIndex].onclick = ()=>{
            for (let i = 0; i < panes.length; i++) {
                if (i == tabIndex) {
                    tabs[i].className = "tabSelected"
                    panes[i].style.display = ""
                } else {
                    tabs[i].className = "tab"
                    panes[i].style.display = "none"
                }
            }
        }
    })(tabIndex)
}

panes[0].innerHTML = `<center><h1>This is the content pane for tab0!</h1></center>`
panes[1].innerHTML = `
    <h2>This is the tab1 content pane!
    <br/>As you can see, we can also have html components
    <br>or anything else you would normally have on a webpage</h2>
    <button onclick="alert('hello from tab1')">test</button>
`
panes[2].innerHTML = `<h3>Here is more/different content on tab2.</h3>`
panes[3].innerHTML = `<h4>At this point you probably get the picture.</h4>`
panes[4].innerHTML = `<h5><center>:)</center></h5>`