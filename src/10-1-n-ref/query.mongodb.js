use("platzi_store")

db.orders.find()
db.users.find()
db.orders.find({ user_id: ObjectId('6428a7b475ff462f6ea04fa8')}).count()

db.orders.aggregate([
    {
        $lookup: {
          from: 'users',
          localField: 'user_id',
          foreignField: '_id',
          as: 'user'
        }
    }
])

db.orders.aggregate([
    {
    $match: {
        _id: ObjectId('6428a3d0cb31f01f809ddd9c')
        }
    },
    {
        $lookup: {
          from: 'users',
          localField: 'user_id',
          foreignField: '_id',
          as: 'user'
        }
    }
])