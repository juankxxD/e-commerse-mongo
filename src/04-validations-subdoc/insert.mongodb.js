use("platzi_store")

db.products.insertOne({
    name: 'Camiseta',
    sizes: ['L', 'M'],
    category: {
        name: 'oversize',
    }
})