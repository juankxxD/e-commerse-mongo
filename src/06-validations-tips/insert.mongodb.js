use("platzi_store")

db.users.insertOne({
    email: "pablo@gmail.com",
    password: 'Azas1jhjsd87897sdA',
    role: 'seller',
    social_accounts: ['twitter', 'facebook']
})