// Add to Cart
window.onload = function() {
    const addToCart = document.querySelector('.cd-cart');

    // Adding data to localStorage
    const cartBtn = document.getELementsByClassName("add-cart");
    let items = [];
    for(let i=0; i < cartBtn.length; i++) {
        cartBtn[i].addEventListener("click", function(e) {
            if(typeof(storage) !== 'undefined'){
                let item = {
                    id:i+1,
                    name:e.target.parentElement.children[0].textContent,
                    price:e.target.parentElement.children[1].children[0].textContent,
                    no:1
                }
                if(JSON.parse(localStorage.getItem('items')) === null){
                    items.push(item);
                    localStorage.setItem("items", JSON.stringify(items));
                    window.location.reload();
                } else {
                    const localItems = JSON.parse(localStorage.getItem("items"));
                    localItems.map(data => {
                        if(item.id == data.id) {
                            item.no = data.no + 1;
                        } else {
                            items.push(data);
                        }
                    })
                    items.push(item);
                    localStorage.setItem('items', JSON.stringify(items));
                    window.location.reload();
                }
            } else {
                alert('Local storage is not working on your browser');
            }
        });
    }

    // Adding data to Shopping cart
    const cart = document.querySelector('.cd-cart span');
    let no = 0;
    JSON.parse(localStorage.getItem('items')).map(data => {
        no = no + data.no
    });
    cart.innerHTML = no;
}





// $(document).ready(function() {
//     var addToCart = $('.card'),
//     cart = $('.cd-cart');

//     initCustomize(addToCart);

//     $('body').on('click', function(event) {
//         if($(event.target).is('body') || $(event.target).is('.products')) {
//             deactivateCustomize();
//         }
//     });

//     function initCustomize(items) {
//         items.forEach(function(){
//             var actual = $(this),
//             selectOptions = actual.find('[data-type="select]'),
//             addToCartBtn = actual.find('.add-cart');

//             selectOptions.on('click', function(event) {
//                 var selected = $(this);

//                 if($(event.target).is('option')) {
//                     var activeItem = $(event.target),
//                     index = activeItem.index() + 1;

//                     activeItem.addClass('active').children().removeClass('active');
//                     selected.removeClass('selected-1 selected-2 selected-3 selected-4').addClass('selected-'+index);
//                 }
//             })
//         });

//         console.log(initCustomize());
//     }

//     function updateCart() {
//         (!cart.hasClass('items-added')) && cart.addClass('items-added');

//         var cartItems = cart.find('span'),
//         text = parseInt(cartItems.text()) + 1;
//         cartItems.text(text);
//     }
// })









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

    });




});

