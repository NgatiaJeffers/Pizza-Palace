// Post The Result
$(document).ready(function() {
    $("#extract").click(function () {
        let flavor = $(".flavour option:selected").val();
        let size = $(".pizza-size option:selected").val();
        let crust = $(".favorite option:selected").val();
        let toppings = $(".toppings option:selected").val();
        // console.log(flavor);

        // Order
        let order = (f, s, c, t, total) => {
            return {f, s, c, t, total};
        }

        let price, totalPrice;
        switch(flavor) {
            case flavor = "Deluxe Pizza":
                switch (size) {
                    case size = "small":
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
                        case size = "Medium":
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
                        case size = "Large":
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
                        case size = "Extra Large":
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

                case flavor = "Periper Chicken Pizza":
                    switch (size) {
                        case size = "small":
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
                            case size = "Medium":
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
                            case size = "Large":
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
                            case size = "Extra Large":
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
                    case flavor = "Pepperoni Pizza":
                        switch (size) {
                            case size = "small":
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
                                case size = "Medium":
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
                                case size = "Large":
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
                                case size = "Extra Large":
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

                        case flavor = "crusty Pizza":
                            switch (size) {
                                case size = "small":
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
                                    case size = "Medium":
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
                                    case size = "Large":
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
                                    case size = "Extra Large":
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

                            case flavor = "All Meat Pizza":
                                switch (size) {
                                    case size = "small":
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
                                        case size = "Medium":
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
                                        case size = "Large":
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
                                        case size = "Extra Large":
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
                case toppings = "Tomatoes":
                    totalPrice = (totalPrice + 10.00);
                    break;
                case toppings = "Onions":
                    totalPrice = (totalPrice + 10.00);
                    break;
                case toppings = "Olive Oil":
                    totalPrice = (totalPrice + 13.00);
                    break;
                case toppings = "Meat Balls":
                    totalPrice = (totalPrice + 200.00);
                    break;
                case toppings = "Pinapple":
                    totalPrice = (totalPrice + 80.00);
                    break;
                case toppings = "Mushroom":
                    totalPrice = (totalPrice + 40.00);
                    break;
                case toppings = "Bacon":
                    totalPrice = (totalPrice + 56.00);
                    break;
            }

            let newOrder = order(flavor, size, crust, toppings, totalPrice);
            
            $("")
                $('.pz').append(newOrder.f)
                $('.td').append(newOrder.total + '$' )
                $('.ps').append(newOrder.s )
                $('.pc').append(newOrder.c )
                $('.pt').append(newOrder.t )
                $('.tt').append(newOrder.total + '$' )

                $('.total-cost').append(parseInt(newOrder.total * 5).toFixed(2));

    });




});

