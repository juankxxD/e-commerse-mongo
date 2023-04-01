use("platzi_store")

db.orders.insertOne({
    user_id: ObjectId('6428a7b475ff462f6ea04fa8'),
    date: "2020-12-12",
    items: [
        {
            name: 'Zapatos',
            price: 120,
            qty:1
        },
        {
            name: 'Otra cosa',
            price: 120,
            qty:1
        },
    ]
})
