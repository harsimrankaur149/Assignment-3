///Binding the header and the section elements to the following variables
		let header = document.querySelector('header');
		let section = document.querySelector('section');

		// Storing json url in a variable
        let requestingURL = "https://harsimrankaur149.github.io/Assignment-3/products.json";

		
		// Creating a new XHR object 
        let request = new XMLHttpRequest();
		
		// using the open method of XHR object, we are opening a new request
        request.open("GET",requestingURL);
	
		//setting up the response type
        request.responseType = "json"; 

		
		//sending the request
        request.send(); 
	
		//setting up an event handler which will listen for onload
        request.onload = function ()
        {
           let  weirdDeals = request.response;
            console.log(weirdDeals);
            heading(weirdDeals);
            products(weirdDeals);
        };
		
		//creating heading function which will display heading on the top of the page
        function heading(obj)
        {
            let heading1 = document.createElement("h1");
            heading1.textContent = obj
            ["title"];
            header.appendChild(heading1);
        }

        // creating products function which will display all the details of the products
        function products(obj)
        {
            let products = obj
            ["products"];
        

        for(let i= 0; i<products.length;i++)
        {
            // creating new elements
            let article = document.createElement("article");
            let h2 = document.createElement("h2");
            let img = document.createElement("img");
            let p1 = document.createElement("p");
            let p2 = document.createElement("p");
            let list = document.createElement("ul");

            // setting attributes
            img.setAttribute("src", "images/" + products[i].image);
            img.setAttribute("alt", products[i].productName);
            h2.textContent = products[i].productName;
            p1.textContent = products[i].price;
            p2.textContent = products[i].description;

            // array for features
            let features = products[i].features;
            
            // another loop for features 
            for(let j = 0; j< features.length; j++)
            {
                let productFeatures = document.createElement("li");
                productFeatures.textContent = features[j];
                list.appendChild(productFeatures);
            }

            // appending all thses elements to article
            article.appendChild(img);
            article.appendChild(h2);
            article.appendChild(p1);
            article.appendChild(p2);
            article.appendChild(list);
            section.appendChild(article);





        }
        }
    