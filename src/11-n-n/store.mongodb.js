use("platzi_store")

db.stores.insertMany(
    [
        {
            name: 'store 1',
            products_ids: [
                ObjectId('64288b4cab2565201d9e8240'),
                ObjectId('6428b68ca93e32d266a10810'),
            ]
        },
        {
            name: 'store 2',
            products_ids: [
                ObjectId('64288b4cab2565201d9e8240'),
                ObjectId('6428b68ca93e32d266a10810'),
                ObjectId('6428b68ca93e32d266a1080f'),
                ObjectId('6428b68ca93e32d266a10811')
            ]
        },
    ]
)
