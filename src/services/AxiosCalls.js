// import axios from 'axios'
// import statements from '@/services/ExperienceStatements'

// const lrsClient = axios.create({
//     baseURL: `https://watershedlrs.com/api/organizations/8761/lrs/`,
//     withCredentials: false, // This is default
//     headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//         'X-Experience-API-Version': "1.0.3", 
//         'Content-Type': "application/json",
//     },
//     auth: { // Secure this and get in out of your code.
//         username: 'f5f895c9c8022d',
//         password: 'e8d06eb126925e'
//     },
// })



// export default {
//     lrsClient,
//     putStatements(statementType) {
//         return lrsClient.put('statements?statementId=' + statements.statementId, statementType)
//     },
//     getStatements() {
//         return lrsClient.get('statements')
//     },
// } 