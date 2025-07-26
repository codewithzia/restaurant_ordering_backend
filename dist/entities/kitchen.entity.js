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
exports.Kitchen = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const kitchen_plan_entity_1 = require("./kitchen-plan.entity");
const branch_entity_1 = require("./branch.entity");
const product_entity_1 = require("./product.entity");
const notification_entity_1 = require("./notification.entity");
let Kitchen = class Kitchen {
    id;
    user_id;
    name;
    logo;
    product_limit;
    plan_id;
    created_at;
    user;
    plan;
    branches;
    products;
    notifications;
};
exports.Kitchen = Kitchen;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Kitchen.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Kitchen.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Kitchen.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Kitchen.prototype, "logo", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 10 }),
    __metadata("design:type", Number)
], Kitchen.prototype, "product_limit", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Kitchen.prototype, "plan_id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Kitchen.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.kitchens),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.User)
], Kitchen.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => kitchen_plan_entity_1.KitchenPlan, plan => plan.kitchens),
    (0, typeorm_1.JoinColumn)({ name: 'plan_id' }),
    __metadata("design:type", kitchen_plan_entity_1.KitchenPlan)
], Kitchen.prototype, "plan", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => branch_entity_1.Branch, branch => branch.kitchen),
    __metadata("design:type", Array)
], Kitchen.prototype, "branches", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => product_entity_1.Product, product => product.kitchen),
    __metadata("design:type", Array)
], Kitchen.prototype, "products", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => notification_entity_1.Notification, notification => notification.kitchen),
    __metadata("design:type", Array)
], Kitchen.prototype, "notifications", void 0);
exports.Kitchen = Kitchen = __decorate([
    (0, typeorm_1.Entity)('kitchens')
], Kitchen);
//# sourceMappingURL=kitchen.entity.js.map