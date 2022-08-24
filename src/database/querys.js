export const queriesUser = {
    getAll: 'SELECT * FROM [User]',
    createNew: 'INSERT [User] (name, last_name, rol, state, email, password) VALUES (@name, @last_name, @rol, @state, @email, @password)',
    getById: 'SELECT * FROM [User] WHERE id_user = @id',
    // delete: 'DELETE FROM Proveedor WHERE idProveedor = @id',
    // update: 'UPDATE Proveedor SET razonSocial = @razonSocial WHERE idProveedor = @id'
}

export const queriesContractor = {
    getAll: 'SELECT * FROM [Contractor]',
    createNew: 'INSERT [User] (name, last_name, rol, state, email, password) VALUES (@name, @last_name, @rol, @state, @email, @password)',
    getById: 'SELECT * FROM [User] WHERE id_contractor = @id',
    // delete: 'DELETE FROM Proveedor WHERE idProveedor = @id',
    // update: 'UPDATE Proveedor SET razonSocial = @razonSocial WHERE idProveedor = @id'
}


export const queriesSale = {
    getAll: 'SELECT * FROM [sale]',
    createNew: 'INSERT [sale] (name, last_name, rol, state, email, password) VALUES (@name, @last_name, @rol, @state, @email, @password)',
    getById: 'SELECT * FROM [sale] WHERE id_sale = @id',
    // delete: 'DELETE FROM Proveedor WHERE idProveedor = @id',
    // update: 'UPDATE Proveedor SET razonSocial = @razonSocial WHERE idProveedor = @id'
}


export const queriesService = {
    getAll: 'SELECT * FROM [service]',
    createNew: 'INSERT [service] (name, last_name, rol, state, email, password) VALUES (@name, @last_name, @rol, @state, @email, @password)',
    getById: 'SELECT * FROM [service] WHERE id_service = @id',
    // delete: 'DELETE FROM Proveedor WHERE idProveedor = @id',
    // update: 'UPDATE Proveedor SET razonSocial = @razonSocial WHERE idProveedor = @id'
}

export const queriesArticle = {
    getAll: 'SELECT * FROM [article]',
    createNew: 'INSERT [article] (name, last_name, rol, state, email, password) VALUES (@name, @last_name, @rol, @state, @email, @password)',
    getById: 'SELECT * FROM [article] WHERE id_article = @id',
    // delete: 'DELETE FROM Proveedor WHERE idProveedor = @id',
    // update: 'UPDATE Proveedor SET razonSocial = @razonSocial WHERE idProveedor = @id'
}

export const queriesBankAccount = {
    getAll: 'SELECT * FROM [bankaccount]',
    createNew: 'INSERT [bankaccount] (name, last_name, rol, state, email, password) VALUES (@name, @last_name, @rol, @state, @email, @password)',
    getById: 'SELECT * FROM [bankaccount] WHERE id_article = @id',
    // delete: 'DELETE FROM Proveedor WHERE idProveedor = @id',
    // update: 'UPDATE Proveedor SET razonSocial = @razonSocial WHERE idProveedor = @id'
}

export const queriesClient = {
    getAll: 'SELECT * FROM [client]',
    createNew: 'INSERT [client] (name, last_name, rol, state, email, password) VALUES (@name, @last_name, @rol, @state, @email, @password)',
    getById: 'SELECT * FROM [client] WHERE id_client = @id',
    // delete: 'DELETE FROM Proveedor WHERE idProveedor = @id',
    // update: 'UPDATE Proveedor SET razonSocial = @razonSocial WHERE idProveedor = @id'
}



