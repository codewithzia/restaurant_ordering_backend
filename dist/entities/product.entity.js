"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const typeorm_1 = require("typeorm");
const kitchen_entity_1 = require("./kitchen.entity");
const product_type_entity_1 = require("./product-type.entity");
const branch_product_entity_1 = require("./branch-product.entity");
const order_item_entity_1 = require("./order-item.entity");
let Product = class Product {
    id;
    kitchen_id;
    product_type_id;
    name;
    description;
    price;
    image;
    created_at;
    kitchen;
    productType;
    branchProducts;
    orderItems;
};
exports.Product = Product;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Product.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Product.prototype, "kitchen_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Product.prototype, "product_type_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Product.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => kitchen_entity_1.Kitchen, kitchen => kitchen.products),
    (0, typeorm_1.JoinColumn)({ name: 'kitchen_id' }),
    __metadata("design:type", kitchen_entity_1.Kitchen)
], Product.prototype, "kitchen", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_type_entity_1.ProductType, productType => productType.products),
    (0, typeorm_1.JoinColumn)({ name: 'product_type_id' }),
    __metadata("design:type", product_type_entity_1.ProductType)
], Product.prototype, "productType", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => branch_product_entity_1.BranchProduct, branchProduct => branchProduct.product),
    __metadata("design:type", Array)
], Product.prototype, "branchProducts", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_item_entity_1.OrderItem, orderItem => orderItem.product),
    __metadata("design:type", Array)
], Product.prototype, "orderItems", void 0);
exports.Product = Product = __decorate([
    (0, typeorm_1.Entity)('products')
], Product);
//# sourceMappingURL=product.entity.js.map