use("platzi_store")

db.stores.insertOne({
    storeId: "ST001",
    name: "Nico store",
    address: "Cr 234"
})


db.stores_details.insertOne({
    storeId: "ST001",
    description: "Text",
    manager: {
        email:'juanqgmail.com',
        cellphone: '3223232332'
    }
})
