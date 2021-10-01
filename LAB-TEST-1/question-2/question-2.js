// Chi Calvin Nguyen 101203877

const resolvedPromise = () => {
    let msg = {'message': 'delayed success!'}
    let p1 =  new Promise(function (resolve){
        setTimeout(() => {
            resolve(msg)    
        }, 500)    
    })
    p1.then(pass => console.log(pass))
}

const rejectedPromise = () => {
    let p1 = new Promise(function (reject) {
        setTimeout(() => {
            try {
                throw new Error('error: delayed exception!')
            } catch (e) {
                reject(e)
            }
        }, 500)
    })

    p1.then(reject => console.error(reject))
}

// Test resolvedPromise() method
resolvedPromise()

// Test rejectedPromise() method
rejectedPromise()