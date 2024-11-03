// Object to store king data
let kings = {};

// Function to populate input field when a dropdown option is selected
function populateInput() {
    const selectedName = document.getElementById('kingNameSelect').value;
    if (selectedName !== "") {
        document.getElementById('kingName').value = selectedName;  // Set input to selected name
        document.getElementById('startYear').value = kings[selectedName].startYear;  // Set input to selected start year
        document.getElementById('endYear').value = kings[selectedName].endYear;  // Set input to selected end year
    } else {
        document.getElementById('kingName').value = '';  // Clear input
        document.getElementById('startYear').value = '';  // Clear input
        document.getElementById('endYear').value = '';  // Clear input
    }
}

function updateDropdown() {
    const select = document.getElementById('kingNameSelect');
    select.innerHTML = '<option value="">新增年號</option>';
    Object.keys(kings).forEach(name => {
        const option = document.createElement('option');
        option.value = name;
        option.textContent = name;
        select.appendChild(option);
    });
    document.getElementById('kingName').value = '';  // Clear input
    document.getElementById('startYear').value = '';  // Clear input
    document.getElementById('endYear').value = '';  // Clear input
}

// Function to add or modify a king
function addOrModifyKing() {
    let name = document.getElementById('kingName').value;
    let startYear = parseInt(document.getElementById('startYear').value, 10);
    let endYear = parseInt(document.getElementById('endYear').value, 10);
    
    kings[name] = { startYear: startYear, endYear: endYear };
    updateKingSelect();
    updateDropdown();
    alert(`已添加或修改${name}`);
}

// Function to delete a king
function deleteKing() {
    let name = document.getElementById('kingName').value;
    delete kings[name];
    updateKingSelect();
    updateDropdown();
    alert(`已刪除${name}`);
}

// Function to update the king select dropdown
function updateKingSelect() {
    let select = document.getElementById('kingSelect');
    select.innerHTML = '<option value="BCE">公元前</option>';
    select.innerHTML += '<option value="CE">公元</option>';
    for (let king in kings) {
        let option = document.createElement('option');
        option.value = king;
        option.textContent = king;
        select.appendChild(option);
    }
}

function modify_year_representation(year) {
    if (year < 0) {
        return `公元前 ${-year} 年`;
    } else {
        return `公元 ${year + 1} 年`;
    }
}

function modify_kingyear_representation(year) {
    if (year == 1) {
        return `元`;
    } else {
        return `${year}`;
    }
}

// Function to calculate and display the year
function calculateYear() {
    let selectedKing = document.getElementById('kingSelect').value;
    let yearInput = document.getElementById('yearInput').value;
    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (selectedKing === "BCE") {
        // Direct BCE year input
        let givenYear = -parseInt(yearInput, 10);
        for (let king in kings) {
            if (givenYear >= kings[king].startYear && givenYear <= kings[king].endYear) {
                let kingYear = givenYear - kings[king].startYear + 1;
                var kingYearRepresentation = modify_kingyear_representation(kingYear);
                resultsDiv.innerHTML += `${king} ${kingYearRepresentation} 年<br>`;
            }
        }
    } 
    else if (selectedKing === "CE") {
        // Direct BCE year input
        let givenYear = parseInt(yearInput, 10) - 1;
        for (let king in kings) {
            if (givenYear >= kings[king].startYear && givenYear <= kings[king].endYear) {
                let kingYear = givenYear - kings[king].startYear + 1;
                var kingYearRepresentation = modify_kingyear_representation(kingYear);
                resultsDiv.innerHTML += `${king} ${kingYearRepresentation} 年<br>`;
            }
        }
    } else {
        // Calculate based on the selected king
        let givenYear = parseInt(yearInput, 10);
        if (kings[selectedKing]) {
            let calculatedYear = kings[selectedKing].startYear + givenYear - 1;
            resultsDiv.innerHTML = modify_year_representation(calculatedYear) + '<br>';
            let theYear = calculatedYear; 

            for (let king in kings) {
                if (king != selectedKing && theYear >= kings[king].startYear && theYear <= kings[king].endYear) {
                    let kingYear = theYear - kings[king].startYear + 1;
                    var kingYearRepresentation = modify_kingyear_representation(kingYear);
                    resultsDiv.innerHTML += `${king} ${kingYearRepresentation} 年<br>`;
                }
            }
        } else {
            resultsDiv.innerHTML = '紀元不存在！請先在上方添加。';
        }
    }
}

// Function to download kings data as CSV
function downloadCSV() {
    let csvContent = "data:text/plain;charset=utf-8,";
    csvContent += "諸侯\t紀元始年\t紀元終年\n";
    for (let king in kings) {
        csvContent += `${king}\t${kings[king].startYear}\t${kings[king].endYear}\n`;
    }
    let encodedUri = encodeURI(csvContent);
    let link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "諸侯.jinian");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


function triggerFileUpload() {
    // Programmatically click the hidden file input
    const fileInput = document.getElementById('fileInput');
    fileInput.click();
    
    // Add a one-time event listener to handle the file selection
    fileInput.onchange = function() {
        if (fileInput.files.length > 0) {
            // If a file was selected, proceed to read it
            const file = fileInput.files[0];
            uploadCSV(file);
        }
        // Reset the input so the same file can be reselected if needed
        fileInput.value = '';
    };
}

// Function to upload and read kings data from CSV
function uploadCSV(file) {
    let reader = new FileReader();
    reader.onload = function(e) {
        let contents = e.target.result;
        let lines = contents.split('\n');
        lines.forEach((line, index) => {
            if (index > 0 && line) { // Skip the header line
                let [king, startYear, endYear] = line.split('\t');
                kings[king] = { startYear: parseInt(startYear, 10), endYear: parseInt(endYear, 10) };
            }
        });
        updateKingSelect();
        updateDropdown();
        alert(`已加載注冊表`);
    };
    reader.readAsText(file);
}

// // Function to upload and read kings data from CSV
// function uploadCSV() {
//     let fileInput = document.getElementById('fileInput');
//     let file = fileInput.files[0];
//     let reader = new FileReader();
//     reader.onload = function(e) {
//         let contents = e.target.result;
//         let lines = contents.split('\n');
//         lines.forEach((line, index) => {
//             if (index > 0 && line) { // Skip the header line
//                 let [king, startYear, endYear] = line.split('\t');
//                 kings[king] = { startYear: parseInt(startYear, 10), endYear: parseInt(endYear, 10) };
//             }
//         });
//         updateKingSelect();
//         alert(`已加載注冊表`);
//     };
//     reader.readAsText(file);
// }

// Initial setup
window.onload = function() {
    updateKingSelect();
};

function toggleManageKingsSection() {
    var section = document.getElementById("manageKingsSection");
    var theButton = document.getElementById("configureButton");
    if (section.style.display === "none") {
        section.style.display = "block";
        theButton.style.display = "none";
    } else {
        section.style.display = "none";
        theButton.style.display = "block";
    }
}
