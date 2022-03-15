"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = __importDefault(require("vue"));
const vuex_1 = __importDefault(require("vuex"));
require("./action");
vue_1.default.use(vuex_1.default);
const store = {
    state: {
        hrEmpList: []
    }
};
exports.default = new vuex_1.default.Store(store);
