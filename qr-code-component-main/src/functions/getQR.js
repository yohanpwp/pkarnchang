
const form = document.getElementById("addAmounts")
const imageQRCode = document.createElement('img')

async function makeRequest() {
        try {
            let config = {
                method : 'post' ,
                maxBodyLength : Infinity ,
                url : 'https://uat.eorder.smart-ms2.com/api/scb/token' ,
                headers : { }
            }
            const response = await axios.request(config);
            console.log(response.json().data)
            return response.data.accessToken
        }
        catch (error) {
            console.log(error.status)
        }

    }

async function requestQR(amounts) {
    try {
        let config = {
            method : 'post' ,
            maxBodyLength : Infinity ,
            url : 'https://uat.eorder.smart-ms2.com/api/scb/token' ,
            headers : { } ,
            data : data
            
        }
        const response = await axios.request(config);
        console.log(response.json().data)
        return response.data.qrImage
    } catch (error) {
        console.log(error.status)
    }
}


    form.addEventListener('submit',async (e) => {
        e.preventDefault()
        console.log(form.amounts.value)
        //เรียกฟังก์ชั่นสร้าง token ออกมา
        const token =  await makeRequest()
        console.log('token :',token)
        //เอาเงืนที่กรอกในฟอร์มเข้าฟังก์ชั่น
        const qrImage = await requestQR(form.amounts.value)
        console.log('URL :',qrImage)
        imageQRCode.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxNTwltT_kqfQYsCE-xTBGkT03Y_S4WFZwag&s';
        imageQRCode.alt = 'รูปแสกน'
        document.body.appendChild(imageQRCode);
    });
