"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractDetailList = void 0;
const mutation_1 = __importDefault(require("@/store/logi/production/mutation"));
const action_1 = __importDefault(require("@/store/logi/production/action"));
class ContractDetailList {
    constructor() {
        this.contractDetailList = [];
    }
}
exports.ContractDetailList = ContractDetailList;
const Production = {
    namespaced: true,
    state: new ContractDetailList(),
    mutations: mutation_1.default,
    actions: action_1.default,
};
exports.default = Production;
