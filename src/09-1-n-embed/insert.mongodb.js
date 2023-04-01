use("platzi_store")

db.orders.insertOne({
    user_id: ObjectId('64289ab380b724df3c4825d9'),
    date: "2020-12-12",
    items: [
        {
            name: 'Juguete',
            price: 120,
            qty:3
        },
    ]
})
