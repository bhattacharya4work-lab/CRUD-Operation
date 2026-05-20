let frm = document.getElementById("frm");
let tbody = document.getElementById("tbody");
let btn = document.getElementById("btn");

let editIndex = null;

let data = [
    { name: "Tanima Bhattacharya", age: 20 },
    { name: "Paromita Bose", age: 31 },
    { name: "Anisha Mitra", age: 22 },
    { name: "Purabi Majumder", age: 73 },
];

/* READ DATA */
function readdata() {

    tbody.innerHTML = "";

    data.map((e, i) => {

        let tr = document.createElement("tr");

        tr.innerHTML = `
      <td>${i + 1}</td>

      <td class="name-text">${e.name}</td>

      <td>
        <span class="age-chip">${e.age}</span>
      </td>

      <td>
        <button class="act-btn act-edit"
          onclick="editdata(${i})">
          ✏️
        </button>
      </td>

      <td>
        <button class="act-btn act-del"
          onclick="deleteData(${i})">
          🗑️
        </button>
      </td>
    `;

        tbody.append(tr);

    });
}

readdata();

/* EDIT DATA */
function editdata(i) {

    document.getElementById("i1").value = data[i].name;

    document.getElementById("i2").value = data[i].age;

    btn.innerHTML = "Update";

    editIndex = i;
}

/* INSERT + UPDATE */
frm.addEventListener("submit", (e) => {

    e.preventDefault();

    let i1 = document.getElementById("i1").value;

    let i2 = document.getElementById("i2").value;

    let obj = {
        name: i1,
        age: i2
    };

    /* INSERT */
    if (editIndex == null) {

        data.push(obj);

    }

    /* UPDATE */
    else {

        data[editIndex] = obj;

        editIndex = null;

        btn.innerHTML = "Submit";
    }

    readdata();

    frm.reset();
});

/* DELETE */
function deleteData(i) {

    if (window.confirm("Are you sure you want to delete this data?")) {

        data.splice(i, 1);

        readdata();

        frm.reset();

        editIndex = null;

        btn.innerHTML = "Submit";
    }
}