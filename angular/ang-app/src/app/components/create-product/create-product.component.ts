import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../../services/products.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
})
export class CreateProductComponent implements OnInit{
  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6)
    ])
  });

  constructor(private productService: ProductsService, private modalService: ModalService) {
  }

  ngOnInit() {
  }

  get title() {
    return this.form.controls.title as FormControl;
  }

  submit() {
    this.productService.create({
      title: this.form.value.title as string,
      price: 14,
      description: 'some description',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
      rating: {
        rate: 5,
        count: 7,
      }
    }).subscribe(() => {
      this.modalService.close();
    });
  }
}
