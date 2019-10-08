function SalesOrderItem(product, price, quantity) {
    let item = {};
    item.product = product;
    item.price = price;
    item.quantity = quantity;

    item.getValues = function() {
        return item.quantity * item.price;
    }
    return item;
}

module.exports = SalesOrderItem;
