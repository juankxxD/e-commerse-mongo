use("platzi_store")

db.createCollection('users', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['email', 'password', 'role'],
            properties: {
                name: {
                    bsonType: 'string'
                },
                last_name: {
                    bsonType: 'string'
                },
                email: {
                    bsonType: 'string'
                },
                password: {
                    bsonType: 'string',
                    pattern:"^[A-Za-z0-9]{8,}$"
                },
                age: {
                    bsonType: 'number',
                    minimum: 18,
                    maximum: 99
                },
                isSingle: {
                    bsonType: 'bool'
                },
                role: {
                    enum: ['customer', 'seller', 'admin']
                }
            }
        }
    }
})