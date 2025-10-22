let products = JSON.parse(localStorage.getItem('limpeza')) || [];
let editingId = null;

const modal = document.getElementById('productModal');
const addBtn = document.getElementById('addBtn');
const closeModal = document.getElementById('closeModal');
const cancelBtn = document.getElementById('cancelBtn');
const productForm = document.getElementById('productForm');
const searchInput = document.getElementById('searchInput');

function openModal(isEdit = false, product = null) {
    modal.classList.add('active');
    document.getElementById('modalTitle').textContent = isEdit ? 'Editar Produto' : 'Adicionar Produto';
    
    if (isEdit && product) {
        editingId = product.id;
        document.getElementById('productId').value = product.id;
        document.getElementById('productCode').value = product.code;
        document.getElementById('productName').value = product.name;
        document.getElementById('productCategory').value = product.category;
        document.getElementById('productUnit').value = product.unit;
        document.getElementById('productQuantity').value = product.quantity;
        document.getElementById('productPrice').value = product.price;
    } else {
        editingId = null;
        productForm.reset();
        document.getElementById('productId').value = '';
    }
}

function closeModalHandler() {
    modal.classList.remove('active');
    productForm.reset();
    editingId = null;
}

function saveProducts() {
    localStorage.setItem('limpeza', JSON.stringify(products));
}

function renderTable(filteredProducts = products) {
    const tbody = document.getElementById('tableBody');
    
    if (filteredProducts.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="7">
                    <div class="empty-state">
                        <div class="empty-state-icon">🧹</div>
                        <h3>Nenhum produto encontrado</h3>
                        <p>Clique em "Adicionar Produto" para começar</p>
                    </div>
                </td>
            </tr>
        `;
        return;
    }
    
    tbody.innerHTML = filteredProducts.map(product => `
        <tr>
            <td>${product.code}</td>
            <td>${product.name}</td>
            <td>${product.category}</td>
            <td>${product.quantity}</td>
            <td>${product.unit}</td>
            <td>R$ ${parseFloat(product.price).toFixed(2)}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn-icon btn-edit" onclick="editProduct('${product.id}')">Editar</button>
                    <button class="btn-icon btn-delete" onclick="deleteProduct('${product.id}')">Excluir</button>
                </div>
            </td>
        </tr>
    `).join('');
}

function editProduct(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        openModal(true, product);
    }
}

function deleteProduct(id) {
    if (confirm('Tem certeza que deseja excluir este produto?')) {
        products = products.filter(p => p.id !== id);
        saveProducts();
        renderTable();
    }
}

addBtn.addEventListener('click', () => openModal(false));
closeModal.addEventListener('click', closeModalHandler);
cancelBtn.addEventListener('click', closeModalHandler);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModalHandler();
    }
});

productForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        id: editingId || Date.now().toString(),
        code: document.getElementById('productCode').value,
        name: document.getElementById('productName').value,
        category: document.getElementById('productCategory').value,
        unit: document.getElementById('productUnit').value,
        quantity: document.getElementById('productQuantity').value,
        price: document.getElementById('productPrice').value
    };
    
    if (editingId) {
        const index = products.findIndex(p => p.id === editingId);
        products[index] = formData;
    } else {
        products.push(formData);
    }
    
    saveProducts();
    renderTable();
    closeModalHandler();
});

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.code.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
    renderTable(filtered);
});

renderTable();
