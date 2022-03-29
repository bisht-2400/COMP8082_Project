function createJobListing(listing) {
    let btn = document.createElement("button");
    btn.className = "collapsible";
    let imgSrc = "images/".concat(listing.employer, ".png")
    btn.innerHTML = "<img src='".concat(imgSrc, "' style = 'height: 48px; width: 48px'>", " ", listing.title);
    document.getElementById("index_body").appendChild(btn);
    btn.addEventListener("click", function() {
        location.href = "job_description.html";
})
}

function createUlList(root, content) {
    let contentArray = content.split(".")

    let ul = document.createElement('ul');
    let li;

    root.appendChild(ul);

    contentArray.forEach(function(item) {
        if (Array.isArray(item)) {
            createUlList(li, item);
            return;
        }

        li = document.createElement('li');
        li.appendChild(document.createTextNode(item));
        ul.appendChild(li);
    });
}

function addEventListeners() {
    let coll = document.getElementsByClassName("collapsible");
    let i;
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            let content = this.nextElementSibling;
            if (content.style.maxHeight){
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
    console.log("I'm Done")
}
function appendAllJobListings() {
    fetch("./database.json")
        .then(response => {
            return response.json();
        })
        .then(jsondata => loopThroughListings(jsondata.job_listings));
}
function loopThroughListings(data) {
    for (let i = 0; i < data.length; i++) {
        createJobListing(data[i])
    }
}
appendAllJobListings();
