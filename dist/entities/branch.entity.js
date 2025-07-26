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
exports.Branch = void 0;
const typeorm_1 = require("typeorm");
const kitchen_entity_1 = require("./kitchen.entity");
const branch_product_entity_1 = require("./branch-product.entity");
const order_entity_1 = require("./order.entity");
let Branch = class Branch {
    id;
    kitchen_id;
    name;
    location;
    qr_code;
    table_count;
    created_at;
    kitchen;
    branchProducts;
    orders;
};
exports.Branch = Branch;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Branch.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Branch.prototype, "kitchen_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Branch.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Branch.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Branch.prototype, "qr_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 1 }),
    __metadata("design:type", Number)
], Branch.prototype, "table_count", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Branch.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => kitchen_entity_1.Kitchen, kitchen => kitchen.branches),
    (0, typeorm_1.JoinColumn)({ name: 'kitchen_id' }),
    __metadata("design:type", kitchen_entity_1.Kitchen)
], Branch.prototype, "kitchen", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => branch_product_entity_1.BranchProduct, branchProduct => branchProduct.branch),
    __metadata("design:type", Array)
], Branch.prototype, "branchProducts", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_entity_1.Order, order => order.branch),
    __metadata("design:type", Array)
], Branch.prototype, "orders", void 0);
exports.Branch = Branch = __decorate([
    (0, typeorm_1.Entity)('branches')
], Branch);
//# sourceMappingURL=branch.entity.js.map