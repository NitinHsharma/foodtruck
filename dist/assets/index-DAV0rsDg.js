(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),((e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports))((()=>{document.addEventListener(`DOMContentLoaded`,()=>{n()});var e={cart:[],selectedItemForModal:null,menuSearchQuery:``,menuActiveTab:`all`},t=[{id:`veg-vada-pav`,title:`Vada Pav Classic Slider`,category:`burgers`,price:80,image:`assets/images/vada_pav.jpg`,spice:2,veg:!0,badge:`Classic Street`,description:`The heartbeat of Mumbai street food. Deep-fried spiced potato dumpling (vada) placed inside a soft butter-toasted bun (pav) laced with dry garlic spice and fresh mint chutney.`,customizations:[{name:`Grated Amul Cheese`,price:25},{name:`Extra Pav Bun`,price:15},{name:`Salted Fried Green Chili`,price:0}]},{id:`egg-bhurji-burger`,title:`Mumbai Egg Bhurji Burger`,category:`burgers`,price:150,image:`assets/images/egg_burger.jpg`,spice:3,veg:!1,badge:`Spicy Egg`,description:`A street style masterpiece. Spicy scrambled eggs tossed with red onions, bell peppers, tomatoes, and chopped green chilies, stuffed in a butter-toasted burger bun.`,customizations:[{name:`Cheese Slice`,price:25},{name:`Extra Butter Scoop`,price:15}]},{id:`paneer-keema-pav`,title:`Paneer Keema Pav Bun`,category:`burgers`,price:180,image:`assets/images/keema_pav.jpg`,spice:2,veg:!0,badge:`Chef Special`,description:`Fresh minced cottage cheese slow-simmered in a rich tomato, onion, and spiced garlic tawa gravy, served piping hot with buttered soft buns.`,customizations:[{name:`Extra Pav Bun`,price:20},{name:`Grated Cheese Overlay`,price:30}]},{id:`veg-pav-bhaji-wrap`,title:`Pav Bhaji Paratha Wrap`,category:`wraps`,price:160,image:`assets/images/pav_bhaji.jpg`,spice:2,veg:!0,badge:`Signature`,description:`Spiced buttery mashed vegetable gravy (bhaji) wrapped in a warm, flaky, toasted paratha with chopped red onions and fresh mint coriander chutney.`,customizations:[{name:`Extra Butter Drizzle`,price:15},{name:`Cheese Roll Upgrade`,price:30}]},{id:`egg-baida-roti`,title:`Masala Egg Baida Roti`,category:`wraps`,price:170,image:`assets/images/pav_bhaji.jpg`,spice:2,veg:!1,badge:`Egg Classic`,description:`Crispy square envelop paratha stuffed with double whisked eggs, toasted tawa spices, green chilies, and fresh chopped cilantro. Pan-fried to perfection.`,customizations:[{name:`Grated Amul Cheese`,price:25},{name:`Tangy Frankie Masala`,price:0}]},{id:`egg-double-frankie`,title:`Double Egg Masala Frankie`,category:`wraps`,price:140,image:`assets/images/pav_bhaji.jpg`,spice:2,veg:!1,badge:`Street Roll`,description:`Soft tandoori paratha coated with double layers of whipped egg, sprinkled with chatpatta spices, green chili vinegar, and raw red onions.`,customizations:[{name:`Grated Cheese Roll`,price:25},{name:`Schezwan Chilli Spread`,price:15}]},{id:`paneer-chilli-sub`,title:`Paneer Chilli Toasted Sub`,category:`subs`,price:190,image:`assets/images/paneer_sub.jpg`,spice:2,veg:!0,badge:`Indo-Chinese`,description:`Spicy pan-seared paneer cubes tossed in garlic, soy sauce, green bell peppers, and chili glaze, packed inside a warm toasted sub baguette.`,customizations:[{name:`Double Paneer Fill`,price:40},{name:`Extra Spicy Schezwan`,price:15}]},{id:`spicy-egg-mayo-sub`,title:`Spicy Egg Mayo Toast Sub`,category:`subs`,price:160,image:`assets/images/paneer_sub.jpg`,spice:1,veg:!1,badge:`Toasted Sub`,description:`Creamy egg salad made with boiled eggs, cracked black pepper, fresh herbs, and spicy garlic mayonnaise, served toasted with fresh tomatoes and crispy lettuce.`,customizations:[{name:`Add Cheese Slice`,price:25},{name:`Pickled Jalapenos`,price:15}]},{id:`egg-fried-rice-bowl`,title:`Aromatic Egg Fried Rice Bowl`,category:`rice`,price:175,image:`assets/images/egg_rice.jpg`,spice:2,veg:!1,badge:`Rice Bowl`,description:`Fluffy scrambled eggs wok-tossed with aromatic long-grain Basmati rice, chopped spring onions, green beans, and a splash of ginger-soy dressing.`,customizations:[{name:`Double Egg Scramble`,price:30},{name:`Extra Soy Sauce Chilli`,price:5}]},{id:`veg-schezwan-rice-bowl`,title:`Spicy Veg Schezwan Rice Bowl`,category:`rice`,price:165,image:`assets/images/egg_rice.jpg`,spice:3,veg:!0,badge:`Spicy Rice`,description:`Hot wok-tossed rice flavored with spicy Schezwan chili oil, loaded with carrots, green beans, cabbage, bell peppers, and spring greens.`,customizations:[{name:`Add Paneer Cubes`,price:40},{name:`Less Chili Standard`,price:0}]},{id:`masala-fries`,title:`Bombay Masala Crispy Fries`,category:`drinks`,price:110,image:`assets/images/masala_fries.jpg`,spice:2,veg:!0,badge:`Crispy Side`,description:`Golden skin-on potato wedges tossed in our special chaat masala spice blend, served hot next to garlic dipping sauce.`,customizations:[{name:`Amul Cheese Melt`,price:30},{name:`Schezwan Chili Mayo`,price:15}]},{id:`masala-chai`,title:`Cutting Masala Chai`,category:`drinks`,price:70,image:`assets/images/masala_chai.jpg`,spice:0,veg:!0,badge:`Traditional`,description:`Strong, aromatic milk tea simmered with fresh ginger, cardamom pods, cinnamon, and pepper. Authentic taste.`,customizations:[{name:`No Sugar Standard`,price:0},{name:`Extra Ginger Kick`,price:5}]}];function n(){r(),i(),d(),o(),l(),c(),u(),v(),x()}function r(){let e=document.querySelector(`.header`),t=document.querySelectorAll(`section`),n=document.querySelectorAll(`.nav-link`);window.addEventListener(`scroll`,()=>{window.scrollY>50?e.classList.add(`scrolled`):e.classList.remove(`scrolled`);let r=``;t.forEach(e=>{let t=e.offsetTop-120;window.scrollY>=t&&(r=e.getAttribute(`id`))}),n.forEach(e=>{e.classList.remove(`active`),e.getAttribute(`href`)===`#${r}`&&e.classList.add(`active`)})})}function i(){let e=document.querySelector(`.mobile-menu-toggle`),t=document.querySelector(`.nav-menu`),n=document.querySelectorAll(`.nav-link`);e.addEventListener(`click`,()=>{e.classList.toggle(`active`),t.classList.toggle(`active`)}),n.forEach(n=>{n.addEventListener(`click`,()=>{e.classList.remove(`active`),t.classList.remove(`active`)})})}function a(e){return e.veg?`
            <div class="card-badge veg">
                <span class="card-badge-dot"></span>
                <span>Veg</span>
            </div>
        `:`
            <div class="card-badge egg">
                <span class="card-badge-dot"></span>
                <span>Egg</span>
            </div>
        `}function o(){let e=document.querySelector(`.featured-grid`);e&&(e.innerHTML=t.slice(0,3).map(e=>`
        <div class="featured-card" data-aos="fade-up">
            <div class="card-img-box">
                <img src="${e.image}" alt="${e.title}" loading="lazy">
                ${a(e)}
            </div>
            <div class="card-content">
                <div class="card-meta">
                    <span class="card-category">${e.category}</span>
                    <div class="card-spice">
                        ${s(e.spice)}
                    </div>
                </div>
                <h3 class="card-title">${e.title}</h3>
                <p class="card-desc">${e.description}</p>
                <div class="card-footer">
                    <span class="card-price">₹${e.price}</span>
                    <button class="btn-card-add" data-id="${e.id}" aria-label="Add to cart">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
                    </button>
                </div>
            </div>
        </div>
    `).join(``),e.querySelectorAll(`.btn-card-add`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation(),y(e.getAttribute(`data-id`))})}))}function s(e){let t=``;for(let n=1;n<=3;n++)t+=`
            <svg class="${n<=e?`filled`:``}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 2C11.5 2 11 2.5 11 3C11 3.5 11.5 4 12 4C14.8 4 17 6.2 17 9C17 10.9 16 12.6 14.4 13.5C14.1 13.7 13.9 14 13.9 14.4C13.9 15.5 13.4 16.5 12.6 17.1L10.7 18.5L8.5 16.3C7.6 15.4 7.1 14.2 7.1 12.9V9C7.1 6.2 9.3 4 12 4C12.6 4 13 3.5 13 3C13 2.5 12.6 2 12 2ZM12 6C10.3 6 9 7.3 9 9V12.9C9 13.7 9.3 14.5 9.9 15.1L12 17.2L14.1 15.1C15.3 13.9 16 12.2 16 10.5C16 8 14.2 6 12 6Z"/>
            </svg>
        `;return t}function c(){let t=document.querySelector(`.menu-search-input`),n=document.querySelectorAll(`.tab-btn`);t&&t.addEventListener(`input`,t=>{e.menuSearchQuery=t.target.value.toLowerCase().trim(),l()}),n.forEach(t=>{t.addEventListener(`click`,()=>{n.forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`),e.menuActiveTab=t.getAttribute(`data-tab`),l()})})}function l(){let n=document.querySelector(`.menu-grid`);if(!n)return;let r=t.filter(t=>{let n=e.menuActiveTab===`all`||t.category===e.menuActiveTab,r=t.title.toLowerCase().includes(e.menuSearchQuery)||t.description.toLowerCase().includes(e.menuSearchQuery)||t.category.toLowerCase().includes(e.menuSearchQuery);return n&&r});if(r.length===0){n.innerHTML=`
            <div class="no-results">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                <h3>No Items Found</h3>
                <p>Try clearing your search or picking another category.</p>
            </div>
        `;return}n.innerHTML=r.map(e=>`
        <div class="menu-item" data-id="${e.id}">
            <div class="menu-item-img-box">
                <img src="${e.image}" alt="${e.title}" loading="lazy">
                ${a(e)}
            </div>
            <div class="menu-item-content">
                <div class="menu-item-header">
                    <h4 class="menu-item-title">${e.title}</h4>
                    <div class="card-spice">
                        ${s(e.spice)}
                    </div>
                </div>
                <p class="menu-item-desc">${e.description}</p>
                <div class="menu-item-footer">
                    <span class="menu-item-price">₹${e.price}</span>
                    <button class="btn-card-add" data-id="${e.id}" aria-label="Quick Add">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
                    </button>
                </div>
            </div>
        </div>
    `).join(``),n.querySelectorAll(`.menu-item`).forEach(e=>{e.addEventListener(`click`,t=>{t.target.closest(`.btn-card-add`)||y(e.getAttribute(`data-id`))})}),n.querySelectorAll(`.btn-card-add`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation(),y(e.getAttribute(`data-id`))})})}function u(){let e=document.querySelector(`.testimonial-track`),t=Array.from(document.querySelectorAll(`.testimonial-slide`)),n=document.querySelector(`.slider-dots`),r=document.querySelector(`.slider-btn-prev`),i=document.querySelector(`.slider-btn-next`);if(!e||t.length===0)return;let a=0,o=null;n.innerHTML=t.map((e,t)=>`
        <button class="slider-dot ${t===0?`active`:``}" data-index="${t}" aria-label="Go to slide ${t+1}"></button>
    `).join(``);let s=Array.from(n.querySelectorAll(`.slider-dot`));function c(n){n<0&&(n=t.length-1),n>=t.length&&(n=0),a=n,e.style.transform=`translateX(-${a*100}%)`,s.forEach(e=>e.classList.remove(`active`)),s[a].classList.add(`active`),u()}r.addEventListener(`click`,()=>c(a-1)),i.addEventListener(`click`,()=>c(a+1)),s.forEach(e=>{e.addEventListener(`click`,()=>{c(parseInt(e.getAttribute(`data-index`)))})});function l(){o=setInterval(()=>{c(a+1)},6e3)}function u(){clearInterval(o),l()}l()}function d(){let t=document.querySelector(`.cart-toggle`),n=document.querySelector(`.cart-close-btn`),r=document.querySelector(`.cart-overlay`);t&&t.addEventListener(`click`,()=>{r.classList.add(`active`),h()}),n&&n.addEventListener(`click`,()=>{r.classList.remove(`active`)}),r&&r.addEventListener(`click`,e=>{e.target===r&&r.classList.remove(`active`)});let i=document.querySelector(`.btn-checkout`);i&&i.addEventListener(`click`,()=>{e.cart.length!==0&&(r.classList.remove(`active`),b())})}function f(n,r,i){let a=t.find(e=>e.id===n);if(!a)return;let o=p(i),s=e.cart.findIndex(e=>e.id===n&&e.customizationsHash===o);if(s>-1)e.cart[s].quantity+=r;else{let t=i.reduce((e,t)=>e+t.price,0);e.cart.push({id:n,title:a.title,image:a.image,basePrice:a.price,extraCost:t,unitPrice:a.price+t,quantity:r,customizations:i,customizationsHash:o})}m(),S(`${a.title} added to cart!`)}function p(e){return e.map(e=>e.name).sort().join(`|`)}function m(){let t=document.querySelector(`.cart-count`),n=e.cart.reduce((e,t)=>e+t.quantity,0);t&&(t.textContent=n,t.style.display=n>0?`flex`:`none`)}function h(){let t=document.querySelector(`.cart-items-container`),n=document.getElementById(`cart-subtotal-val`),r=document.getElementById(`cart-tax-val`),i=document.getElementById(`cart-total-val`),a=document.querySelector(`.btn-checkout`);if(!t)return;if(e.cart.length===0){t.innerHTML=`
            <div class="cart-empty-state">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm0 10c-2.76 0-5-2.24-5-5h2c0 1.66 1.34 3 3 3s3-1.34 3-3h2c0 2.76-2.24 5-5 5z"/></svg>
                <h3>Your cart is empty</h3>
                <p>Add some spicy snacks and fresh rolls from our menu to get started!</p>
            </div>
        `,n&&(n.textContent=`₹0`),r&&(r.textContent=`₹0`),i&&(i.textContent=`₹0`),a&&(a.disabled=!0);return}a&&(a.disabled=!1),t.innerHTML=e.cart.map((e,t)=>{let n=e.customizations.length>0?`+ ${e.customizations.map(e=>e.name).join(`, `)}`:``;return`
            <div class="cart-item">
                <img src="${e.image}" alt="${e.title}" class="cart-item-img">
                <div class="cart-item-details">
                    <div class="cart-item-header">
                        <div>
                            <h4 class="cart-item-title">${e.title}</h4>
                            ${n?`<div class="cart-item-customizations">${n}</div>`:``}
                        </div>
                        <button class="cart-item-remove-btn" data-index="${t}" aria-label="Remove item">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                        </button>
                    </div>
                    <div class="cart-item-footer">
                        <div class="cart-item-qty">
                            <button class="qty-btn dec" data-index="${t}">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 13H5v-2h14v2z"/></svg>
                            </button>
                            <span class="qty-num">${e.quantity}</span>
                            <button class="qty-btn inc" data-index="${t}">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
                            </button>
                        </div>
                        <span class="cart-item-price">₹${e.unitPrice*e.quantity}</span>
                    </div>
                </div>
            </div>
        `}).join(``),t.querySelectorAll(`.qty-btn.dec`).forEach(e=>{e.addEventListener(`click`,()=>{g(parseInt(e.getAttribute(`data-index`)),-1)})}),t.querySelectorAll(`.qty-btn.inc`).forEach(e=>{e.addEventListener(`click`,()=>{g(parseInt(e.getAttribute(`data-index`)),1)})}),t.querySelectorAll(`.cart-item-remove-btn`).forEach(e=>{e.addEventListener(`click`,()=>{_(parseInt(e.getAttribute(`data-index`)))})});let o=e.cart.reduce((e,t)=>e+t.unitPrice*t.quantity,0),s=Math.round(o*.05),c=o+15+s;n&&(n.textContent=`₹${o}`),r&&(r.textContent=`₹${15+s}`),i&&(i.textContent=`₹${c}`)}function g(t,n){t<0||t>=e.cart.length||(e.cart[t].quantity+=n,e.cart[t].quantity<=0&&e.cart.splice(t,1),m(),h())}function _(t){t<0||t>=e.cart.length||(e.cart.splice(t,1),m(),h())}function v(){let e=document.querySelector(`.modal-overlay`),t=document.querySelector(`.modal-close-btn`);t&&t.addEventListener(`click`,()=>{e.classList.remove(`active`)}),e&&e.addEventListener(`click`,t=>{t.target===e&&e.classList.remove(`active`)})}function y(n){let r=t.find(e=>e.id===n);if(!r)return;e.selectedItemForModal=r;let i=document.getElementById(`details-modal`);if(!i)return;let o=r.customizations&&r.customizations.length>0?`
            <div class="customization-section">
                <h4 class="customization-title">Customize Order</h4>
                <div class="customization-options">
                    ${r.customizations.map((e,t)=>`
                        <label class="checkbox-label">
                            <input type="checkbox" class="modal-custom-opt" data-index="${t}" value="${e.name}">
                            <span class="checkbox-custom"></span>
                            <span>${e.name} ${e.price>0?`(+₹${e.price})`:``}</span>
                        </label>
                    `).join(``)}
                </div>
            </div>
        `:``;i.querySelector(`.modal-container`).innerHTML=`
        <button class="modal-close-btn" aria-label="Close modal">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
        </button>
        <div class="modal-img-box">
            <img src="${r.image}" alt="${r.title}">
            <div class="modal-img-overlay"></div>
        </div>
        <div class="modal-body">
            <div class="modal-meta">
                ${a(r)}
                <span style="font-size:0.85rem; color:var(--color-secondary); font-weight:700; text-transform:uppercase;">
                    ${r.category}
                </span>
            </div>
            <h3 class="modal-title">${r.title}</h3>
            <p class="modal-desc">${r.description}</p>
            
            ${o}
            
            <div class="modal-footer">
                <span class="card-price" id="modal-item-price">₹${r.price}</span>
                <button class="btn btn-primary" id="btn-modal-add-to-cart">Add to Cart</button>
            </div>
        </div>
    `,i.querySelector(`.modal-close-btn`).addEventListener(`click`,()=>{i.classList.remove(`active`)});let s=i.querySelectorAll(`.modal-custom-opt`),c=i.querySelector(`#modal-item-price`),l=()=>{let e=0;s.forEach(t=>{if(t.checked){let n=parseInt(t.getAttribute(`data-index`));e+=r.customizations[n].price}}),c.textContent=`₹${r.price+e}`};s.forEach(e=>e.addEventListener(`change`,l)),i.querySelector(`#btn-modal-add-to-cart`).addEventListener(`click`,()=>{let e=[];s.forEach(t=>{if(t.checked){let n=parseInt(t.getAttribute(`data-index`));e.push(r.customizations[n])}}),f(r.id,1,e),i.classList.remove(`active`)}),i.classList.add(`active`)}function b(){let t=document.getElementById(`details-modal`);if(!t)return;let n=`SHACK-`+Math.floor(1e5+Math.random()*9e5),r=new Date().toLocaleDateString(`en-IN`,{year:`numeric`,month:`short`,day:`numeric`,hour:`2-digit`,minute:`2-digit`}),i=e.cart.reduce((e,t)=>e+t.unitPrice*t.quantity,0),a=Math.round(i*.05),o=i+15+a,s=e.cart.map(e=>`
        <div class="invoice-row" style="color: var(--text-secondary); margin-bottom: 0.5rem;">
            <span>${e.title} (x${e.quantity})</span>
            <span>₹${e.unitPrice*e.quantity}</span>
        </div>
    `).join(``);t.querySelector(`.modal-container`).innerHTML=`
        <div class="invoice-container">
            <div class="invoice-header">
                <svg class="invoice-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <h3 class="invoice-title">Order Placed Successfully!</h3>
                <span class="invoice-id">Receipt ID: ${n}</span>
            </div>
            <div class="invoice-body">
                <div class="invoice-details">
                    <div class="invoice-row">
                        <span style="color:var(--text-muted);">Date & Time</span>
                        <span style="font-weight:600;">${r}</span>
                    </div>
                    <div class="invoice-row">
                        <span style="color:var(--text-muted);">Status</span>
                        <span style="font-weight:700; color:var(--color-green);">PREPARING FRESH IN KITCHEN</span>
                    </div>
                    <div style="border-top:1px dashed var(--border-color); margin:1rem 0;"></div>
                    
                    ${s}
                    
                    <div style="border-top:1px dashed var(--border-color); margin:1rem 0;"></div>
                    <div class="invoice-row" style="font-size:0.875rem; color:var(--text-muted);">
                        <span>Subtotal</span>
                        <span>₹${i}</span>
                    </div>
                    <div class="invoice-row" style="font-size:0.875rem; color:var(--text-muted);">
                        <span>Taxes & Packing</span>
                        <span>₹${15+a}</span>
                    </div>
                    <div class="invoice-row total-row">
                        <span>Total Paid</span>
                        <span>₹${o}</span>
                    </div>
                </div>
            </div>
            <div class="invoice-footer">
                <button class="btn btn-primary btn-invoice-done">Done & Track Order</button>
            </div>
        </div>
    `,t.querySelector(`.btn-invoice-done`).addEventListener(`click`,()=>{t.classList.remove(`active`),e.cart=[],m()}),t.classList.add(`active`),C()}function x(){let e=document.querySelector(`.contact-form`);e&&e.addEventListener(`submit`,t=>{t.preventDefault();let n=e.querySelector(`button[type="submit"]`);n.textContent=`Sending...`,n.disabled=!0,setTimeout(()=>{S(`Thank you! Snack Shack will get back to you shortly.`),e.reset(),n.textContent=`Submit Message`,n.disabled=!1},1500)})}function S(e){let t=document.querySelector(`.toast-container`);t||(t=document.createElement(`div`),t.className=`toast-container`,Object.assign(t.style,{position:`fixed`,bottom:`2rem`,left:`50%`,transform:`translateX(-50%)`,zIndex:`15000`,display:`flex`,flexDirection:`column`,gap:`0.5rem`,pointerEvents:`none`}),document.body.appendChild(t));let n=document.createElement(`div`);n.className=`toast-msg`,n.textContent=e,Object.assign(n.style,{backgroundColor:`var(--bg-secondary)`,color:`var(--text-primary)`,border:`1px solid var(--color-secondary)`,padding:`0.75rem 1.5rem`,borderRadius:`var(--radius-full)`,boxShadow:`var(--shadow-md)`,fontSize:`0.9rem`,fontWeight:`600`,animation:`fadeInUp 0.3s cubic-bezier(0.16, 1, 0.3, 1), fadeOut 0.3s cubic-bezier(0.16, 1, 0.3, 1) 2.7s forwards`,whiteSpace:`nowrap`,pointerEvents:`auto`}),t.appendChild(n),setTimeout(()=>{n.remove(),t.children.length===0&&t.remove()},3e3)}if(!document.querySelector(`#toast-keyframes`)){let e=document.createElement(`style`);e.id=`toast-keyframes`,e.innerHTML=`
        @keyframes fadeOut {
            to { opacity: 0; transform: translate(-50%, 20px) scale(0.9); }
        }
    `,document.head.appendChild(e)}function C(){let e=document.querySelector(`.confetti-canvas`);e||(e=document.createElement(`canvas`),e.className=`confetti-canvas`,document.body.appendChild(e));let t=e.getContext(`2d`);e.width=window.innerWidth,e.height=window.innerHeight;let n=[`#e63946`,`#ffb703`,`#fb8500`,`#4ade80`,`#3b82f6`],r=[];class i{constructor(){this.x=Math.random()*e.width,this.y=Math.random()*e.height-e.height,this.size=Math.random()*8+5,this.color=n[Math.floor(Math.random()*n.length)],this.speed=Math.random()*4+3,this.angle=Math.random()*360,this.spinSpeed=Math.random()*4-2}update(){this.y+=this.speed,this.angle+=this.spinSpeed,this.x+=Math.sin(this.y*.01)*.5}draw(){t.save(),t.translate(this.x,this.y),t.rotate(this.angle*Math.PI/180),t.fillStyle=this.color,t.fillRect(-this.size/2,-this.size/2,this.size,this.size),t.restore()}}for(let e=0;e<150;e++)r.push(new i);let a,o=0;function s(){t.clearRect(0,0,e.width,e.height);let n=0;r.forEach(t=>{t.update(),t.draw(),t.y<e.height&&n++}),o++,n>0&&o<200?a=requestAnimationFrame(s):(cancelAnimationFrame(a),e.remove())}s(),window.addEventListener(`resize`,()=>{e.width=window.innerWidth,e.height=window.innerHeight})}}))();