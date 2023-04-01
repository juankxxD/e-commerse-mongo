use("platzi_store")

db.products.find()
db.stores.find()

db.stores.aggregate([
    {
        $lookup: {
          from: 'products',
          localField: 'products_ids',
          foreignField: '_id',
          as:'products'
        }
    }
])
