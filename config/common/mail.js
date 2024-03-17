var nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"dangchph33497@fpt.edu.vn",//Email được gửi đi
        pass:"Xóa"//Mật khẩu email gửi
    }
})

module.exports = transporter