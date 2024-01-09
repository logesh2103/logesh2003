let url = "https://api.github.com/users/"
let serch_input = document.getElementById("search") //input
// let submit = document.getElementById("submit") //button
let show = document.getElementById("main")



async function fn(e) {
    e.preventDefault();
    
    console.log(url + serch_input.value)

    let jsdata = await fetch(url + serch_input.value)

    // https://api.github.com/users/logesh2103

    console.log(jsdata);

    let jsobject = await jsdata.json()

    console.log(jsobject)
    console.log(jsobject.name)
    console.log(jsobject.created_at)
    console.log(jsobject.location)
    console.log(jsobject.followers)
    console.log(jsobject.following);

    show.innerHTML = `<img src="${jsobject.avatar_url}" />
        <p>name: ${jsobject.login}</p>
        <p>followers: ${jsobject.id}</p>
        <p>following: ${jsobject.login}</p `

    serch_input = ""
}

document.getElementById("forms").addEventListener("submit", fn);




// document.getElementById("form").addEventListener("submit".fn())
// fn.







