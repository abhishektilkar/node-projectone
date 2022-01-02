const { readFile, writeFile} = require('fs')
console.log("hello world now on to the works here")
const first = readFile('./content/first.txt','utf-8',(err, result) => {
    if(err){
        console.log("err")
        return
    }
    const first = result
    readFile('./content/second.txt',
        'utf-8',
        (err,result) => {
            if(err){
                console.log("err")
                return
            }
            const secrrond = result

        writeFile('./content/result-async.txt',
            `Here is the result : ${first}, ${secrrond}`,
            {flag : 'a'},
            (err,result) => {
                if(err) {
                    console.log(err)
                    return
                }
                console.log("done with the tasks here now on move to the next task now on upto the call onto aA")
                console.log(result)
            }
        )


        }
    )
})

console.log("done completely now move to next works on the")