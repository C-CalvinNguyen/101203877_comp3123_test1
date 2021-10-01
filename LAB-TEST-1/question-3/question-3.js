// Chi Calvin Nguyen 101203877

const fs = require('fs')
const path = require('path')
let dir = ("./Logs")
const log = "log"

let removeLogs = () => {
    if (fs.existsSync(dir)){
        let files = fs.readdirSync(dir)
        for (let file of files) {
            console.log("delete files... " + file)
        }
        fs.rmdirSync(dir, {recursive: true})
    }
}

let addLogs = () => {
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir)
        let y
        for (let x = 0; x < 10; x++){
            try {
                y = fs.openSync((`${dir}/${log}${x}.txt`), 'a')
                console.log(`${log}${x}.txt`)
            } catch (err) {

            } finally {
                if (y !== undefined){
                    fs.closeSync(y)
                }
            }
        }
    }
}

removeLogs()
addLogs()