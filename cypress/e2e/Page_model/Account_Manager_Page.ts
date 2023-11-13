//global variabel
let confirmbutton = '.confirm-button'
let popup = '.display'
let line = 'div[class="line-channel ng-star-inserted"]'
let inputname = '#customer-name-input'
let inputphone = '#tel-input'
let inputaddress = '#address-input'
let inputsearchadd = '#search-address'
let subsearchadd = '.tt-dataset > :nth-child(3)'
let addproduct = '#custom-product-add'
let productname = '#custom-product-name-input-0'
let productprice = '#custom-product-price-input-0'
let productweight= '#custom-product-weight-input-0'
let selectbutton = '.col-10 > .page-footer > .bottom-stat > .action > #select-product-button'
let order = '.order-row'
let labelname = '#table-name-label-0'
let selecteditbutton = '//p[@id="table-name-label-0"]'
let editbutton = '#handle-click-edit-order'
let editclearphone = '#customer-tel-input'
let editinputphone = '#customer-tel-input'
let changebutton = '#submit-change-order-btn'
let lebelphone = '#table-tel-label-0'
let checkbox = '.checkboxrow'
let confirmorderbutton = 'button[id="confirm-order-btn"]'
let confirmsubmitbutton = 'button[id="confirm-submit-button"]'
export class manager{
    clickconfirmbutton(){
        cy.get(confirmbutton).click()
        cy.wait(1000)
    }
    clickappline(){
        cy.get(line).click()
    }
    clicksubsearchAdd(){
        cy.get(subsearchadd).click()
    }
    clickAddproduct(){
        cy.get(addproduct).click()
    }
    clickselectbutton(){
        cy.get(selectbutton).click()
    }
    clicklabelname(){
        cy.get(labelname).click()
    }
    clickSelectEditbutton(){
        cy.get(selecteditbutton).click()
    }
    clickEditbutton(){
        cy.get(editbutton).click()
    }
    clickChangebutton(){
        cy.get(changebutton).click()
    }
    clickCheckbox(){
        cy.get(checkbox).click()
    }
    clickConfirmOrder(){
        cy.get(confirmorderbutton).click()
        cy.wait(1000)
    }
    clickConfirmSubmitOrder(){
        cy.get(confirmsubmitbutton).click()
        cy.wait(1000)
        
    }
    cleartextPhone(){
        cy.get(editclearphone).clear()
    }

    InputName(name:string){
        cy.get(inputname).type(name)
    }
    InputPhone(phone:string){
        cy.get(inputphone).type(phone)
    }
    InputAddress(address:string){
        cy.get(inputaddress).type(address)
    }
    InputsearchAdd(searchAdd:string){
        cy.get(inputsearchadd).type(searchAdd)
    }
    Inputproductname(Pname:string){
        cy.get(productname).type(Pname)
    }
    Inputproductprice(Pprice:string){
        cy.get(productprice).type(Pprice)
    }
    Inputproductweight(Pweight:string){
        cy.get(productweight).type(Pweight)
    }
    InputEditPhone(Ephone:string){
        cy.get(editinputphone).type(Ephone)

    }
    
