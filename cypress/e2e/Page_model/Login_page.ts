//global variable
let loginbutton = '#login-button'
let erremail = ':nth-child(4) > p'
let errpassword = ':nth-child(6) > p'
let errEP = '#client-error-message > p'
let typeemailfail = 'input[id="email-input"]'
let typepasswordfail = 'input[id="password-input"]'
let typeemailsuccess = '#email-input'
let typepasswordsuccess='#password-input'
export class login{
    
    cleartextboxEP(){
        cy.get(typeemailfail).clear() 
        cy.get(typepasswordfail).clear()  
    }
    clearPassword(){
        cy.get(typepasswordfail).clear()
    }
    clickLoginButton(){
        cy.get(loginbutton).click()
        cy.wait(500)
    }
    TypeEmailfail(emailfail:string){
        cy.get(typeemailfail).type(emailfail)
    }
    TypePasswordfail(passwordfail:string){
        cy.get(typepasswordfail).type(passwordfail);
    }
    TypeEmailsuccess(emailsuccess:string){
        cy.get(typeemailsuccess).type(emailsuccess)
    }
    TypePasswordsuccess(passwordsuccess:string){
        cy.get(typepasswordsuccess).type(passwordsuccess);
    }
    validatePage(){
        cy.url().should('include', 'https://myorder.ai/');
        cy.get('.col-md-2.box > .btn').invoke('removeAttr', 'target').click();
        cy.url().should('include','https://www.myorder.ai/auth/login');
    }

    validateEmail(messageE:string){
        cy.get(erremail).should('have.text',messageE)
    }

    validatePassword(messageP:string){
        cy.get(errpassword).should('have.text',messageP)
    }
    validateEP(messageEP:string){
        cy.get(errEP).should('have.text',messageEP)
    }
    validatetitle(){
        //cy.contains('ยินดีต้อนรับกลับมา! เข้าสู่ระบบแล้วจัดการร้านค้ากัน',{matchOn:'text'}).should('have.length',1)
        cy.contains('ลืมรหัสผ่าน').should('have.length',1)
        cy.contains('เข้าสู่ระบบ').should('have.length',1)
        cy.contains(' เริ่มต้นใช้งาน? ').should('have.length',1)
    }
    validateChooseyourteam(){
        cy.url().should('include', 'https://www.myorder.ai/team/list')
        cy.contains('My-order').should('have.length',0)
        cy.contains('เลือกทีมของคุณ').should('have.length',1)
        cy.contains('เพิ่มทีมใหม่').should('have.length',1)
        cy.get('.data').click();
        cy.url().should('include', 'https://www.myorder.ai/order/other-sell')
    }
    validateurl(){
        cy.url().should('include', 'https://www.myorder.ai/team/list')
    }
}