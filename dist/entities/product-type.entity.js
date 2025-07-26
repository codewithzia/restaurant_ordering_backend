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
exports.ProductType = void 0;
const typeorm_1 = require("typeorm");
const kitchen_entity_1 = require("./kitchen.entity");
const product_entity_1 = require("./product.entity");
let ProductType = class ProductType {
    id;
    name;
    kitchen_id;
    created_at;
    kitchen;
    products;
};
exports.ProductType = ProductType;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ProductType.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProductType.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProductType.prototype, "kitchen_id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ProductType.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => kitchen_entity_1.Kitchen, kitchen => kitchen.products),
    (0, typeorm_1.JoinColumn)({ name: 'kitchen_id' }),
    __metadata("design:type", kitchen_entity_1.Kitchen)
], ProductType.prototype, "kitchen", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => product_entity_1.Product, product => product.productType),
    __metadata("design:type", Array)
], ProductType.prototype, "products", void 0);
exports.ProductType = ProductType = __decorate([
    (0, typeorm_1.Entity)('product_types')
], ProductType);
//# sourceMappingURL=product-type.entity.js.map