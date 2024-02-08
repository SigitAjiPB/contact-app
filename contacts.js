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


const loadContact =() => {
  const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8')
  const contacts = JSON.parse(fileBuffer)

  return contacts;
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

  const contacts = loadContact()


  //ceck duplicates 'nama'
  const duplicates = contacts.find((contact) => contact.nama === nama)
  if (duplicates) {
    console.log('contact sudah terdaftar gunakan nama lain.');
    return false;
  }

  contacts.push(contact)
  fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))

}


const listContact = ()=> {
  const contacts = loadContact();
  console.log(`Daftar Contacts:`)
  contacts.forEach((contact, i) => {
    console.log(`${i+1}. ${contact.nama} - ${contact.noTelp}`)
  })
}

const detailContact = (nama)=> {
  const contacts = loadContact()

  const contact = contacts.find((contact) => {
    contact.nama.toLowerCase() === nama.toLowerCase();
  })

  if (!contact) {
    console.log(`${nama} tidak di temukan.`)
    return false
  }

  console.log(contact.nama)
  console.log(contact.noTelp)

  if (contact.email) {
    console.log(contact.email)
  }



}

module.exports = {
  simpanContact,
  listContact,
  detailContact,
}