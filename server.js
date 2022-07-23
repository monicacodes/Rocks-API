const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000
const MongoClient = require('mongodb').MongoClient
const connectionString = ('mongodb+srv://monicacodes:L5TckR94Q6FBsX9B@cluster0.sdpoxmt.mongodb.net/?retryWrites=true&w=majority')

app.use(cors())
app.use(express.json())

/*const rocks = {
  'obsidian': {
    'rockType': 'Igneous',
    'observableCharacteristics': 'glassy, non-vesicular',
    'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/ObsidianOregon.jpg/800px-ObsidianOregon.jpg',
    'fact': 'Some of the best-known occurrences of obsidian are at Mount Hekla in Iceland, the Eolie Islands off the coast of Italy, and Obsidian Cliff in Yellowstone National Park, U.S.'
  },
  'pumice': {
    'rockType': 'Igneous',
    'observableCharacteristics': 'glassy, non-vesicular',
    'image': 'https://upload.wikimedia.org/wikipedia/commons/1/18/Pumice_%28upper_Holocene%3B_Johnston_Ridge%2C_north_of_Mt._St._Helens%2C_Washington_State%2C_USA%29_8.jpg',
    'fact': 'Pumice can be found all across North America including on the Caribbean Islands. In the United States, pumice is mined in Nevada, Oregon, Idaho, Arizona, California, New Mexico and Kansas.',
  },
  'rhyolite' : {
    'rockType': 'Igneous',
    'observableCharacteristics': 'fine, non-vesicular, crystal size less than 1mm',
    'image':
    'fact': 'Rhyolite rocks can be found in many countries including New Zealand, Germany, Iceland, India, and China, and the deposits can be found near active or extinct volcanoes.'
  },
  'andesite': {
    'rockType': 'Igneous',
    'observableCharacteristics': 'fine, non-vesicular, crystal size less than 1mm',
    'image':
    'fact': 'The word andesite is derived from the Andes Mountains, located along the western edge of South America, where andesite rock is common.'
  },
  'granite': {
    'rockType': 'Igneous (Intrusive)',
    'observableCharacteristics': 'coarse, non-vesicular, crystal size: 1mm to 10mm',
    'image':
    'fact': 'Granite is a light-colored plutonic rock found throughout the continental crust, most commonly in mountainous areas.'
  },
  'diorite': {
    'rockType': 'Igneous (Intrusive)',
    'observableCharacteristics': 'coarse, non-vesicular, crystal size: 1mm to 10mm',
    'image':
    'fact': 'Diorite results from the partial melting of a mafic rock above a subduction zone. It is found in volcanic arcs, and in mountain building, such as in the Andes Mountains.'
  },
  'pegmatite': {
    'rockType': 'Igneous (Intrusive)',
    'observableCharacteristics': 'coarse, non-vesicular, crystalSize: 10mm or larger',
    'image':
    'fact': 'Pegmatites are important because they often contain rare earth minerals and gemstones, such as aquamarine, tourmaline, topaz, fluorite, apatite and corundum, often along with tin, rare earth, and tungsten minerals, among others.'
  }
}*/


MongoClient.connect(connectionString)
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('Rocks-api')
    const infoCollection = db.collection('Rocks Info')
  
  
  app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
  })


  app.get('/api/:rockName', (req, res) => {
  const rockName = req.params.rockName.toLowerCase()
    infoCollection.find({name: rockName}).toArray()
    .then(results => {
      console.log(results)
      res.json(results[0])
    })
    .catch(error => console.error(error))
  })

})
.catch(error => console.error(error))


app.listen(process.env.PORT || PORT, () => {
  console.log('Server is running')
})
