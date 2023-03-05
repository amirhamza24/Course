const universeHub = async() => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(url);
    const data = await res.json();
    displayUniverse(data.data.tools.slice(0,6));
}

const displayUniverse = (data) => {

    // data = data.slice(0, 6);
    // console.log(data);

    const mainContainer = document.getElementById('main-container');
    
    mainContainer.innerHTML = '';

    data.forEach(singleData => {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('col');

        categoryDiv.innerHTML = `
            <div class="card h-100">
                <img src="${singleData.image}" class="card-img-top p-4" alt="...">
                <div class="card-body p-4">
                    <h5 class="card-title">Features</h5>
                    <div class="">
                        <ol>
                            <li class="text-muted ${singleData.features[0] === undefined ? 'd-none' : ''}">${singleData.features[0]}</li>
                            <li class="text-muted ${singleData.features[1] === undefined ? 'd-none' : ''}">${singleData.features[1]}</li>
                            <li class="text-muted ${singleData.features[2] === undefined ? 'd-none' : ''}">${singleData.features[2]}</li>
                            <li class="text-muted ${singleData.features[3] === undefined ? 'd-none' : ''}">${singleData.features[3]}</li>
                        </ol>
                    </div>
                </div>
                
                <div class="card-footer p-4 d-flex justify-content-between align-items-center">
                    <div>
                        <h5 class="card-title">${singleData.name}</h5>
                        <small class="text-muted"><i class="fa-regular fa-calendar-days me-2"></i> ${singleData.published_in}</small>
                    </div>
                    
                    <div class="text-danger icon-bg">
                        <i class="fa-solid fa-arrow-right" onclick="modalDetails('${singleData.id}')" data-bs-toggle="modal" data-bs-target="#universeModal"></i>

                    </div>
                </div>
            </div>
        
        `;
        mainContainer.appendChild(categoryDiv);
    })
    // stop spinner
    toggleSpinner(false);


    // sorting date
    const sorting = (a, b) => {
        const dateA = new Date(a.published_in);
        const dateB = new Date(b.published_in);

        if(dateA > dateB) {
            return 1;
        }

        else if(dateA < dateB) {
            return -1;
        }

        else {
            0;
        }
    }

    document.getElementById('sort-date').addEventListener('click', function() {
        displayUniverse(data.sort(sorting));
    });

} 

// modal section
const modalDetails = async id => {
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayDetails(data.data);
}

const displayDetails = modal => {
    // console.log(modal);

    // modal pricing
    const modalLeft = document.getElementById('modal-left');
    modalLeft.innerHTML = `
        <h6>${modal.description}</h6>

        <div class="d-flex flex-column flex-md-row justify-content-between align-items-center my-4">
            <div class="d-flex flex-column align-items-center justify-content-center text-center bg-white price-size mb-2 mx-2 p-3 rounded">
                <p class="fw-bold text-success mb-0">${modal.pricing ? modal.pricing[0].price : "Free of cost"}</p>
                <p class="fw-bold text-success mb-0">${modal.pricing ? modal.pricing[0].plan : ""}</p>
            </div>
            
            <div class="d-flex flex-column align-items-center justify-content-center text-center bg-white price-size mb-2 mx-2 p-3 rounded">
                <p class="fw-bold text-primary mb-0">${modal.pricing ? modal.pricing[1].price : "Free of cost"}</p>
                <p class="fw-bold text-primary mb-0">${modal.pricing ? modal.pricing[1].plan : ""}</p>
            </div>
            
            
            <div class="d-flex flex-column align-items-center justify-content-center text-center bg-white price-size mb-2 mx-2 p-3 rounded">
                <p class="fw-bold text-danger mb-0">${modal.pricing ? modal.pricing[2].price : "Free of cost"}</p>
                <p class="fw-bold text-danger mb-0">${modal.pricing ? modal.pricing[2].plan : ""}</p>
            </div>
        </div>
    

        <div class="d-flex flex-column flex-md-row justify-content-sm-center justify-content-md-around text-resize mt-3">
            <div>
                <h6>Features</h6>
                <ul>
                    <li class="text-muted">${modal.features[1].feature_name ? modal.features[1].feature_name : ''}</li>
                    <li class="text-muted">${modal.features[2].feature_name ? modal.features[2].feature_name : ''}</li>
                    <li class="text-muted">${modal.features[3].feature_name ? modal.features[3].feature_name : ''}</li>
                </ul>
            </div>

            <div>
                <h6>Integrations</h6>
                <ul>
                    <li class="text-muted">${modal.integrations ? modal.integrations[0] : 'No data found'}</li>
                    <li class="text-muted">${modal.integrations ? modal.integrations[1] : 'No data found'}</li>
                    <li class="text-muted">${modal.integrations ? modal.integrations[2] : 'No data found'}</li>
                    <li class="text-muted">${modal.integrations ? modal.integrations[3] : 'No data found'}</li>
                    <li class="text-muted">${modal.integrations ? modal.integrations[4] : 'No data found'}</li>
                </ul>
            </div>
        </div>
    `

    const modalRight = document.getElementById('modal-right');
    modalRight.innerHTML = `
        <img class="w-100 accuracy-position-img" src="${modal.image_link[0]}">
        <div class="mt-5 text-center">
            <h5 class="card-title">${modal.input_output_examples ? modal.input_output_examples[0].input: "Can you give any example?"}</h5>
            <p class="text-muted mt-2">${modal.input_output_examples?modal.input_output_examples[0].input: "No! Not Yet! Take a break!!!"}</p>

            <div>
                <p class="card-title bg-danger accuracy-position text-white px-2">${modal.accuracy.score ? modal.accuracy.score * 100 + '% accuracy' : ''}</p>
            </div>
        </div>
    `
}

// show all function
const showAllData = async() => {
    toggleSpinner(true);
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(url);
    const data = await res.json();
    displayUniverse(data.data.tools);

    const showAllBtn = document.getElementById('show-all-btn');
    showAllBtn.disabled = true;
}

// spinner
const toggleSpinner = isLoading => {
    const loaderSection=document.getElementById('loader');
    if(isLoading){
        loaderSection.classList.remove('d-none')
    }
    else{
        loaderSection.classList.add('d-none')
    }
  }


universeHub();
