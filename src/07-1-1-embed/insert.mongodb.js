use("platzi_store")

db.users.insertOne({
    email: "juan@gmail.com",
    password: 'Azas1jhjsd87897sdA',
    role: 'seller',
    social_accounts: ['twitter', 'facebook'],
    address: {
        street: 'cr 891',
        city: 'Bogota',
        zip: '11011'
    },
    shipping_address: {
        street: 'cr 23 132',
        city: 'Bogota',
        zip: '12011'
    },
})