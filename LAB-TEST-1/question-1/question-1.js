// Chi Calvin Nguyen 101203877

let lowerCaseWords = (input_array) => {
    
    // Filter array for strings
    let output_array = input_array.filter(element => typeof element === "string")

    // change strings to lower case
    output_array = output_array.map(word => word.toLowerCase())

    // Determine if output array has strings
    if (output_array.length > 1){
        cond = true
    } else {
        cond = false
    }

    /*
        return Promise
        resolve - gives the output_array
        reject  - gives a rejection message
    */
    return new Promise(function (resolve, reject){
        
        if (cond){
            resolve(output_array)
        } else {
            reject("There are no strings in the array")
        }
    })
}

let test = lowerCaseWords(['PIZZA', 10, true, 25, false, "Wings"])
test.then(
    pass => console.log(pass),
    fail => console.log(fail)
)

let test2 = lowerCaseWords([10, true, 25, false])
test2.then(
    pass => console.log(pass),
    fail => console.log(fail)
)