const newsletterButton = document.getElementById("newsletter");
newsletterButton.addEventListener("click", () => {
    newsletterButton.innerHTML = "Merci, vous êtes maintenant abonné";
    window.dataLayer = window.dataLayer || [];

    dataLayer.push({
        event: "newsletterSubscription",
        clientType: ["Prospect", "Client", "Nouveau Client"][
            Math.floor(Math.random() * 3)
        ],
        source: ["Popup", "Footer", "Notif push"][Math.floor(Math.random() * 3)],
        frequency: ["Hebdo", "Mensuel", "Quotidien"][
            Math.floor(Math.random() * 3)
        ],
    });
});



const pushButton = document.getElementById("push");
pushButton.addEventListener("click", () => {
    const state = { page_id: 1, user_id: 5 };
    const url = Array.from({ length: Math.floor(Math.random() * 6) + 5 }, () =>
    Math.random().toString(36).charAt(2)
    ).join("");
    
    history.pushState(state, "", url);
});


const purchase = document.getElementById("purchase");
purchase.addEventListener("click", () => {
    purchase.innerHTML =  "Votre achat a été validé et votre carte bleue débitée";
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        event: "productPurchase",
        userEmail : ["pierredupont@gmail.com", "cmailledubois@yahoo.fr", "claude.martin@caramail.com"][Math.floor(Math.random() * 3)],
        userFirstName : ["Pierre", "Camille", "Claude"][Math.floor(Math.random() * 3)] ,
        userLastName : ["Dupont", "Dubois", "Martin"][Math.floor(Math.random() * 3)] ,
        userCity : ["Paris", "Rennes", "Lille"][Math.floor(Math.random() * 3)],
        userPhone : ["0611111111", "0600000000", "0899999999"][Math.floor(Math.random() * 3)],
        userZip : ["75001", "35000", "85000"][Math.floor(Math.random() * 3)],
        userBirthDate : ["19880221", "19900312", "19920101"][Math.floor(Math.random() * 3)] ,
        transactionId: ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
            /[018]/g,
            (c) =>
            (
                c ^
                (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
                ).toString(16)
                ),
                shipping: Math.round((Math.random() * (100 - 10) + 10) * 100) / 100,
                currency: ["EUR", "USD", "CHF"][Math.floor(Math.random() * 3)],
                products: [
                    {
                        SKU: ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
                        (
                            c ^
                            (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
                            ).toString(16)
                            ),
                            name: ["GA4", "GTM", "BigQuery"][Math.floor(Math.random() * 3)],
                            category: "Formations",
                            price: Math.floor(Math.random() * (5000 - 1000 + 1)) + 300,
                            duration: Math.floor(Math.random() * (5 - 1 + 1)) + 300,
                            trainer: ["Aristide", "Michel", "Patrick"][
                                Math.floor(Math.random() * 3)
                            ],
                        },
                        {
                            SKU: ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
                            (
                                c ^
                                (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
                                ).toString(16)
                                ),
                                name: ["GA4", "GTM", "BigQuery"][Math.floor(Math.random() * 3)],
                                category: "Formations",
                                price: Math.floor(Math.random() * (5000 - 1000 + 1)) + 300,
                                duration: Math.floor(Math.random() * (5 - 1 + 1)) + 300,
                                trainer: ["Aristide", "Michel", "Patrick"][
                                    Math.floor(Math.random() * 3)
                                ],
                            },
                        ],
                    });
                });
                
                
                
                
                
                
                
                var navTopItems = document.querySelectorAll('#nav_top li');
                
                navTopItems.forEach(function(item) {
                    item.addEventListener('click', function(event) {
                        event.preventDefault();
                        
                        var linkLabel = event.currentTarget.querySelector('a').textContent;

                        window.dataLayer = window.dataLayer || [];

                        
                        dataLayer.push({
                            'event': 'navTopClick',
                            'linkLabel': linkLabel
                        });
                    });
                });
                
                

                document.getElementById('demoForm').addEventListener('submit', function(event) {
                    // event.preventDefault();
                    const formData = new FormData(event.target);
                    const queryString = new URLSearchParams(formData).toString();
                    console.log('Form submitted with GET data:', queryString);
                    // alert('Formulaire soumis !'); 
                });
