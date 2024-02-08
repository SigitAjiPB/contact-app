
// mengambil arguments dari command line
const yargs = require('yargs');
const contacts = require('./contacts')


yargs.command({
  command: 'add',
  describe: 'Menambahkan contact baru',
  builder: {
    nama: {
      describe: "nama lengkap",
      demandOption: true,
      typeof: 'string',
    },
    email: {
      describe: 'email',
      demandOption: false,
      typeof: 'string',
    },
    noTelp: {
      describe: 'no telp',
      demandOption: true,
      typeof: 'string',
    },
  },

  handler(argv) {
    contacts.simpanContact(argv.nama, argv.email, argv.noTelp)
  },
})

yargs.parse();
































// const {tulisPertanyaan, simpanContact} = require('./contacts');


// const main = async () => {
//   const nama = await tulisPertanyaan('Masukan nama anda: ')
//   const email = await tulisPertanyaan('Mauskan Email anda: ')
//   const noTelp = await tulisPertanyaan('Mauskan no HP anda: ')

//   simpanContact(nama, email, noTelp)
// }

// main()







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