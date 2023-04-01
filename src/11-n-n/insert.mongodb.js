use("platzi_store")

db.products.insertMany(
    [
        {
            name: 'product 1',
            sizes: ['L', 'M'],
            price: 12
        },
        {
            name: 'product 2',
            sizes: ['L'],
            price: 45
        },
        {
            name: 'product 3',
            sizes: ['M'],
            price: 90
        },
    ]
)
