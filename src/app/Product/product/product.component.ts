import { Component } from '@angular/core';
import { ICategory } from 'src/app/NewShared/icategory';
import { IProducts } from 'src/app/NewShared/iproducts';
import { DiscountOffers } from 'src/app/NewShared/discount-offers';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  storedDiscount:DiscountOffers;
  IsShown:boolean=true;
storedName:string;
storedLogo:string;
ProductList:IProducts[];
CateogoryList:ICategory[];
ClientName:string;
IsPurshased:boolean;
constructor()
{
  this.storedName="Assiut Store";
  this.storedLogo='https://picsum.photos/100/100';
  this.ProductList=[
    {Id:1,Name:'printer',Quantity:200,Price:1000,Image:'https://picsum.photos/100/100'},
    {Id:2,Name:'furniture',Quantity:1000,Price:3453,Image:'https://picsum.photos/100/100'},
    {Id:3,Name:'Clothes',Quantity:9654,Price:5432,Image:'https://picsum.photos/100/100'},
    {Id:4,Name:'Laptops',Quantity:3322,Price:5433,Image:'https://picsum.photos/100/100'},
    {Id:5,Name:'Mobiles',Quantity:3221,Price:3221,Image:'https://picsum.photos/100/100'},
    {Id:6,Name:'Fridges',Quantity:45443,Price:22134,Image:'https://picsum.photos/100/100'},
    {Id:7,Name:'Screens',Quantity:2323,Price:3121,Image:'https://picsum.photos/100/100'}
  ],
  this.CateogoryList=[
    {Id:1,Name:'Vegetables'},
    {Id:2,Name:'fruits'},
    {Id:3,Name:'meats'},
    {Id:4,Name:'equipments'},
    {Id:5,Name:'electronics'},
    {Id:6,Name:'beans'},
    {Id:7,Name:'fishes'}
  ],
  this.ClientName="Mohamed Refaat";
  this.IsPurshased=false;
  this.storedDiscount=DiscountOffers.NoDiscount
}
get myEnum() {
  return DiscountOffers;
}
Toggle()
{
  this.IsPurshased=!this.IsPurshased;
  this.IsShown=!this.IsShown;

}
}
