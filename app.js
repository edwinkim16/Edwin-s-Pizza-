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

             //Crispy Green_Pepper_Pepperoni
             if (pizzaSize == "small" && crust == "crispy" && toppings == "greenpepper_pepperoni" && deliveryOption == "on"){
                var totalPrice = (customerOrder.edwinPizza.pizzaSizePrice[1].small + 
                    customerOrder.edwinPizza.pizzaCrustPrice[1].crispy + 
                    customerOrder.edwinPizza.toppingPrice[2].greenpepper_pepperoni + 
                    customerOrder.edwinPizza.deliveryPrice) * pizzaNumberTotal;
                
                var orderSummary = `
                    <h2>Order Summary</h2>
                    <p>Type of Pizza: ${typeOfPizza}</p>
                    <p>Delivery location: ${deliveryLocation}</p>
                    <p>Number of orders: ${pizzaNumberTotal}</p>
                    <p>Pizza size: Small - KSh. ${customerOrder.edwinPizza.pizzaSizePrice[1].small} </p>
                    <p>Crust: Crispy - KSh. ${customerOrder.edwinPizza.pizzaCrustPrice[1].crispy} </p>
                    <p>Toppings: green pepper pepperoni - KSh. ${customerOrder.edwinPizza.toppingPrice[2].greenpepper_pepperoni}</p>
                    <p>Delivery: - KSh. ${customerOrder.edwinPizza.deliveryPrice}</p>
                    <hr>
                    <p>Total: - KSh. ${totalPrice}
                    `;
                $(".formOutput").html(orderSummary);
                alert("your pizza will be delivered at " + deliveryLocation)
            }
            //crispy Pineaple_mushrooms
            if (pizzaSize == "small" && crust == "crispy" && toppings == "pineaple_mushrooms" && deliveryOption == "on"){
                let totalPrice = (customerOrder.edwinPizza.pizzaSizePrice[1].small + 
                    customerOrder.edwinPizza.pizzaCrustPrice[1].crispy + 
                    customerOrder.edwinPizza.toppingPrice[3].pineaple_mushrooms + 
                    customerOrder.edwinPizza.deliveryPrice) * pizzaNumberTotal;
            
                let orderSummary = `
                    <h2>Order Summary</h2>
                    <p>Type of Pizza: ${typeOfPizza}</p>
                    <p>Delivery location: ${deliveryLocation}</p>
                    <p>Number of orders: ${pizzaNumberTotal}</p>
                    <p>Pizza size: Small - KSh. ${customerOrder.edwinPizza.pizzaSizePrice[1].small} </p>
                    <p>Crust: Crispy - KSh. ${customerOrder.edwinPizza.pizzaCrustPrice[1].crispy} </p>
                    <p>Toppings: Pineaple mushroom - KSh. ${customerOrder.edwinPizza.toppingPrice[3].pineaple_mushrooms}</p>
                    <p>Delivery: - KSh. ${customerOrder.edwinPizza.deliveryPrice}</p>
                    <hr>
                    <p>Total: - KSh. ${totalPrice}
                    `;
                $(".formOutput").html(orderSummary);
                alert("your pizza will be delivered at " + deliveryLocation)
            }
            //Stuffed > onion_sausage_bacon
            if (pizzaSize == "small" && crust == "stuffed" && toppings == "onion_sausage_bacon" && deliveryOption == "on"){
                var totalPrice = (customerOrder.edwinPizza.pizzaSizePrice[1].small + 
                    customerOrder.edwinPizza.pizzaCrustPrice[2].stuffed + 
                    customerOrder.edwinPizza.toppingPrice[1].onion_sausage_bacon + 
                    customerOrder.edwinPizza.deliveryPrice) * pizzaNumberTotal;
                
                let orderSummary = `
                    <h2>Order Summary</h2>
                    <p>Type of Pizza: ${typeOfPizza}</p>
                    <p>Delivery location: ${deliveryLocation}</p>
                    <p>Number of orders: ${pizzaNumberTotal}</p>
                    <p>Pizza size: Small - KSh. ${customerOrder.edwinPizza.pizzaSizePrice[1].small} </p>
                    <p>Crust: Stuffed - KSh. ${customerOrder.edwinPizza.pizzaCrustPrice[2].stuffed} </p>
                    <p>Toppings: Onion, Sausage and Bacon - KSh. ${customerOrder.edwinPizza.toppingPrice[1].onion_sausage_bacon}</p>
                    <p>Delivery: - KSh. ${customerOrder.edwinPizza.deliveryPrice}</p>
                    <hr>
                    <p>Total: - KSh. ${totalPrice}
                    `;
                $(".formOutput").html(orderSummary);
                alert("your pizza will be delivered at " + deliveryLocation)
                //alert(orderSummary);
            }
            //Stuffed Green Pepper pepperoni
            if (pizzaSize == "small" && crust == "stuffed" && toppings == "greenpepper_pepperoni" && deliveryOption == "on"){
                var totalPrice = (customerOrder.edwinPizza.pizzaSizePrice[1].small + 
                    customerOrder.edwinPizza.pizzaCrustPrice[2].stuffed + 
                    customerOrder.edwinPizza.toppingPrice[2].greenpepper_pepperoni + 
                    customerOrder.edwinPizza.deliveryPrice) * pizzaNumberTotal;
                
                let orderSummary = `
                    <h2>Order Summary</h2>
                    <p>Type of Pizza: ${typeOfPizza}</p>
                    <p>Delivery location: ${deliveryLocation}</p>
                    <p>Number of orders: ${pizzaNumberTotal}</p>
                    <p>Pizza size: Small - KSh. ${customerOrder.edwinPizza.pizzaSizePrice[1].small} </p>
                    <p>Crust: Stuffed - KSh. ${customerOrder.edwinPizza.pizzaCrustPrice[2].stuffed} </p>
                    <p>Toppings: Green Pepper Pepperoni - KSh. ${customerOrder.edwinPizza.toppingPrice[2].greenpepper_pepperoni}</p>
                    <p>Delivery: - KSh. ${customerOrder.edwinPizza.deliveryPrice}</p>
                    <hr>
                    <p>Total: - KSh. ${totalPrice}
                    `;
                $(".formOutput").html(orderSummary);
                alert("your pizza will be delivered at " + deliveryLocation)
            }
            //Stuffed Pineaple Mushroom
            if (pizzaSize == "small" && crust == "stuffed" && toppings == "pineaple_mushrooms" && deliveryOption == "on"){
                var totalPrice = (customerOrder.edwinPizza.pizzaSizePrice[1].small + 
                    customerOrder.edwinPizza.pizzaCrustPrice[2].stuffed + 
                    customerOrder.edwinPizza.toppingPrice[3].pineaple_mushrooms + 
                    customerOrder.edwinPizza.deliveryPrice) * pizzaNumberTotal;
                
                let orderSummary = `
                    <h2>Order Summary</h2>
                    <p>Type of Pizza: ${typeOfPizza}</p>
                    <p>Delivery location: ${deliveryLocation}</p>
                    <p>Number of orders: ${pizzaNumberTotal}</p>
                    <p>Pizza size: Small - KSh. ${customerOrder.edwinPizza.pizzaSizePrice[1].small} </p>
                    <p>Crust: Stuffed - KSh. ${customerOrder.edwinPizza.pizzaCrustPrice[2].stuffed} </p>
                    <p>Toppings: Pineaple Mushroom - KSh. ${customerOrder.edwinPizza.toppingPrice[3].pineaple_mushrooms}</p>
                    <p>Delivery: - KSh. ${customerOrder.edwinPizza.deliveryPrice}</p>
                    <hr>
                    <p>Total: - KSh. ${totalPrice}
                    `;
                $(".formOutput").html(orderSummary);
                alert("your pizza will be delivered at " + deliveryLocation)
            }
            //Gluten free onion_sausage_bacon
            if (pizzaSize == "small" && crust == "glutten_free" && toppings == "onion_sausage_bacon" && deliveryOption == "on"){
                var totalPrice = (customerOrder.edwinPizza.pizzaSizePrice[1].small + 
                    customerOrder.edwinPizza.pizzaCrustPrice[3].glutten_free + 
                    customerOrder.edwinPizza.toppingPrice[1].onion_sausage_bacon + 
                    customerOrder.edwinPizza.deliveryPrice) * pizzaNumberTotal;
                
                let orderSummary = `
                    <h2>Order Summary</h2>
                    <p>Type of Pizza: ${typeOfPizza}</p>
                    <p>Delivery location: ${deliveryLocation}</p>
                    <p>Number of orders: ${pizzaNumberTotal}</p>
                    <p>Pizza size: Small - KSh. ${customerOrder.edwinPizza.pizzaSizePrice[1].small} </p>
                    <p>Crust: Glutten free - KSh. ${customerOrder.edwinPizza.pizzaCrustPrice[3].glutten_free} </p>
                    <p>Toppings: Potato, sausage and bacon - KSh. ${customerOrder.edwinPizza.toppingPrice[1].onion_sausage_bacon}</p>
                    <p>Delivery: - KSh. ${customerOrder.edwinPizza.deliveryPrice}</p>
                    <hr>
                    <p>Total: - KSh. ${totalPrice}
                    `;
                $(".formOutput").html(orderSummary);
                alert("your pizza will be delivered at " + deliveryLocation)
            }
            //Gluten Green Pepper Pepperoni
            if (pizzaSize == "small" && crust == "glutten_free" && toppings == "greenpepper_pepperoni" && deliveryOption == "on"){
                let totalPrice = (customerOrder.edwinPizza.pizzaSizePrice[1].small + 
                    customerOrder.edwinPizza.pizzaCrustPrice[3].glutten_free + 
                    customerOrder.edwinPizza.toppingPrice[2].greenpepper_pepperoni + 
                    customerOrder.edwinPizza.deliveryPrice) * pizzaNumberTotal;
               
                let orderSummary = `
                    <h2>Order Summary</h2>
                    <p>Type of Pizza: ${typeOfPizza}</p>
                    <p>Delivery location: ${deliveryLocation}</p>
                    <p>Number of orders: ${pizzaNumberTotal}</p>
                    <p>Pizza size: Small - KSh. ${customerOrder.edwinPizza.pizzaSizePrice[1].small} </p>
                    <p>Crust: Glutten free - KSh. ${customerOrder.edwinPizza.pizzaCrustPrice[3].glutten_free} </p>
                    <p>Toppings: Green Pepper Pepperoni - KSh. ${customerOrder.edwinPizza.toppingPrice[2].greenpepper_pepperoni}</p>
                    <p>Delivery: - KSh. ${customerOrder.edwinPizza.deliveryPrice}</p>
                    <hr>
                    <p>Total: - KSh. ${totalPrice}
                    `;
                $(".formOutput").html(orderSummary);
                alert("your pizza will be delivered at " + deliveryLocation)
            }
            //Gluten Pineaple Mushroom
            if (pizzaSize == "small" && crust == "glutten_free" && toppings == "pineaple_mushrooms" && deliveryOption == "on"){
                let totalPrice = (customerOrder.edwinPizza.pizzaSizePrice[1].small + 
                    customerOrder.edwinPizza.pizzaCrustPrice[3].glutten_free + 
                    customerOrder.edwinPizza.toppingPrice[3].pineaple_mushrooms + 
                    customerOrder.edwinPizza.deliveryPrice) * pizzaNumberTotal;
                
                let orderSummary = `
                    <h2>Order Summary</h2>
                    <p>Type of Pizza: ${typeOfPizza}</p>
                    <p>Delivery location: ${deliveryLocation}</p>
                    <p>Number of orders: ${pizzaNumberTotal}</p>
                    <p>Pizza size: Small - KSh. ${customerOrder.edwinPizza.pizzaSizePrice[1].small} </p>
                    <p>Crust: Glutten free - KSh. ${customerOrder.edwinPizza.pizzaCrustPrice[3].glutten_free} </p>
                    <p>Toppings: Pineaple_mushrooms - KSh. ${customerOrder.edwinPizza.toppingPrice[3].pineaple_mushrooms}</p>
                    <p>Delivery: - KSh. ${customerOrder.edwinPizza.deliveryPrice}</p>
                    <hr>
                    <p>Total: - KSh. ${totalPrice}
                    `;
                $(".formOutput").html(orderSummary);
                alert("your pizza will be delivered at " + deliveryLocation)
            }
            //PRICE FOR MEDIUM
            //Crispy onion_sausage_bacon
            if (pizzaSize == "medium" && crust == "crispy" && toppings == "onion_sausage_bacon" && deliveryOption == "on"){
                let totalPrice = (customerOrder.edwinPizza.pizzaSizePrice[2].medium + 
                    customerOrder.edwinPizza.pizzaCrustPrice[1].crispy + 
                    customerOrder.edwinPizza.toppingPrice[1].onion_sausage_bacon + 
                    customerOrder.edwinPizza.deliveryPrice) * pizzaNumberTotal;
                
                let orderSummary = `
                    <h2>Order Summary</h2>
                    <p>Type of Pizza: ${typeOfPizza}</p>
                    <p>Delivery location: ${deliveryLocation}</p>
                    <p>Number of orders: ${pizzaNumberTotal}</p>
                    <p>Pizza size: Medium - KSh. ${customerOrder.edwinPizza.pizzaSizePrice[2].medium} </p>
                    <p>Crust: Crispy - KSh. ${ customerOrder.edwinPizza.pizzaCrustPrice[1].crispy } </p>
                    <p>Toppings: Onion, Sausage and Bacon - KSh. ${  customerOrder.edwinPizza.toppingPrice[1].onion_sausage_bacon}</p>
                    <p>Delivery: - KSh. ${customerOrder.edwinPizza.deliveryPrice}</p>
                    <hr>
                    <p>Total: - KSh. ${totalPrice}
                    `;
                $(".formOutput").html(orderSummary);
                alert("your pizza will be delivered at " + deliveryLocation)
            }
            //Crispy green pepper pepperoni
            if (pizzaSize == "medium" && crust == "crispy" && toppings == "greenpepper_pepperoni" && deliveryOption == "on"){
                let totalPrice = (customerOrder.edwinPizza.pizzaSizePrice[2].medium + 
                    customerOrder.edwinPizza.pizzaCrustPrice[1].crispy + 
                    customerOrder.edwinPizza.toppingPrice[2].greenpepper_pepperoni + 
                    customerOrder.edwinPizza.deliveryPrice) * pizzaNumberTotal;
                
                let orderSummary = `
                    <h2>Order Summary</h2>
                    <p>Type of Pizza: ${typeOfPizza}</p>
                    <p>Delivery location: ${deliveryLocation}</p>
                    <p>Number of orders: ${pizzaNumberTotal}</p>
                    <p>Pizza size: Medium - KSh. ${customerOrder.edwinPizza.pizzaSizePrice[2].medium} </p>
                    <p>Crust: Crispy - KSh. ${ customerOrder.edwinPizza.pizzaCrustPrice[1].crispy } </p>
                    <p>Toppings: Green Pepper Pepperoni - KSh. ${customerOrder.edwinPizza.toppingPrice[2].greenpepper_pepperoni}</p>
                    <p>Delivery: - KSh. ${customerOrder.edwinPizza.deliveryPrice}</p>
                    <hr>
                    <p>Total: - KSh. ${totalPrice}
                    `;
                $(".formOutput").html(orderSummary);
                alert("your pizza will be delivered at " + deliveryLocation)
            }
            //Crispy pineaple_mushroom
            if (pizzaSize == "medium" && crust == "crispy" && toppings == "pineaple_mushrooms" && deliveryOption == "on"){
                let totalPrice = (customerOrder.edwinPizza.pizzaSizePrice[2].medium + 
                    customerOrder.edwinPizza.pizzaCrustPrice[1].crispy + 
                    customerOrder.edwinPizza.toppingPrice[3].pineaple_mushrooms + 
                    customerOrder.edwinPizza.deliveryPrice) * pizzaNumberTotal;
                
                let orderSummary = `
                    <h2>Order Summary</h2>
                    <p>Type of Pizza: ${typeOfPizza}</p>
                    <p>Delivery location: ${deliveryLocation}</p>
                    <p>Number of orders: ${pizzaNumberTotal}</p>
                    <p>Pizza size: Medium - KSh. ${customerOrder.edwinPizza.pizzaSizePrice[2].medium} </p>
                    <p>Crust: Crispy - KSh. ${ customerOrder.edwinPizza.pizzaCrustPrice[1].crispy } </p>
                    <p>Toppings: Pineaple Mushrooms - KSh. ${customerOrder.edwinPizza.toppingPrice[3].mixed_sliced_mushrooms_and_garlic}</p>
                    <p>Delivery: - KSh. ${customerOrder.edwinPizza.deliveryPrice}</p>
                    <hr>
                    <p>Total: - KSh. ${totalPrice}
                    `;
                $(".formOutput").html(orderSummary);
                alert("your pizza will be delivered at " + deliveryLocation)
            }
            //Stuffed onion_sausage_bacon
            if (pizzaSize == "medium" && crust == "stuffed" && toppings == "onion_sausage_bacon" && deliveryOption == "on"){
                var totalPrice = (customerOrder.edwinPizza.pizzaSizePrice[2].medium + 
                    customerOrder.edwinPizza.pizzaCrustPrice[2].stuffed + 
                    customerOrder.edwinPizza.toppingPrice[1].onion_sausage_bacon + 
                    customerOrder.edwinPizza.deliveryPrice) * pizzaNumberTotal;
                
                    
                var orderSummary = `
                    <h2>Order Summary</h2>
                    <p>Type of Pizza: ${typeOfPizza}</p>
                    <p>Delivery location: ${deliveryLocation}</p>
                    <p>Number of orders: ${pizzaNumberTotal}</p>
                    <p>Pizza size: Medium - KSh. ${customerOrder.edwinPizza.pizzaSizePrice[2].medium} </p>
                    <p>Crust: Stuffed - KSh. ${ customerOrder.edwinPizza.pizzaCrustPrice[2].stuffed } </p>
                    <p>Toppings: Onion, sausage and bacon - KSh. ${customerOrder.edwinPizza.toppingPrice[1].onion_sausage_bacon}</p>
                    <p>Delivery: - KSh. ${customerOrder.edwinPizza.deliveryPrice}</p>
                    <hr>
                    <p>Total: - KSh. ${totalPrice}
                    `;
                $(".formOutput").html(orderSummary);
                alert("your pizza will be delivered at " + deliveryLocation)
            }
            //Stuffed Green Pepper
            if (pizzaSize == "medium" && crust == "stuffed" && toppings == "greenpepper_pepperoni" && deliveryOption == "on"){
                let totalPrice = (customerOrder.edwinPizza.pizzaSizePrice[2].medium + 
                    customerOrder.edwinPizza.pizzaCrustPrice[2].stuffed + 
                    customerOrder.edwinPizza.toppingPrice[2].greenpepper_pepperoni + 
                    customerOrder.edwinPizza.deliveryPrice) * pizzaNumberTotal;
               
                let orderSummary = `
                    <h2>Order Summary</h2>
                    <p>Type of Pizza: ${typeOfPizza}</p>
                    <p>Delivery location: ${deliveryLocation}</p>
                    <p>Number of orders: ${pizzaNumberTotal}</p>
                    <p>Pizza size: Medium - KSh. ${customerOrder.edwinPizza.pizzaSizePrice[2].medium} </p>
                    <p>Crust: Stuffed - KSh. ${ customerOrder.edwinPizza.pizzaCrustPrice[2].stuffed } </p>
                    <p>Toppings: GreenPepper and Pepperoni - KSh. ${customerOrder.edwinPizza.toppingPrice[2].greenpepper_pepperoni}</p>
                    <p>Delivery: - KSh. ${customerOrder.edwinPizza.deliveryPrice}</p>
                    <hr>
                    <p>Total: - KSh. ${totalPrice}
                    `;
                $(".formOutput").html(orderSummary);
                alert("your pizza will be delivered at " + deliveryLocation)
            }
            //Stuffed Pineaple Mushrooms
            if (pizzaSize == "medium" && crust == "stuffed" && toppings == "pineaple_mushrooms" && deliveryOption == "on"){
                var totalPrice = (customerOrder.edwinPizza.pizzaSizePrice[2].medium + 
                    customerOrder.edwinPizza.pizzaCrustPrice[2].stuffed + 
                    customerOrder.edwinPizza.toppingPrice[3].pineaple_mushrooms + 
                    customerOrder.edwinPizza.deliveryPrice) * pizzaNumberTotal;
            
                let orderSummary = `
                    <h2>Order Summary</h2>
                    <p>Type of Pizza: ${typeOfPizza}</p>
                    <p>Delivery location: ${deliveryLocation}</p>
                    <p>Number of orders: ${pizzaNumberTotal}</p>
                    <p>Pizza size: Medium - KSh. ${customerOrder.edwinPizza.pizzaSizePrice[2].medium} </p>
                    <p>Crust: Stuffed - KSh. ${ customerOrder.edwinPizza.pizzaCrustPrice[2].stuffed } </p>
                    <p>Toppings: Mixed sliced mushrooms and garlic - KSh. ${ customerOrder.edwinPizza.toppingPrice[3].pineaple_mushrooms}</p>
                    <p>Delivery: - KSh. ${customerOrder.edwinPizza.deliveryPrice}</p>
                    <hr>
                    <p>Total: - KSh. ${totalPrice}
                    `;
                $(".formOutput").html(orderSummary);
                alert("your pizza will be delivered at " + deliveryLocation)
            }
            //Gluten onion_sausage_bacon
            if (pizzaSize == "medium" && crust == "glutten_free" && toppings == "onion_sausage_bacon" && deliveryOption == "on"){
                var totalPrice = (customerOrder.edwinPizza.pizzaSizePrice[2].medium + 
                    customerOrder.edwinPizza.pizzaCrustPrice[3].glutten_free + 
                    customerOrder.edwinPizza.toppingPrice[1].onion_sausage_bacon + 
                    customerOrder.edwinPizza.deliveryPrice) * pizzaNumberTotal;
                
                let orderSummary = `
                    <h2>Order Summary</h2>
                    <p>Type of Pizza: ${typeOfPizza}</p>
                    <p>Delivery location: ${deliveryLocation}</p>
                    <p>Number of orders: ${pizzaNumberTotal}</p>
                    <p>Pizza size: Medium - KSh. ${customerOrder.edwinPizza.pizzaSizePrice[2].medium} </p>
                    <p>Crust: Glutten free - KSh. ${ customerOrder.edwinPizza.pizzaCrustPrice[3].glutten_free} </p>
                    <p>Toppings: Potato, Sausage and Bacon - KSh. ${customerOrder.edwinPizza.toppingPrice[1].onion_sausage_bacon}</p>
                    <p>Delivery: - KSh. ${customerOrder.edwinPizza.deliveryPrice}</p>
                    <hr>
                    <p>Total: - KSh. ${totalPrice}
                    `;
                $(".formOutput").html(orderSummary);
                alert("your pizza will be delivered at " + deliveryLocation)
            }
            //Gluten Green Pepper
            if (pizzaSize == "medium" && crust == "glutten_free" && toppings == "greenpepper_pepperoni" && deliveryOption == "on"){
                var totalPrice = (customerOrder.edwinPizza.pizzaSizePrice[2].medium + 
                    customerOrder.edwinPizza.pizzaCrustPrice[3].glutten_free + 
                    customerOrder.edwinPizza.toppingPrice[2].greenpepper_pepperoni + 
                    customerOrder.edwinPizza.deliveryPrice) * pizzaNumberTotal;
                
                let orderSummary = `
                    <h2>Order Summary</h2>
                    <p>Type of Pizza: ${typeOfPizza}</p>
                    <p>Delivery location: ${deliveryLocation}</p>
                    <p>Number of orders: ${pizzaNumberTotal}</p>
                    <p>Pizza size: Medium - KSh. ${customerOrder.edwinPizza.pizzaSizePrice[2].medium} </p>
                    <p>Crust: Glutten free - KSh. ${ customerOrder.edwinPizza.pizzaCrustPrice[3].glutten_free} </p>
                    <p>Toppings: Green Pepper and Pepperoni - KSh. ${customerOrder.edwinPizza.toppingPrice[2].greenpepper_pepperoni}</p>
                    <p>Delivery: - KSh. ${customerOrder.edwinPizza.deliveryPrice}</p>
                    <hr>
                    <p>Total: - KSh. ${totalPrice}
                    `;
                $(".formOutput").html(orderSummary);
                alert("your pizza will be delivered at " + deliveryLocation)
            }
            //Glutten Pineaple Mushroom
            if (pizzaSize == "medium" && crust == "glutten_free" && toppings == "pineaple_mushrooms" && deliveryOption == "on"){
                let totalPrice = (customerOrder.edwinPizza.pizzaSizePrice[2].medium + 
                    customerOrder.edwinPizza.pizzaCrustPrice[3].glutten_free + 
                    customerOrder.edwinPizza.toppingPrice[3].pineaple_mushrooms + 
                    customerOrder.edwinPizza.deliveryPrice) * pizzaNumberTotal;
                
                let orderSummary = `
                    <h2>Order Summary</h2>
                    <p>Type of Pizza: ${typeOfPizza}</p>
                    <p>Delivery location: ${deliveryLocation}</p>
                    <p>Number of orders: ${pizzaNumberTotal}</p>
                    <p>Pizza size: Medium - KSh. ${customerOrder.edwinPizza.pizzaSizePrice[2].medium} </p>
                    <p>Crust: Glutten free - KSh. ${ customerOrder.edwinPizza.pizzaCrustPrice[3].glutten_free} </p>
                    <p>Toppings: Pineaple and Mushrooms - KSh. ${customerOrder.edwinPizza.toppingPrice[3].pineaple_mushrooms}</p>
                    <p>Delivery: - KSh. ${customerOrder.edwinPizza.deliveryPrice}</p>
                    <hr>
                    <p>Total: - KSh. ${totalPrice}
                    `;
                $(".formOutput").html(orderSummary);
                alert("your pizza will be delivered at " + deliveryLocation)
            }

            //PRICE FOR LARGE Pizza

            //Crispy onion_sausage_bacon
            if (pizzaSize == "large" && crust == "crispy" && toppings == "onion_sausage_bacon" && deliveryOption == "on"){
                var totalPrice = (customerOrder.edwinPizza.pizzaSizePrice[3].large + 
                    customerOrder.edwinPizza.pizzaCrustPrice[1].crispy + 
                    customerOrder.edwinPizza.toppingPrice[1].onion_sausage_bacon + 
                    customerOrder.edwinPizza.deliveryPrice) * pizzaNumberTotal;
                
                let orderSummary = `
                    <h2>Order Summary</h2>
                    <p>Type of Pizza: ${typeOfPizza}</p>
                    <p>Delivery location: ${deliveryLocation}</p>
                    <p>Number of orders: ${pizzaNumberTotal}</p>
                    <p>Pizza size: Large - KSh. ${customerOrder.edwinPizza.pizzaSizePrice[3].large} </p>
                    <p>Crust: Crispy - KSh. ${customerOrder.edwinPizza.pizzaCrustPrice[1].crispy} </p>
                    <p>Toppings: Onion, Sausage and Bacon - KSh. ${customerOrder.edwinPizza.toppingPrice[1].onion_sausage_bacon}</p>
                    <p>Delivery: - KSh. ${customerOrder.edwinPizza.deliveryPrice}</p>
                    <hr>
                    <p>Total: - KSh. ${totalPrice}
                    `;
                $(".formOutput").html(orderSummary);
                alert("your pizza will be delivered at " + deliveryLocation)
            }
            //Crispy Green Pepper_mushrooms
            if (pizzaSize == "large" && crust == "crispy" && toppings == "greenpepper_pepperoni" && deliveryOption == "on"){
                var totalPrice = (customerOrder.edwinPizza.pizzaSizePrice[3].large + 
                    customerOrder.edwinPizza.pizzaCrustPrice[1].crispy + 
                    customerOrder.edwinPizza.toppingPrice[2].greenpepper_pepperoni + 
                    customerOrder.edwinPizza.deliveryPrice) * pizzaNumberTotal;
            
                let orderSummary = `
                    <h2>Order Summary</h2>
                    <p>Type of Pizza: ${typeOfPizza}</p>
                    <p>Delivery location: ${deliveryLocation}</p>
                    <p>Number of orders: ${pizzaNumberTotal}</p>
                    <p>Pizza size: Large - KSh. ${customerOrder.edwinPizza.pizzaSizePrice[3].large} </p>
                    <p>Crust: Crispy - KSh. ${customerOrder.edwinPizza.pizzaCrustPrice[1].crispy} </p>
                    <p>Toppings: Green Pepper and Pepperoni - KSh. ${customerOrder.edwinPizza.toppingPrice[2].greenpepper_pepperoni}</p>
                    <p>Delivery: - KSh. ${customerOrder.edwinPizza.deliveryPrice}</p>
                    <hr>
                    <p>Total: - KSh. ${totalPrice}
                    `;
                $(".formOutput").html(orderSummary);
                alert("your pizza will be delivered at " + deliveryLocation)
            }
            //Crispy Pineaple_mushrooms
            if (pizzaSize == "large" && crust == "crispy" && toppings == "pineaple_mushrooms" && deliveryOption == "on"){
                let totalPrice = (customerOrder.edwinPizza.pizzaSizePrice[3].large + 
                    customerOrder.edwinPizza.pizzaCrustPrice[1].crispy + 
                    customerOrder.edwinPizza.toppingPrice[3].pineaple_mushrooms + 
                    customerOrder.edwinPizza.deliveryPrice) * pizzaNumberTotal;
                
                let orderSummary = `
                    <h2>Order Summary</h2>
                    <p>Type of Pizza: ${typeOfPizza}</p>
                    <p>Delivery location: ${deliveryLocation}</p>
                    <p>Number of orders: ${pizzaNumberTotal}</p>
                    <p>Pizza size: Large - KSh. ${customerOrder.edwinPizza.pizzaSizePrice[3].large} </p>
                    <p>Crust: Crispy - KSh. ${customerOrder.edwinPizza.pizzaCrustPrice[1].crispy} </p>
                    <p>Toppings: Pineaple and Mushrooms - KSh. ${customerOrder.edwinPizza.toppingPrice[3].pineaple_mushrooms}</p>
                    <p>Delivery: - KSh. ${customerOrder.edwinPizza.deliveryPrice}</p>
                    <hr>
                    <p>Total: - KSh. ${totalPrice}
                    `;
                $(".formOutput").html(orderSummary);
                alert("your pizza will be delivered at " + deliveryLocation)
            }
            //Stuffed onion_sausage_bacon
            if (pizzaSize == "large" && crust == "stuffed" && toppings == "onion_sausage_bacon" && deliveryOption == "on"){
                let totalPrice = (customerOrder.edwinPizza.pizzaSizePrice[3].large + 
                    customerOrder.edwinPizza.pizzaCrustPrice[2].stuffed + 
                    customerOrder.edwinPizza.toppingPrice[1].onion_sausage_bacon + 
                    customerOrder.edwinPizza.deliveryPrice) * pizzaNumberTotal;
                
                let orderSummary = `
                    <h2>Order Summary</h2>
                    <p>Type of Pizza: ${typeOfPizza}</p>
                    <p>Delivery location: ${deliveryLocation}</p>
                    <p>Number of orders: ${pizzaNumberTotal}</p>
                    <p>Pizza size: Large - KSh. ${customerOrder.edwinPizza.pizzaSizePrice[3].large} </p>
                    <p>Crust: Stuffed - KSh. ${customerOrder.edwinPizza.pizzaCrustPrice[2].stuffed} </p>
                    <p>Toppings: Onion, Sausage and Bacon - KSh. ${customerOrder.edwinPizza.toppingPrice[1].onion_sausage_bacon}</p>
                    <p>Delivery: - KSh. ${customerOrder.edwinPizza.deliveryPrice}</p>
                    <hr>
                    <p>Total: - KSh. ${totalPrice}
                    `;
                $(".formOutput").html(orderSummary);
                alert("your pizza will be delivered at " + deliveryLocation)
            }
            //Stuffed Green Pepper_Pepperoni
            if (pizzaSize == "large" && crust == "stuffed" && toppings == "greenpepper_pepperoni" && deliveryOption == "on"){
                var totalPrice = (customerOrder.edwinPizza.pizzaSizePrice[3].large + 
                    customerOrder.edwinPizza.pizzaCrustPrice[2].stuffed + 
                    customerOrder.edwinPizza.toppingPrice[2].greenpepper_pepperoni + 
                    customerOrder.edwinPizza.deliveryPrice) * pizzaNumberTotal;
            
                let orderSummary = `
                    <h2>Order Summary</h2>
                    <p>Type of Pizza: ${typeOfPizza}</p>
                    <p>Delivery location: ${deliveryLocation}</p>
                    <p>Number of orders: ${pizzaNumberTotal}</p>
                    <p>Pizza size: Large - KSh. ${customerOrder.edwinPizza.pizzaSizePrice[3].large} </p>
                    <p>Crust: Stuffed - KSh. ${customerOrder.edwinPizza.pizzaCrustPrice[2].stuffed} </p>
                    <p>Toppings: Greenpepper and Pepperoni - KSh. ${customerOrder.edwinPizza.toppingPrice[2].greenpepper_pepperoni}</p>
                    <p>Delivery: - KSh. ${customerOrder.edwinPizza.deliveryPrice}</p>
                    <hr>
                    <p>Total: - KSh. ${totalPrice}
                    `;
                $(".formOutput").html(orderSummary);
                alert("your pizza will be delivered at " + deliveryLocation)
            }
            //Stuffed Pineaple_mushrooms
            if (pizzaSize == "large" && crust == "stuffed" && toppings == "pineaple_mushrooms" && deliveryOption == "on"){
                var totalPrice = (customerOrder.edwinPizza.pizzaSizePrice[3].large + 
                    customerOrder.edwinPizza.pizzaCrustPrice[2].stuffed + 
                    customerOrder.edwinPizza.toppingPrice[3].pineaple_mushrooms + 
                    customerOrder.edwinPizza.deliveryPrice) * pizzaNumberTotal;
                
        
            let orderSummary = `
                <h2>Order Summary</h2>
                <p>Type of Pizza: ${typeOfPizza}</p>
                <p>Delivery location: ${deliveryLocation}</p>
                <p>Number of orders: ${pizzaNumberTotal}</p>
                <p>Pizza size: Large - KSh. ${customerOrder.edwinPizza.pizzaSizePrice[3].large} </p>
                <p>Crust: Stuffed - KSh. ${customerOrder.edwinPizza.pizzaCrustPrice[2].stuffed} </p>
                <p>Toppings: Pineaple and Mushrooms - KSh. ${customerOrder.edwinPizza.toppingPrice[3].pineaple_mushrooms}</p>
                <p>Delivery: - KSh. ${customerOrder.edwinPizza.deliveryPrice}</p>
                <hr>
                <p>Total: - KSh. ${totalPrice}
                `;
            $(".formOutput").html(orderSummary);
            alert("your pizza will be delivered at " + deliveryLocation)
            }
            //Glutten onion_sausage_bacon
            if (pizzaSize == "large" && crust == "glutten_free" && toppings == "onion_sausage_bacon" && deliveryOption == "on"){
                var totalPrice = (customerOrder.edwinPizza.pizzaSizePrice[3].large + 
                    customerOrder.edwinPizza.pizzaCrustPrice[3].glutten_free + 
                    customerOrder.edwinPizza.toppingPrice[1].onion_sausage_bacon + 
                    customerOrder.edwinPizza.deliveryPrice) * pizzaNumberTotal;
                
                let orderSummary = `
                    <h2>Order Summary</h2>
                    <p>Type of Pizza: ${typeOfPizza}</p>
                    <p>Delivery location: ${deliveryLocation}</p>
                    <p>Number of orders: ${pizzaNumberTotal}</p>
                    <p>Pizza size: Large - KSh. ${customerOrder.edwinPizza.pizzaSizePrice[3].large} </p>
                    <p>Crust: Glutten free - KSh. ${ customerOrder.edwinPizza.pizzaCrustPrice[3].glutten_free} </p>
                    <p>Toppings: Onion, Sausage and Bacon - KSh. ${customerOrder.edwinPizza.toppingPrice[1].onion_sausage_bacon}</p>
                    <p>Delivery: - KSh. ${customerOrder.edwinPizza.deliveryPrice}</p>
                    <hr>
                    <p>Total: - KSh. ${totalPrice}
                    `;
                $(".formOutput").html(orderSummary);
                alert("your pizza will be delivered at " + deliveryLocation)
            }
            //Glutten Green Pepper
            if (pizzaSize == "large" && crust == "glutten_free" && toppings == "greenpepper_pepperoni" && deliveryOption == "on"){
                var totalPrice = (customerOrder.edwinPizza.pizzaSizePrice[3].large + 
                    customerOrder.edwinPizza.pizzaCrustPrice[3].glutten_free + 
                    customerOrder.edwinPizza.toppingPrice[2].greenpepper_pepperoni + 
                    customerOrder.edwinPizza.deliveryPrice) * pizzaNumberTotal;
                
                let orderSummary = `
                    <h2>Order Summary</h2>
                    <p>Type of Pizza: ${typeOfPizza}</p>
                    <p>Delivery location: ${deliveryLocation}</p>
                    <p>Number of orders: ${pizzaNumberTotal}</p>
                    <p>Pizza size: Large - KSh. ${customerOrder.edwinPizza.pizzaSizePrice[3].large} </p>
                    <p>Crust: Glutten free - KSh. ${ customerOrder.edwinPizza.pizzaCrustPrice[3].glutten_free} </p>
                    <p>Toppings: Green Pepper and Pepperoni - KSh. ${customerOrder.edwinPizza.toppingPrice[2].greenpepper_pepperoni}</p>
                    <p>Delivery: - KSh. ${customerOrder.edwinPizza.deliveryPrice}</p>
                    <hr>
                    <p>Total: - KSh. ${totalPrice}
                    `;
                $(".formOutput").html(orderSummary);
                alert("your pizza will be delivered at " + deliveryLocation)
            }
            //Glutten Pineapple_mushhrooms
            if (pizzaSize == "large" && crust == "glutten_free" && toppings == "pineaple_mushrooms" && deliveryOption == "on"){
                var totalPrice = (customerOrder.edwinPizza.pizzaSizePrice[3].large + 
                    customerOrder.edwinPizza.pizzaCrustPrice[3].glutten_free + 
                    customerOrder.edwinPizza.toppingPrice[3].pineaple_mushrooms + 
                    customerOrder.edwinPizza.deliveryPrice) * pizzaNumberTotal;
            
                let orderSummary = `
                <h2>Order Summary</h2>
                <p>Type of Pizza: ${typeOfPizza}</p>
                <p>Delivery location: ${deliveryLocation}</p>
                <p>Number of orders: ${pizzaNumberTotal}</p>
                <p>Pizza size: Large - KSh. ${customerOrder.edwinPizza.pizzaSizePrice[3].large} </p>
                <p>Crust: Glutten free - KSh. ${ customerOrder.edwinPizza.pizzaCrustPrice[3].glutten_free} </p>
                <p>Toppings: Pineaple and Mushrooms - KSh. ${customerOrder.edwinPizza.toppingPrice[2].greenpepper_pepperoni}</p>
                <p>Delivery: - KSh. ${customerOrder.edwinPizza.deliveryPrice}</p>
                <hr>
                <p>Total: - KSh. ${totalPrice}
                `;
                $(".formOutput").html(orderSummary);
                //alert(orderSummary)
                alert("your pizza will be delivered at " + deliveryLocation)
            }
        
    })
})