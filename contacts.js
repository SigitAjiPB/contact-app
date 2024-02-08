const fs = require('fs');

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// membuat folder data
const dirPath = './data';
if(!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}


// membuat file contacts.json jika belum ada
const dataPath = './data/contacts.json';
if(!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, '[]', 'utf8');
}


// const tulisPertanyaan = (pertanyaan) => {
//   return new Promise((resolve, reject) => {
//     rl.question(pertanyaan, (nama) => {
//       resolve(nama);
//     })

//   })
// }

const simpanContact = (nama, email, noTelp) => {
  const contact = {nama, email, noTelp}
  const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8')
  const contacts = JSON.parse(fileBuffer)

  //ceck duplicates 'nama'
  const duplicates = contacts.find((contact) => contact.nama === nama)
  if (duplicates) {
    console.log('contact sudah terdaftar gunakan nama lain.');
    return false;
  }

  contacts.push(contact)
  fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))

}

module.exports = {
  simpanContact,
}