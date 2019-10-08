
function SalesOrder(customer,salesTaxRate, items) {
    salesOrder = {};
    
    salesOrder.customer = customer;
    salesOrder.salesTaxRate = salesTaxRate;
    salesOrder.items = items;

    salesOrder.getValue = function() {
        totalValue = 0.00;
        salesOrder.items.forEach(item => {
            totalValue = totalValue + item.getValues();
        })
        
        
        return totalValue;
    }


    salesOrder.getTotalValue = function () {
        priceWithoutST = salesOrder.getValue();
        priceWithST = salesOrder.getValue() + (priceWithoutST * salesOrder.salesTaxRate);
        return priceWithST;
    }

    return salesOrder;
}

module.exports = SalesOrder;
