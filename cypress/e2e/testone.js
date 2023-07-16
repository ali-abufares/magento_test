///<reference types= "cypress" />

describe("test the total amount", () => {
  it("mens-tops-hodies and Sweatshirts", () => {
    cy.visit(
      "https://magento.softwaretestingboard.com/men/tops-men/hoodies-and-sweatshirts-men.html"
    );

    cy.get(":nth-child(5) > .field > .control > #limiter").select("24");

    cy.get(".price-box .price-final_price").as("priceoftheHodies");

    cy.get("@priceoftheHodies").find(".price").invoke("text").as("itemPrice");

    cy.get("@itemPrice").then((pricetext) => {
      let myPriceList = pricetext.split("$");

      let total = 0;
      for (let i = 0; i < myPriceList.length; i++) {
        total += Number(myPriceList[i]);
        let after=Number( myPriceList[i]*10/100)
        cy.log(myPriceList[i]+" this pefor dicaount  "+Number( myPriceList[i]-after))
      }

      cy.log(total);
    });
  });
  it.only('this is for split three liter', () => {
    cy.visit(
      "https://magento.softwaretestingboard.com/men/tops-men/hoodies-and-sweatshirts-men.html"
    );

    cy.get(":nth-child(5) > .field > .control > #limiter").select("24");

    cy.get(".product-item-info ").as("prodect_name");
   
 cy.get("@prodect_name").find(".product-item-link").invoke("text").as("item_name");
 
 cy.get("@item_name").then((item_name)=>{
  let my_name_list=item_name
    cy.log(my_name_list);

for(let i=0; i < my_name_list.lingth;  i++)
  {
    cy.log(my_name_list[9])
    String(my_name_list[i].substring(0,3))
    cy.log(my_name_list[i])
    


  }
 });
 
    
  });
});
