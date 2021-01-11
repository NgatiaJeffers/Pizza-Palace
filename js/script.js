// Add to Cart
(function() {
    const cartBtn = document.querySelectorAll("#add-cart");

    cartBtn.forEach(function(btn){
        btn.addEventListener("click", function(event) {
            // console.log(event.target);

            // const item = {};
            // let name = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;

            // console.log(name);
        })
    })

})();

// Post The Result
$(function() {

    $(".checkout").click(function () {
        let flavor = (".flavour option:selected").val();
        let size = (".pizza-size option:selected").val();
        let crust = (".favorite option:selected").val();
        let toppings = (".toppings option:selected").val();
        console.log(flavor);

        // Order
        let order = (f, s, c, t, total) => {
            return {f, s, c, t, total};
        }

        let price, totalPrice;
        switch(flavor) {
            case flavor = "Deluxe Pizza 🍕":
                switch (size) {
                    case size = "Sm.(6 slices) $10.99":
                        price = 10.99;
                        if(crust === "Crispy") {
                            totalPrice = (price + 2.99)
                        } else if (crust === "Stuffed") {
                            totalPrice = (price + 6.99)
                        } else if (crust === "Gluten-tree") {
                            totalPrice = (price + 7.99)
                        } else {
                            totalPrice = (price + 20.99)
                        }
                        break;
                        case size = "Md.(8 slices) $14.99":
                            price = 14.99;
                            if(crust === "Crispy") {
                                totalPrice = (price + 2.99)
                            } else if (crust === "Stuffed") {
                                totalPrice = (price + 6.99)
                            } else if (crust === "Gluten-tree") {
                                totalPrice = (price + 7.99)
                            } else {
                                totalPrice = (price + 20.99)
                            }
                        break;
                        case size = "Lg.(8 slices) $16.99":
                            price = 16.99;
                            if(crust === "Crispy") {
                                totalPrice = (price + 2.99)
                            } else if (crust === "Stuffed") {
                                totalPrice = (price + 6.99)
                            } else if (crust === "Gluten-tree") {
                                totalPrice = (price + 7.99)
                            } else {
                                totalPrice = (price + 20.99)
                            }
                        break;
                        case size = "Xg.(12 slices) $18.99":
                            price = 18.99;
                            if(crust === "Crispy") {
                                totalPrice = (price + 2.99)
                            } else if (crust === "Stuffed") {
                                totalPrice = (price + 6.99)
                            } else if (crust === "Gluten-tree") {
                                totalPrice = (price + 7.99)
                            } else {
                                totalPrice = (price + 20.99)
                            }
                        break;
                }

                case flavor = "Periper Chicken Pizza 🍕":
                    switch (size) {
                        case size = "Sm.(6 slices) $10.99":
                            price = 10.99;
                            if(crust === "Crispy") {
                                totalPrice = (price + 2.99)
                            } else if (crust === "Stuffed") {
                                totalPrice = (price + 6.99)
                            } else if (crust === "Gluten-tree") {
                                totalPrice = (price + 7.99)
                            } else {
                                totalPrice = (price + 20.99)
                            }
                            break;
                            case size = "Md.(8 slices) $14.99":
                                price = 14.99;
                                if(crust === "Crispy") {
                                    totalPrice = (price + 2.99)
                                } else if (crust === "Stuffed") {
                                    totalPrice = (price + 6.99)
                                } else if (crust === "Gluten-tree") {
                                    totalPrice = (price + 7.99)
                                } else {
                                    totalPrice = (price + 20.99)
                                }
                            break;
                            case size = "Lg.(8 slices) $16.99":
                                price = 16.99;
                                if(crust === "Crispy") {
                                    totalPrice = (price + 2.99)
                                } else if (crust === "Stuffed") {
                                    totalPrice = (price + 6.99)
                                } else if (crust === "Gluten-tree") {
                                    totalPrice = (price + 7.99)
                                } else {
                                    totalPrice = (price + 20.99)
                                }
                            break;
                            case size = "Xg.(12 slices) $18.99":
                                price = 18.99;
                                if(crust === "Crispy") {
                                    totalPrice = (price + 2.99)
                                } else if (crust === "Stuffed") {
                                    totalPrice = (price + 6.99)
                                } else if (crust === "Gluten-tree") {
                                    totalPrice = (price + 7.99)
                                } else {
                                    totalPrice = (price + 20.99)
                                }
                            break;
                    }
                    case flavor = "Pepperoni Pizza 🍕":
                        switch (size) {
                            case size = "Sm.(6 slices) $10.99":
                                price = 10.99;
                                if(crust=== "Crispy") {
                                    totalPrice = (price + 2.99)
                                } else if (crust === "Stuffed") {
                                    totalPrice = (price + 6.99)
                                } else if (crust === "Gluten-tree") {
                                    totalPrice = (price + 7.99)
                                } else {
                                    totalPrice = (price + 20.99)
                                }
                                break;
                                case size = "Md.(8 slices) $14.99":
                                    price = 14.99;
                                    if(crust === "Crispy") {
                                        totalPrice = (price + 2.99)
                                    } else if (crust === "Stuffed") {
                                        totalPrice = (price + 6.99)
                                    } else if (crust === "Gluten-tree") {
                                        totalPrice = (price + 7.99)
                                    } else {
                                        totalPrice = (price + 20.99)
                                    }
                                break;
                                case size = "Lg.(8 slices) $16.99":
                                    price = 16.99;
                                    if(crust === "Crispy") {
                                        totalPrice = (price + 2.99)
                                    } else if (crust === "Stuffed") {
                                        totalPrice = (price + 6.99)
                                    } else if (crust === "Gluten-tree") {
                                        totalPrice = (price + 7.99)
                                    } else {
                                        totalPrice = (price + 20.99)
                                    }
                                break;
                                case size = "Xg.(12 slices) $18.99":
                                    price = 18.99;
                                    if(crust === "Crispy") {
                                        totalPrice = (price + 2.99)
                                    } else if (crust === "Stuffed") {
                                        totalPrice = (price + 6.99)
                                    } else if (crust === "Gluten-tree") {
                                        totalPrice = (price + 7.99)
                                    } else {
                                        totalPrice = (price + 20.99)
                                    }
                                break;
                        }

                        case flavor = "crusty Pizza 🍕":
                            switch (size) {
                                case size = "Sm.(6 slices) $10.99":
                                    price = 10.99;
                                    if(crust === "Crispy") {
                                        totalPrice = (price + 2.99)
                                    } else if (crust === "Stuffed") {
                                        totalPrice = (price + 6.99)
                                    } else if (crust === "Gluten-tree") {
                                        totalPrice = (price + 7.99)
                                    } else {
                                        totalPrice = (price + 20.99)
                                    }
                                    break;
                                    case size = "Md.(8 slices) $14.99":
                                        price = 14.99;
                                        if(crust === "Crispy") {
                                            totalPrice = (price + 2.99)
                                        } else if (crust === "Stuffed") {
                                            totalPrice = (price + 6.99)
                                        } else if (crust === "Gluten-tree") {
                                            totalPrice = (price + 7.99)
                                        } else {
                                            totalPrice = (price + 20.99)
                                        }
                                    break;
                                    case size = "Lg.(8 slices) $16.99":
                                        price = 16.99;
                                        if(crust === "Crispy") {
                                            totalPrice = (price + 2.99)
                                        } else if (crust === "Stuffed") {
                                            totalPrice = (price + 6.99)
                                        } else if (crust === "Gluten-tree") {
                                            totalPrice = (price + 7.99)
                                        } else {
                                            totalPrice = (price + 20.99)
                                        }
                                    break;
                                    case size = "Xg.(12 slices) $18.99":
                                        price = 18.99;
                                        if(crust === "Crispy") {
                                            totalPrice = (price + 2.99)
                                        } else if (crust === "Stuffed") {
                                            totalPrice = (price + 6.99)
                                        } else if (crust === "Gluten-tree") {
                                            totalPrice = (price + 7.99)
                                        } else {
                                            totalPrice = (price + 20.99)
                                        }
                                    break;
                            }

                            case flavor = "All Meat Pizza 🍕":
                                switch (size) {
                                    case size = "Sm.(6 slices) $10.99":
                                        price = 10.99;
                                        if(crust === "Crispy") {
                                            totalPrice = (price + 2.99)
                                        } else if (crust === "Stuffed") {
                                            totalPrice = (price + 6.99)
                                        } else if (crust === "Gluten-tree") {
                                            totalPrice = (price + 7.99)
                                        } else {
                                            totalPrice = (price + 20.99)
                                        }
                                        break;
                                        case size = "Md.(8 slices) $14.99":
                                            price = 14.99;
                                            if(crust === "Crispy") {
                                                totalPrice = (price + 2.99)
                                            } else if (crust === "Stuffed") {
                                                totalPrice = (price + 6.99)
                                            } else if (crust === "Gluten-tree") {
                                                totalPrice = (price + 7.99)
                                            } else {
                                                totalPrice = (price + 20.99)
                                            }
                                        break;
                                        case size = "Lg.(8 slices) $16.99":
                                            price = 16.99;
                                            if(crust === "Crispy") {
                                                totalPrice = (price + 2.99)
                                            } else if (crust === "Stuffed") {
                                                totalPrice = (price + 6.99)
                                            } else if (crust === "Gluten-tree") {
                                                totalPrice = (price + 7.99)
                                            } else {
                                                totalPrice = (price + 20.99)
                                            }
                                        break;
                                        case size = "Xg.(12 slices) $18.99":
                                            price = 18.99;
                                            if(crust === "Crispy") {
                                                totalPrice = (price + 2.99)
                                            } else if (crust === "Stuffed") {
                                                totalPrice = (price + 6.99)
                                            } else if (crust === "Gluten-tree") {
                                                totalPrice = (price + 7.99)
                                            } else {
                                                totalPrice = (price + 20.99)
                                            }
                                        break;
                                }
            }
            switch (toppings) {
                case toppings = "Tomatoes 10$ each":
                    totalPrice = totalPrice + 10.00;
                    break;
                case toppings = "Onions 10$ cal.per each":
                    totalPrice = totalPrice + 10.00;
                    break;
                case toppings = "Olive Oil 13$ cal.per each":
                    totalPrice = totalPrice + 13.00;
                    break;
                case toppings = "Meat Balls 200$ cal.per eachf":
                    totalPrice = totalPrice + 200.00;
                    break;
                case toppings = "Pinapple 80$ cal.per each":
                    totalPrice = totalPrice + 80.00;
                    break;
                case toppings = "Mushroom 40$ cal.per each":
                    totalPrice = totalPrice + 40.00;
                    break;
                case toppings = "Bacon 56$ cal.per each":
                    totalPrice = totalPrice + 56.00;
                    break;
            }

            let newOrder = order(flavor, size, crust, toppings, totalPrice);
            

            $("#extract").click(function() {
                $('.table').text("");
                $('.table').append("<span class='pizza-name'><td>" + newOrder.f + "</td></span>")
                $('.table').append("<span class='pizza-price'><td>" + newOrder.total + "</td></span>")
                $('.table').append("<span class='pizza-size'><td>" + newOrder.s + "</td></span>")
                $('.table').append("<span class='pizza-crust'><td>" + newOrder.c + "</td></span>")
                $('.table').append("<span class='pizza-topping'><td>" + newOrder.t + "</td></span>")
                $('.table').append("<span class='total'><td>" + newOrder.total + "</td></span>")
            });

    });




});

