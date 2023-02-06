import multer from 'multer'
var storage = multer.diskStorage({
    destination: function (req: any, file: any, cb: any) {
        cb(null, './uploads')
    },
    filename: function (req: any, file: any, cb: any) {
        cb(null, `${Date.now()}--${file.originalname}`)
    }
})
var upload = multer({ storage: storage })

export default upload
