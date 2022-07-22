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
const message = {
    name: 'message',
    passwords: 798868370,
    isLock: true,
    permissions: ['store'],
};
const SourceDecorator = (keys) => {
    return (target, propertyKey, descriptor) => {
        const method = descriptor.value;
        const validate = () => keys.every(key => message.permissions.includes(key));
        descriptor.value = () => {
            if (validate() && message.isLock == true) {
                return method();
            }
            else {
                alert('没有权限');
            }
        };
    };
};
class Source {
    use() {
        console.log('登录成功');
    }
    store() {
        console.log('保存文章');
    }
}
__decorate([
    SourceDecorator(['store', 'manage']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Source.prototype, "store", null);
new Source().store();
