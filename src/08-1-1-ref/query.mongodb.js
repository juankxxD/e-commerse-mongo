use("platzi_store")

db.stores.findOne({
    storeId: 'ST001'
})

db.stores_details.findOne({
    storeId: 'ST001'
})

db.stores.aggregate([
    {
        $lookup: {
          from: 'stores_details',
          localField: 'storeId',
          foreignField: 'storeId',
          as: 'detail'
        }
    }
])