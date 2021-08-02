var CustomerOrder = function(typeOfPizza, pizzaSize, crust,toppings, deliveryOption, 
    pizzaNumberTotal, deliveryLocation ){
    this.typeOfPizza = typeOfPizza;
    this.pizzaSize = pizzaSize;
    this.crust = crust;
    this.toppings = toppings;
    this.deliveryOption = deliveryOption;
    this.pizzaNumberTotal = pizzaNumberTotal;
    this.deliveryLocation = deliveryLocation;
}
//pricing of object
CustomerOrder.prototype.edwinPizza = { 
    //name: "Edwin's Pizza",

    pizzaSizePrice: [
        {default: 0}, 
        {small: 200}, 
        {medium: 500}, 
        {large: 1000}],

    pizzaCrustPrice: [
        {default: 0}, 
        {crispy: 100}, 
        {stuffed: 200}, 
        {glutten_free: 300}],

    deliveryPrice: 200,

    toppingPrice: [
        {default: 0}, 
        {onion_sausage_bacon: 300}, 
        {greenpepper_pepperoni: 500},
        {pineaple_mushrooms: 700}
    ]
}

$(document).ready(function(){
    $("button#customerorder").click(function(event){
        event.preventDefault();

        var typeOfPizza=$("#pizzaType").val();
        var pizzaSize = $("#pizzaSize").val();
        var crust = $("#crust").val();
        var toppings = $("#toppings").val();
        var deliveryOption = $("input[name='delivery']").val()
        var pizzaNumberTotal = parseInt($("#pizzaNumberTotal").val());
        var deliveryLocation = $("#location").val();

        $(".formOutput").show()
        //New Customer
        var customerOrder=new CustomerOrder //(typeOfPizza, pizzaSize, 
            //crust, toppings, deliveryOption, pizzaNumberTotal, 
            //deliveryLocation );

            //Crispy option >onion_sausage_bacon
            if (pizzaSize == "small" && crust == "crispy" && toppings == "onion_sausage_bacon" && deliveryOption == "on"){
                var totalPrice = (customerOrder.edwinPizza.pizzaSizePrice[1].small + 
                    customerOrder.edwinPizza.pizzaCrustPrice[1].crispy + 
                    customerOrder.edwinPizza.toppingPrice[1].onion_sausage_bacon + 
                    customerOrder.edwinPizza.deliveryPrice) * pizzaNumberTotal;
        
                var orderSummary = `
                    <h2>Order Summary</h2>
                    <p>Type of Pizza: ${typeOfPizza}</p>
                    <p>Delivery location: ${deliveryLocation}</p>
                    <p>Number of orders: ${pizzaNumberTotal}</p>
                    <p>Pizza size: Small - KSh. ${customerOrder.edwinPizza.pizzaSizePrice[1].small} </p>
                    <p>Crust: Crispy - KSh. ${customerOrder.edwinPizza.pizzaCrustPrice[1].crispy} </p>
                    <p>Toppings: onion, Sausage and Bacon - KSh. ${customerOrder.edwinPizza.toppingPrice[1].onion_sausage_bacon}</p>
                    <p>Delivery: - KSh. ${customerOrder.edwinPizza.deliveryPrice}</p>
                    <hr>
                    <p>Total: - KSh. ${totalPrice}
                `;
                $(".formOutput").html(orderSummary);
                alert("your pizza will be delivered at " + deliveryLocation)
            }
    })
})