// Properti dummy dengan gambar Unsplash
let properties = [
  {id:1,name:"Rumah Modern di Jakarta",price:1200000000,location:"Jakarta",img:"img/images.jpeg"},
  {id:2,name:"Apartemen Strategis",price:750000000,location:"Bandung",img:"img/images.jpeg"},
  {id:3,name:"Tanah Kavling Siap Bangun",price:400000000,location:"Depok",img:"img/images.jpeg"},
  {id:4,name:"Villa Mewah di Bali",price:5000000000,location:"Bali",img:"img/images.jpeg"},
  {id:5,name:"Rumah Minimalis Modern",price:900000000,location:"Surabaya",img:"img/images.jpeg"}
];

// Render Properti di index.html
function renderProperties(list){
  const container = document.getElementById('propertyList');
  if(!container) return;
  container.innerHTML = '';
  list.forEach(p=>{
    container.innerHTML += `
      <div class="col-md-4">
        <div class="card shadow-sm border-0">
          <img src="${p.img}" class="card-img-top" alt="${p.name}">
          <div class="card-body">
            <h5 class="card-title">${p.name}</h5>
            <p class="card-text text-primary fw-bold">Rp ${p.price.toLocaleString()}</p>
            <a href="property.html" class="btn btn-primary w-100">Lihat Detail</a>
          </div>
        </div>
      </div>`;
  });
}
renderProperties(properties);

// Filter properti
const filterForm = document.getElementById('filterForm');
if(filterForm){
  filterForm.addEventListener('submit', e=>{
    e.preventDefault();
    const lokasi = document.getElementById('lokasi').value.toLowerCase();
    const min = parseInt(document.getElementById('hargaMin').value) || 0;
    const max = parseInt(document.getElementById('hargaMax').value) || Infinity;
    const filtered = properties.filter(p=>{
      return p.location.toLowerCase().includes(lokasi) && p.price>=min && p.price<=max;
    });
    renderProperties(filtered);
  });
  document.getElementById('resetFilter').addEventListener('click',()=>{
    document.getElementById('lokasi').value='';
    document.getElementById('hargaMin').value='';
    document.getElementById('hargaMax').value='';
    renderProperties(properties);
  });
}

// Dashboard table
const propertyTable = document.getElementById('propertyTable');
if(propertyTable){
  properties.forEach(p=>{
    propertyTable.innerHTML += `
      <tr>
        <td>${p.id}</td>
        <td><img src="${p.img}" alt="${p.name}" style="width:100px; border-radius:5px;"></td>
        <td>${p.name}</td>
        <td>Rp ${p.price.toLocaleString()}</td>
        <td>
          <button class="btn btn-sm btn-warning" onclick="editProperty(${p.id})">Edit</button>
          <button class="btn btn-sm btn-danger" onclick="deleteProperty(${p.id})">Hapus</button>
        </td>
      </tr>`;
  });
}

function editProperty(id){ alert('Edit properti ID: '+id); }
function deleteProperty(id){ alert('Hapus properti ID: '+id); }
function renderProperties(list){
  const container = document.getElementById('propertyList');
  container.innerHTML = '';
  list.forEach(p=>{
    container.innerHTML += `
      <div class="col-12">
        <div class="card shadow-sm border-0 mb-3 flex-row flex-md-row flex-column">
          <img src="${p.img}" class="img-fluid" style="width: 300px; object-fit: cover;" alt="${p.name}">
          <div class="card-body d-flex flex-column justify-content-between">
            <h5 class="card-title">${p.name}</h5>
            <p class="card-text text-primary fw-bold">Rp ${p.price.toLocaleString()}</p>
            <a href="property.html" class="btn btn-primary w-100 mt-2 mt-md-auto">Lihat Detail</a>
          </div>
        </div>
      </div>`;
  });
}
renderProperties(properties);
document.getElementById('waButton').addEventListener('click', function(e){
  e.preventDefault();
  window.open('https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20tanya%20tentang%20properti', '_blank');
});
