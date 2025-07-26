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
exports.KitchenPlan = void 0;
const typeorm_1 = require("typeorm");
const kitchen_entity_1 = require("./kitchen.entity");
let KitchenPlan = class KitchenPlan {
    id;
    name;
    product_limit;
    branch_limit;
    analytics_access;
    support_level;
    kitchens;
};
exports.KitchenPlan = KitchenPlan;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], KitchenPlan.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], KitchenPlan.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], KitchenPlan.prototype, "product_limit", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], KitchenPlan.prototype, "branch_limit", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], KitchenPlan.prototype, "analytics_access", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], KitchenPlan.prototype, "support_level", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => kitchen_entity_1.Kitchen, kitchen => kitchen.plan),
    __metadata("design:type", Array)
], KitchenPlan.prototype, "kitchens", void 0);
exports.KitchenPlan = KitchenPlan = __decorate([
    (0, typeorm_1.Entity)('kitchen_plans')
], KitchenPlan);
//# sourceMappingURL=kitchen-plan.entity.js.map