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
  fs.writeFileSync(dataPath, '[]', 'utf-8');
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

//function list Contact feature
const listContact = ()=> {
  const contacts = loadContact();
  console.log(`Daftar Contacts:`)
  contacts.forEach((contact, i) => {
    console.log(`${i+1}. ${contact.nama} - ${contact.noTelp}`)
  })
}

//function see contact detail feature
const detailContact = (nama)=> {
  const contacts = loadContact()

  const contact = contacts.find((contact) => {
    contact.nama.toLowerCase() === nama.toLowerCase() ;
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

// function to delete contact feature
const deleteContact = (nama) => {
  const contacts = loadContact()
  const newContact = contacts.filter((contact)=> {
    contact.nama.toLowerCase() !== nama.toLowerCase()
  })

  if (contacts.length === newContact.length) {
    console.log(`${nama} tidak bzzz di temukan.`)
    return false
  }
  fs.writeFileSync('data/contacts.json', JSON.stringify(newContact))
}

module.exports = {
  simpanContact,
  listContact,
  detailContact,
  deleteContact
}