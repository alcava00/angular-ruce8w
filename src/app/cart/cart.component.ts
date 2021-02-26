import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";
import { FormBuilder } from "@angular/forms";
import { NONE_TYPE } from "@angular/compiler";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  orderResult;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: "",
      address: ""
    });
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }
  onSubmit(customerData) {
    // 주문 로직은 여기에 구현합니다.
    this.items = this.cartService.clearCart();
    this.orderResult = this.checkoutForm;
    this.checkoutForm.reset();

    console.warn("Your order has been submitted", customerData);
  }

  clearOrder() {
    this.orderResult = null;
  }
}
