// localStorage.setItem("key","value")......to storage in local storage //return value: Undefined

// logalStorage.getItem("key")......to read //Returns: A string containing the value of the key. If the key does not exist, null is returned.

// localStorage.removeItem("key")...to local storage remove //Return value: Undefined




/////get input value, store in localStorage, get and show in  localStorage value

const arr1 = [];

function fn(e) {
    e.preventDefault() ///page not referash


    arr1.push( e.target.input_value.value)  /// input value push to arr1

    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.input_value.value);

    localStorage.setItem("name", arr1) // localStorage value key value pass

    ////get the localStorage value 
    const search = localStorage.getItem("name")

    const result = search.split(",") //converting the string to array and spliting at comma ","
    
    document.getElementById('show').innerHTML = ''; //Empty the div

    //loop through each array element
    result.map( (el) => {
        const para =  document.createElement('p'); //creating a <p> element
        para.innerText = el //Keep each array element inside <p>
        
        //Append poaragraph to div
        document.getElementById('show').appendChild(para); 
    } )


    // document.getElementById("show").innerHTML = result;


}
console.log(arr1)

document.getElementById("form").addEventListener("submit", fn) 