    validatepopup(tpopup:string){
        cy.get(popup).should('have.text',tpopup)
    }
    validateapplication(){
        cy.get('div[class="header-text"]').should('have.text','เพิ่มสินค้าใหม่จากช่องทางการขายอื่น').and('have.length',1)
        cy.get('.font-15').should('have.text','* เลือกช่องทางการติดต่อ').and('have.length',1)
        cy.get('div[class="line-channel ng-star-inserted"]').should('have.text','LINE').and('have.length',1)
        cy.get('div[class="instagram-channel ng-star-inserted"]').should('have.text','IG').and('have.length',1)
        cy.get('div[class="twitter-channel ng-star-inserted"]').should('have.text','TWIT').and('have.length',1)
        cy.get('div[class="facebook-channel ng-star-inserted"]').should('have.text','FB').and('have.length',1)
        cy.get('div[class="website-channel ng-star-inserted"]').should('have.text','WWW').and('have.length',1)
        cy.get('div[class="other-channel ng-star-inserted"]').should('have.text','ETC.').and('have.length',1)
        cy.get('div[class="tiktok-channel ng-star-inserted"]').should('have.text','Tiktok').and('have.length',1)
        cy.get('div[class="lazada-channel ng-star-inserted"]').should('have.text','LAZ').and('have.length',1)
        cy.get('div[class="shopee-channel ng-star-inserted"]').should('have.text','SHOPEE').and('have.length',1)
    }
    validatetextfeildcreateorderpage(){
        cy.get('.name-box > .invalid-input > .invalid-message').should('have.text','กรุณากรอก ชื่อ-นามสกุล ของผู้รับ')
        cy.get(':nth-child(5) > .invalid-input > .invalid-message').should('have.text','กรุณากรอกเบอร์โทรให้ครบถ้วน')
        cy.get(':nth-child(7) > .invalid-input > .invalid-message').should('have.text','กรุณากรอกที่อยู่')
        cy.get(':nth-child(9) > .invalid-input > .invalid-message').should('have.text','กรุณากรอกตำแหน่งของผู้รับ')
        cy.get('.w-100 > :nth-child(1) > .form-label > .text-red').should('have.text','*')
        cy.get('.date-section > .form-label > .text-red').should('have.text','*')
        cy.get('.time-section > .form-label > .text-red').should('have.text','*')
    }
    validatecrateorder(orderrow:string){
        cy.get(order).should('contain',orderrow).and('have.length',1)
    }
    validatelabelEditorder(){
        cy.get('.adjust-shorten > .lead').should('have.text','ชื่อ :')
        cy.get(':nth-child(2) > .lead').should('have.text','ที่อยู่ :')
        cy.get(':nth-child(3) > .lead').should('have.text','เบอร์โทร :')
        cy.get('.is-highlight > span').should('have.text','สถานะออเดอร์')
        cy.get('p[class="lead-top"]').should('have.text','ช่องทางการขาย')
        cy.get('.ex-tbl-header > .w-28 > p').should('have.text','ชื่อสินค้า')
        cy.get('.ex-tbl-header > .w-17 > p').should('have.text','น้ำหนักสินค้า(กก.)')
        cy.get('.ex-tbl-header > .w-18 > p').should('have.text','ราคาสินค้า(บาท)')
        cy.get('.ex-tbl-header > :nth-child(6) > p').should('have.text','จำนวน')
        cy.get('.ex-tbl-header > :nth-child(7) > p').should('have.text','ราคารวม')
        cy.get(':nth-child(1) > :nth-child(1) > .price-expand > :nth-child(1)').should('have.text','น้ำหนักสินค้าทั้งหมด')
        cy.get(':nth-child(1) > :nth-child(2) > .price-expand > :nth-child(1)').should('have.text','ราคาสินค้าทั้งหมด')
        cy.get(':nth-child(1) > :nth-child(3) > .price-expand > :nth-child(1)').should('have.text','ยอดเงินที่ชำระทั้งหมด')
        cy.get(':nth-child(2) > :nth-child(1) > .price-expand > :nth-child(1)').should('have.text','ค่าจัดส่ง')
        cy.get(':nth-child(2) > :nth-child(2) > .price-expand > :nth-child(1)').should('have.text','ส่วนลด')
        cy.get('.pt-1').should('have.text','ยอดรวมสุทธิ')
    }
    validateDataEditOrder(){
        cy.get('#table-name-label-0').should('have.text',' สมใจ รักดี ')
        cy.get('.block-column-group > :nth-child(2)').should('have.text','ที่อยู่ : 199/9 ม.6 ถ.สว่าง ต.เขารูปช้าง อ.เมือง จ.สงขลา 90000 ต.พะวง อ.เมืองสงขลา จ.สงขลา 90100')
        cy.get('.block-column-group > :nth-child(3)').should('have.text','เบอร์โทร : 098-888-8888')
        cy.get('.success').should('have.text','ชำระเงินแล้ว')
        cy.get('img[class="rounded-circle ng-star-inserted"]').should('have.attr','src','./assets/order-management/other-sell/Line.png')
        cy.get('.w-28 > .adjust-shorten').should('have.text',' ขนมลาอบกรอบ ')
        cy.get('.aligment-right').should('have.text','0.45')
        cy.get('.ex-tbl-row > .w-18 > p').should('have.text','100.00')
        cy.get('.ex-tbl-row > :nth-child(6) > p').should('have.text','1.00')
        cy.get('.ex-tbl-row > :nth-child(7) > p').should('have.text','100.00')
        cy.get(':nth-child(1) > :nth-child(1) > .price-expand > .price-detail').should('have.text','0.45 กก.')
        cy.get(':nth-child(1) > :nth-child(2) > .price-expand > .price-detail').should('have.text','100.00 บาท')
        cy.get(':nth-child(1) > :nth-child(3) > .price-expand > .price-detail').should('have.text','100.00 บาท')
        cy.get(':nth-child(2) > :nth-child(1) > .price-expand > .price-detail').should('have.text','0.00 บาท')
        cy.get(':nth-child(2) > :nth-child(2) > .price-expand > .price-detail').should('have.text','0.00 บาท')
        cy.get(':nth-child(2) > :nth-child(3) > .price-expand > .price-detail').should('have.text','100.00 บาท')
    }
    validateEditPhone(vphone:string){
        cy.get(lebelphone).should('have.text',vphone)
    }
    
    Logout(){
        cy.get('.profile>.profile-image').dblclick()
        cy.get('#logout').click()
    }
}