///<reference types="cypress" />

import {login} from "../Page_model/Login_page"
import {manager} from '../Page_model/Account_Manager_Page'

const Login = new login()
const Manager = new manager()

describe('Account Manager Page', () => {
    beforeEach(()=>{
        // resolution
        cy.viewport(1920,1080)
    })
    before(() =>{
        // website
        cy.viewport(1920,1080)
        cy.visit('https://myorder.ai/')
    })
    
    it('Should load the website', () => {
        //  validate home page
        Login.validatePage()
    });
    it('Login Page => Should check the title', () => {
        //validate text login page
        Login.validatetitle()
    })

    it('Login Page => Validate error message',() => {
        // validate error message
        Login.clickLoginButton()
        Login.validateEmail('* กรุณากรอกอีเมลให้ถูกต้อง')
        Login.validatePassword('* กรุณากรอกรหัสผ่าน')
    })
    it('Login Page => Fail',() => {
        //input account login fail 
        Login.clickLoginButton()
        Login.TypeEmailfail('xxxxx@xxxx.com')
        Login.TypePasswordfail('11111111')
        Login.clickLoginButton()
        Login.validateEP('* ไม่พบบัญชีนี้ โปรดใช้บัญชีอื่น หรือลงทะเบียนสำหรับบัญชีใหม่')
    })
    
    it('Login Page => Success', () => {
        //input account login success
        Login.cleartextboxEP()
        Login.TypeEmailsuccess('chanatud7@gmail.com')
        Login.TypePasswordsuccess('11111111')
        Login.clickLoginButton()
        Login.validateurl()
    })
    it('Choose Myorder & My Team',() => {
        //validate my order page at show team and order
        Login.validateChooseyourteam()
    })
    it('Account Manager Page => Should check title',() => {
        //validate buy-sell page
        Manager.validateapplication()
    })
    it('Account Manager Page => Validate create order page',() => {
        //validate create order page
        Manager.clickconfirmbutton()
        Manager.validatepopup('กรุณาเลือกช่องทางการขาย')
        Manager.clickappline()
        Manager.clickconfirmbutton()
        Manager.validatepopup('กรุณาระบุข้อมูลผู้รับให้ครบถ้วน')
        Manager.validatetextfeildcreateorderpage()
    })
    it('Account Manager Page => Create order',() => {
        // input data test create order
        Manager.InputName('สมใจ รักดี')
        Manager.InputPhone('0988888888')
        Manager.InputAddress('199/9 ม.6 ถ.สว่าง ต.เขารูปช้าง อ.เมือง จ.สงขลา 90000')
        Manager.InputsearchAdd('สงข')
        Manager.clicksubsearchAdd()
        Manager.clickAddproduct()
        Manager.Inputproductname('ขนมลาอบกรอบ')
        Manager.Inputproductprice('100')
        Manager.Inputproductweight('0.45')
        Manager.clickselectbutton()
        Manager.clickconfirmbutton()
        Manager.validatecrateorder('ขนมลาอบกรอบ')
    })
    it('Account Maneger Page => Validate label edit order page',() => {
        //validate Label Edit page
        Manager.clicklabelname()
        Manager.validatelabelEditorder()
      
    })
    it('Account Manager Page => Validate data edit order page',() => {
        //validate data Edit page
        Manager.validateDataEditOrder()
    })
    it('Account Manager Page => Edit order',() => {
        //Edit phone number
        //Manager.clickSelectEditbutton()
        Manager.clickEditbutton()
        Manager.cleartextPhone()
        Manager.InputEditPhone('0871111111')
        Manager.clickChangebutton()
        Manager.validateEditPhone('087-111-1111')
    })
    it('Account Manager Page => Delete order',() => {
        //Edit my order
        Manager.clickCheckbox()
        Manager.clickConfirmOrder()
        Manager.clickConfirmSubmitOrder()
        
    })
    after(()=>{
        //Log out
        Manager.Logout()

    })
})