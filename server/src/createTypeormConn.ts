import { createConnection } from "typeorm";
export const createTypeormConn = () => createConnection();

// createConnection()
// .then(async connection => {})
// .catch(error => console.log(error));
