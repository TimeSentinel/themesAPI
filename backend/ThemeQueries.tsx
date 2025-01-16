/* ---------------------------------------
backend/ProductTest.tsx
PROJECT: productsAPI;

(c) 2025 Lance Stubblefield
--------------------------------------- */

const Pool = require("pg").Pool;

const pool = new Pool({
    user: "admin",
    host: "192.168.1.100",
    database: "test",
    password: "password123",
    port: 5432,
});

function generateUUID() {
    const crypto = require("crypto");
    return crypto.randomUUID();
}

const querySelect = {
    select: {
        listThemes: "SELECT * FROM themes",
    },
    insert: {
        addTheme: "INSERT INTO themes (*) " +
            "VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, 'n', now())",
    },
    update: {
        editTheme: "UPDATE themes SET * = $2 WHERE ID = $1"
    },
    delete: {
       deleteTheme: "DELETE FROM themes WHERE ID = $1"
    }
}

// ---------------------------------------------------- LISTS ----------------------------------------------------
const getThemes = async () => {
    try {
        return await new Promise(function (resolve, reject) {
            pool.query(querySelect.select.listThemes, (error, results) => {
                if (error) {
                    reject(error);
                }
                if (results && results.rows) {
                    resolve(results.rows);
                } else {
                    reject(new Error("No results found"));
                }
            });
        });
    } catch (error_1) {
        console.error(error_1);
        throw new Error("Internal server error");
    }
};





// #############################################################################################

module.exports = {
    listProducts,
    listCategories,
    listSubcats
};