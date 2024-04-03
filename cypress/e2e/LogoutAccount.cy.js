// Test Case untuk Logout account
const halamanLogin = require ('../support/pages/loginPage/login-page')
const dashboard = require('../support/pages/dashboard/dashboard')


describe('Test Case Logout acccount', () => {

    it('Logout account', () => {
     // 1. buka web kasirdemo
     // 2. isi Email
     // 3. isi password
     // 4. Pilih Login
     // 5. pastikan halaman dashboard terbuka
     // 6. pilih menu profile
     // 7. pilih logout
     // 8. pastikan akun berhasil logout
  
    
     halamanLogin.goOpenWeb()
     halamanLogin.fillEmail()
     halamanLogin.fillPassword()
     halamanLogin.clickBtnLogin()
     halamanLogin.VerifyLoginSuccess()
     dashboard.openMenu()
     dashboard.clickBtnLogout()
     dashboard.verifyLogout()
    

    })
   
  
  })