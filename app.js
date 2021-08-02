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

    })
})