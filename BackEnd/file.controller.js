const fs = require('fs')
const baseurl = "http://localhost:8080/storage/"

const getfiles = (req, res) => {
    const directpath = "http://localhost:8080/storage/"
    fs.readdir(directpath, (err, files) => {
        if (err) {
            res.status(500).send({
                message: "unable to scan files"
            })
        } else {
            let filesInfo = []
            files.forEach(file => {
                filesInfo.push({
                    name: file,
                    path: baseurl + file,
                })
            })
            res.status(200).send(filesInfo)
        }
    })
}
const download = (req, res) => {
    const fileName = req.params.name
    const directorypath = baseUrl

    res.download(directorypath + fileName, fileName, err => {
        if (err) {
            res.status(500).send({
                message: "unable to download the file: " + err
            })
        }
    })
}


module.exports={
    getfiles,
    download
}