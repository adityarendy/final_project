const halamanLogin = require ('../support/pages/loginPage/login-page')
const halamanRegister = require ('../support/pages/registerPage/register-page')


//Generate Random User dan email
var randomUser = generateRandomUser();
var randomEmail = generateRandomEmail();

function generateRandomUser(){
  const time = new Date().getTime()
  return "user"+time;
}

function generateRandomEmail(){
  const userMail = new Date().getTime()
  return userMail+"@test.com"
}

// Test Case untuk Register Page
describe('Test Case Halaman Register', () => {

    it('Register with valid data', () => {
     // 1. buka web kasirdemo
     // 2. pilih "ingin mencoba, daftar?"
     // 3. Isi vali dnama toko
     // 4. Isi valid Email
     // 5. Isi valid password
     // 6. Pilih daftar
     // 7. Akun berhasil teregistrasi
  
     halamanLogin.goOpenWeb()
     halamanLogin.clickBtnDaftar()
     halamanRegister.fillNamaToko(randomUser)
     halamanRegister.fillEmail(randomEmail)
     halamanRegister.fillPassword()
     halamanRegister.clickBtnDaftar()
     halamanRegister.verifyDaftarSuccess()
     

     
    });
    
  
  })