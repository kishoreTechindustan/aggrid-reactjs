import { isEmpty } from 'lodash';

export default function validateProduct (data) {
    let errors = {};

    if (!data.productName) {
        errors.productName = "Product Name Can't Empty";
    }
    if (!data.brand) {
        errors.brand = "Brand is required!";
    }
    if (!data.purchasedDate) {
        errors.purchasedDate = "Purchased Date is required!";
    }
    if (!data.price) {
        errors.price = "price is required!";
    }
    if (!data.offeredPrice) {
        errors.offeredPrice = "offeredPrice is required!";
    }
    if (!data.expriationDate) {
        errors.expriationDate = "expriationDate is required!";
    }
    if (!data.totalBaches) {
        errors.totalBaches = "totalBaches is required!";
    }
    if (!data.quantity) {
        errors.quantity = "quantity is required!";
    }
    if (!data.ppu) {
        errors.ppu = "Price per unit is required!";
    }
    if (!data.unitSize) {
        errors.unitSize = "unitSize is required!";
    }
    if (!data.unitType) {
        errors.unitType = "unitType is required!";
    }

    return {
        isValid: isEmpty(errors),
        errors
    }
}