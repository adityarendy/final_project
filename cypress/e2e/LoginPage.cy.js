// Test Case untuk Login Page
const halamanLogin = require ('../support/pages/loginPage/login-page')

describe('Test Case Halaman Login', () => {

    it('Login with valid data', () => {
     // 1. buka web kasirdemo
     // 2. isi Email
     // 3. isi password
     // 4. Pilih Login
     // 5. pastikan halaman dashboard terbuka

     halamanLogin.goOpenWeb()
     halamanLogin.fillEmail()
     halamanLogin.fillPassword()
     halamanLogin.clickBtnLogin()
     halamanLogin.VerifyLoginSuccess()

    
    })  
  })