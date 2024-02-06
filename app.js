
const {tulisPertanyaan, simpanContact} = require('./contacts');


const main = async () => {
  const nama = await tulisPertanyaan('Masukan nama anda: ')
  const email = await tulisPertanyaan('Mauskan Email anda: ')
  const noTelp = await tulisPertanyaan('Mauskan no HP anda: ')

  simpanContact(nama, email, noTelp)
}

main()


















// rl.question('Masukan nama anda: ', (nama) => {
//   rl.question('Masukan No Telpon: ', (noTelp) => {
//     const contact = {
//       nama, noTelp
//     }
//     const file = fs.readFileSync('data/contacts.json', 'utf8');
//     const contacts = JSON.parse(file);
  
//     contacts.push(contact)
    
//     fs.writeFileSync('data/contacts.JSON', JSON.stringify(contacts));
//     console.log("Data Sudah terinput")

//     rl.close();

//   });
// });