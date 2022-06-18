import { Component, OnInit } from "@angular/core";


@Component({
    selector:'app-product',
    templateUrl:'./product.component.html',
    // styleUrls:['./product.component.scss']
    styles:[`
    p{
        color:blue;
    }
    
    `]
})
export class ProductComponent implements OnInit{
    isDisabled:boolean=true;
    productStatus:string="No product added yet?"
    productName:string="OnePlus";
    productID:number= 45;

    ngOnInit(): void {
        setTimeout(() => {
            this.isDisabled=false;
        },3000);
    }
    addedMsg(){
        this.productStatus="wow! New Product added...!!!"
    }
    
    getProductID(){
        return this.productID;
    }
    
}

