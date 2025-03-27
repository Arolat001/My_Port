document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Cart Sidebar Toggle
    const cartIcon = document.getElementById('cart-icon');
    const cartSidebar = document.querySelector('.cart-sidebar');
    const closeCart = document.querySelector('.close-cart');
    const overlay = document.querySelector('.overlay');
    const startShopping = document.querySelector('.start-shopping');
    
    cartIcon.addEventListener('click', () => {
        cartSidebar.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    closeCart.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    overlay.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
        overlay.classList.remove('active');
        quickViewModal.classList.remove('active');
        checkoutModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    if (startShopping) {
        startShopping.addEventListener('click', () => {
            cartSidebar.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
            
            // Scroll to products section
            document.querySelector('#products').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
    
    // Active Navigation Link on Scroll
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavLink() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active');
            } else {
                document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavLink);
    
    // Product Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            
            productCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Category Links Filtering
    const categoryLinks = document.querySelectorAll('.category-link');
    
    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const filter = link.dataset.category;
            
            // Remove active class from all filter buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to corresponding filter button
            document.querySelector(`.filter-btn[data-filter="${filter}"]`).classList.add('active');
            
            // Scroll to products section
            document.querySelector('#products').scrollIntoView({
                behavior: 'smooth'
            });
            
            // Filter products
            productCards.forEach(card => {
                if (card.dataset.category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;
    
    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        testimonials[index].classList.add('active');
        dots[index].classList.add('active');
        currentIndex = index;
    }
    
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.dataset.index);
            showTestimonial(index);
        });
    });
    
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
        showTestimonial(currentIndex);
    });
    
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
        showTestimonial(currentIndex);
    });
    
    // Auto slide testimonials
    setInterval(() => {
        currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
        showTestimonial(currentIndex);
    }, 5000);
    
    // Back to Top Button
    const backToTopBtn = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Countdown Timer
    const countdownElements = document.querySelectorAll('.countdown');
    
    countdownElements.forEach(countdown => {
        const endDate = new Date(countdown.dataset.time).getTime();
        
        function updateCountdown() {
            const now = new Date().getTime();
            const distance = endDate - now;
            
            if (distance < 0) {
                countdown.innerHTML = '<p>This offer has expired!</p>';
                return;
            }
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            countdown.querySelector('.days').textContent = days.toString().padStart(2, '0');
            countdown.querySelector('.hours').textContent = hours.toString().padStart(2, '0');
            countdown.querySelector('.minutes').textContent = minutes.toString().padStart(2, '0');
            countdown.querySelector('.seconds').textContent = seconds.toString().padStart(2, '0');
        }
        
        updateCountdown();
        setInterval(updateCountdown, 1000);
    });
    
    // Product Quick View Modal
    const quickViewBtns = document.querySelectorAll('.quick-view');
    const quickViewModal = document.querySelector('.quick-view-modal');
    const closeModal = document.querySelector('.close-modal');
    const modalAddToCartBtn = document.querySelector('.modal-add-to-cart');
    const quantityInput = document.getElementById('quantity');
    const minusBtn = document.querySelector('.minus');
    const plusBtn = document.querySelector('.plus');
    
    // Product data (in a real app, this would come from a database)
    const products = [
        {
            id: 1,
            title: 'Wireless Headphones',
            price: 89.99,
            oldPrice: 129.99,
            category: 'Electronics',
            rating: 4.5,
            reviews: 45,
            description: 'High-quality wireless headphones with noise cancellation technology, providing crystal clear sound and comfort for extended use.',
            inStock: true
        },
        {
            id: 2,
            title: 'Men\'s Casual Shirt',
            price: 34.99,
            category: 'Clothing',
            rating: 4.0,
            reviews: 28,
            description: 'Comfortable and stylish casual shirt for men, perfect for everyday wear. Made from high-quality cotton material.',
            inStock: true
        },
        {
            id: 3,
            title: 'Coffee Maker',
            price: 49.99,
            oldPrice: 79.99,
            category: 'Home & Kitchen',
            rating: 5.0,
            reviews: 63,
            description: 'Programmable coffee maker with multiple brewing options. Makes up to 12 cups of coffee at once.',
            inStock: true
        },
        {
            id: 4,
            title: 'Skincare Set',
            price: 59.99,
            category: 'Beauty',
            rating: 4.0,
            reviews: 37,
            description: 'Complete skincare set including cleanser, toner, moisturizer, and serum. Made with natural ingredients suitable for all skin types.',
            inStock: true
        },
        {
            id: 5,
            title: 'Smart Watch',
            price: 129.99,
            category: 'Electronics',
            rating: 4.5,
            reviews: 52,
            description: 'Feature-rich smart watch with heart rate monitor, sleep tracking, and notification alerts. Compatible with iOS and Android.',
            inStock: true
        },
        {
            id: 6,
            title: 'Women\'s Dress',
            price: 45.99,
            oldPrice: 69.99,
            category: 'Clothing',
            rating: 4.0,
            reviews: 41,
            description: 'Elegant women\'s dress suitable for casual and semi-formal occasions. Available in multiple colors and sizes.',
            inStock: true
        },
        {
            id: 7,
            title: 'Blender',
            price: 39.99,
            category: 'Home & Kitchen',
            rating: 4.0,
            reviews: 33,
            description: 'Powerful blender with multiple speed settings, perfect for making smoothies, soups, and sauces.',
            inStock: true
        },
        {
            id: 8,
            title: 'Makeup Kit',
            price: 79.99,
            category: 'Beauty',
            rating: 4.5,
            reviews: 48,
            description: 'Comprehensive makeup kit including eyeshadows, lipsticks, blushes, and brushes. Perfect for beginners and professionals alike.',
            inStock: true
        }
    ];
    
    quickViewBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const productId = parseInt(btn.dataset.id);
            const product = products.find(p => p.id === productId);
            
            if (product) {
                // Populate modal with product details
                document.querySelector('.modal-product-title').textContent = product.title;
                document.querySelector('.current-price').textContent = `$${product.price.toFixed(2)}`;
                
                if (product.oldPrice) {
                    document.querySelector('.old-price').textContent = `$${product.oldPrice.toFixed(2)}`;
                    document.querySelector('.old-price').style.display = 'inline';
                } else {
                    document.querySelector('.old-price').style.display = 'none';
                }
                
                document.querySelector('.modal-product-description').textContent = product.description;
                document.querySelector('.modal-category').textContent = product.category;
                
                // Reset quantity
                quantityInput.value = 1;
                
                // Show modal
                quickViewModal.classList.add('active');
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    closeModal.addEventListener('click', () => {
        quickViewModal.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Quantity selector
    minusBtn.addEventListener('click', () => {
        let value = parseInt(quantityInput.value);
        if (value > 1) {
            quantityInput.value = value - 1;
        }
    });
    
    plusBtn.addEventListener('click', () => {
        let value = parseInt(quantityInput.value);
        if (value < 10) {
            quantityInput.value = value + 1;
        }
    });
    
    // Shopping Cart Functionality
    let cart = [];
    const cartItems = document.querySelector('.cart-items');
    const cartCount = document.querySelector('.cart-count');
    const totalPrice = document.querySelector('.total-price');
    const addToCartBtns = document.querySelectorAll('.add-to-cart');
    
    // Load cart from localStorage
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
        updateCart();
    }
    
    // Add to cart from product cards
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const productId = parseInt(btn.dataset.id);
            addToCart(productId, 1);
        });
    });
    
    // Add to cart from modal
    modalAddToCartBtn.addEventListener('click', () => {
        const productId = parseInt(document.querySelector('.modal-add-to-cart').dataset.id);
        const quantity = parseInt(quantityInput.value);
        
        addToCart(productId, quantity);
        
        // Close modal
        quickViewModal.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
        
        // Open cart sidebar
        cartSidebar.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    function addToCart(productId, quantity) {
        const product = products.find(p => p.id === productId);
        
        if (product) {
            // Check if product already in cart
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                cart.push({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    quantity: quantity
                });
            }
            
            updateCart();
            saveCart();
        }
    }
    
    function updateCart() {
        // Update cart count
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
        
        // Update cart items
        if (cart.length === 0) {
            cartItems.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-basket"></i>
                    <p>Your cart is empty</p>
                    <button class="btn btn-primary start-shopping">Start Shopping</button>
                </div>
            `;
            
            const startShopping = cartItems.querySelector('.start-shopping');
            if (startShopping) {
                startShopping.addEventListener('click', () => {
                    cartSidebar.classList.remove('active');
                    overlay.classList.remove('active');
                    document.body.style.overflow = 'auto';
                    
                    // Scroll to products section
                    document.querySelector('#products').scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            }
        } else {
            let cartHTML = '';
            
            cart.forEach(item => {
                cartHTML += `
                    <div class="cart-item" data-id="${item.id}">
                        <div class="cart-item-img">
                            <img src="/placeholder.svg?height=80&width=80" alt="${item.title}">
                        </div>
                        <div class="cart-item-details">
                            <h3 class="cart-item-title">${item.title}</h3>
                            <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                            <div class="cart-item-quantity">
                                <button class="quantity-btn minus-cart"><i class="fas fa-minus"></i></button>
                                <input type="number" value="${item.quantity}" min="1" max="10" readonly>
                                <button class="quantity-btn plus-cart"><i class="fas fa-plus"></i></button>
                                <button class="remove-item"><i class="fas fa-trash"></i></button>
                            </div>
                        </div>
                    </div>
                `;
            });
            
            cartItems.innerHTML = cartHTML;
            
            // Add event listeners to cart item buttons
            const minusCartBtns = cartItems.querySelectorAll('.minus-cart');
            const plusCartBtns = cartItems.querySelectorAll('.plus-cart');
            const removeItemBtns = cartItems.querySelectorAll('.remove-item');
            
            minusCartBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const cartItem = btn.closest('.cart-item');
                    const itemId = parseInt(cartItem.dataset.id);
                    updateItemQuantity(itemId, -1);
                });
            });
            
            plusCartBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const cartItem = btn.closest('.cart-item');
                    const itemId = parseInt(cartItem.dataset.id);
                    updateItemQuantity(itemId, 1);
                });
            });
            
            removeItemBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const cartItem = btn.closest('.cart-item');
                    const itemId = parseInt(cartItem.dataset.id);
                    removeFromCart(itemId);
                });
            });
        }
        
        // Update total price
        const total = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        totalPrice.textContent = `$${total.toFixed(2)}`;
    }
    
    function updateItemQuantity(itemId, change) {
        const item = cart.find(item => item.id === itemId);
        
        if (item) {
            item.quantity += change;
            
            if (item.quantity < 1) {
                removeFromCart(itemId);
            } else {
                updateCart();
                saveCart();
            }
        }
    }
    
    function removeFromCart(itemId) {
        cart = cart.filter(item => item.id !== itemId);
        updateCart();
        saveCart();
    }
    
    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    
    // Checkout Functionality
    const checkoutBtn = document.querySelector('.checkout-btn');
    const checkoutModal = document.querySelector('.checkout-modal');
    const closeCheckoutModal = document.querySelector('.close-checkout-modal');
    const checkoutSteps = document.querySelectorAll('.step');
    const checkoutStepContents = document.querySelectorAll('.checkout-step-content');
    const nextStepBtns = document.querySelectorAll('.next-step');
    const prevStepBtns = document.querySelectorAll('.prev-step');
    const backToShopBtn = document.querySelector('.back-to-shop');
    const continueShopping = document.querySelector('.continue-shopping');
    
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty. Add some products before checkout.');
            return;
        }
        
        // Populate checkout cart items
        const checkoutCartItems = document.querySelector('.checkout-cart-items');
        let checkoutCartHTML = '';
        
        cart.forEach(item => {
            checkoutCartHTML += `
                <div class="checkout-cart-item">
                    <div class="checkout-item-img">
                        <img src="/placeholder.svg?height=60&width=60" alt="${item.title}">
                    </div>
                    <div class="checkout-item-details">
                        <h3 class="checkout-item-title">${item.title}</h3>
                        <div class="checkout-item-price">$${item.price.toFixed(2)}</div>
                    </div>
                    <div class="checkout-item-quantity">Qty: ${item.quantity}</div>
                </div>
            `;
        });
        
        checkoutCartItems.innerHTML = checkoutCartHTML;
        
        // Calculate and update summary
        const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        const shipping = subtotal > 50 ? 0 : 10;
        const tax = subtotal * 0.1;
        const total = subtotal + shipping + tax;
        
        document.querySelector('.checkout-subtotal').textContent = `$${subtotal.toFixed(2)}`;
        document.querySelector('.checkout-shipping').textContent = shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`;
        document.querySelector('.checkout-tax').textContent = `$${tax.toFixed(2)}`;
        document.querySelector('.checkout-total').textContent = `$${total.toFixed(2)}`;
        
        // Reset to first step
        goToStep(1);
        
        // Show checkout modal
        cartSidebar.classList.remove('active');
        checkoutModal.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    closeCheckoutModal.addEventListener('click', () => {
        checkoutModal.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    nextStepBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const nextStep = parseInt(btn.dataset.next);
            
            // Simple form validation for each step
            if (nextStep === 3) {
                const shippingForm = document.getElementById('shippingForm');
                if (!shippingForm.checkValidity()) {
                    shippingForm.reportValidity();
                    return;
                }
            } else if (nextStep === 4) {
                const paymentForm = document.getElementById('paymentForm');
                if (!paymentForm.checkValidity()) {
                    paymentForm.reportValidity();
                    return;
                }
                
                // Set confirmation details
                const email = document.getElementById('email').value;
                document.getElementById('confirmationEmail').textContent = email;
                document.getElementById('orderDate').textContent = new Date().toLocaleDateString();
                document.getElementById('orderNumber').textContent = 'P-' + Math.floor(100000 + Math.random() * 900000);
                
                // Clear cart after successful order
                cart = [];
                updateCart();
                saveCart();
            }
            
            goToStep(nextStep);
        });
    });
    
    prevStepBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const prevStep = parseInt(btn.dataset.prev);
            goToStep(prevStep);
        });
    });
    
    backToShopBtn.addEventListener('click', () => {
        checkoutModal.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    continueShopping.addEventListener('click', () => {
        checkoutModal.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
        
        // Scroll to products section
        document.querySelector('#products').scrollIntoView({
            behavior: 'smooth'
        });
    });
    
    function goToStep(step) {
        // Update steps
        checkoutSteps.forEach(s => {
            if (parseInt(s.dataset.step) <= step) {
                s.classList.add('active');
            } else {
                s.classList.remove('active');
            }
        });
        
        // Show current step content
        checkoutStepContents.forEach(content => {
            if (parseInt(content.dataset.step) === step) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });
    }
    
    // Form Submissions
    const contactForm = document.getElementById('contactForm');
    const newsletterForm = document.querySelector('.newsletter-form');
    const footerNewsletterForm = document.getElementById('footerNewsletterForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simulate form submission
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simulate form submission
            alert('Thank you for subscribing to our newsletter!');
            
            // Reset form
            newsletterForm.reset();
        });
    }
    
    if (footerNewsletterForm) {
        footerNewsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simulate form submission
            alert('Thank you for subscribing to our newsletter!');
            
            // Reset form
            footerNewsletterForm.reset();
        });
    }
    
    // Load More Products (simulation)
    const loadMoreBtn = document.querySelector('.load-more button');
    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            // In a real app, this would load more products from the server
            alert('In a real application, this would load more products from the server.');
        });
    }
});