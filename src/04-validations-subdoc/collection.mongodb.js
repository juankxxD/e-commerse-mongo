use("platzi_store")

db.createCollection('products', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['name'],
            properties: {
                name: {
                    bsonType: 'string'
                },
                sizes: {
                    bsonType: 'array',
                    minItems: 1,
                    uniqueItems: true,
                    items: {
                        bsonType: 'string'
                    }
                },   
                category: {
                    bsonType: 'object',
                    required: ['name'],
                    properties: {
                        name: {
                            bsonType: 'string'
                        },
                        image: {
                            bsonType: 'string'
                        },
                    }
                }             
            }
        }
    }
})