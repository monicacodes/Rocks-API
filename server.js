const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const rocks = {
  'obsidian': {
    'rockType': 'Igneous',
    'environmentOfFormation': 'Extrusive',
    'crystalSize': 'non-crystalline',
    'texture': 'glassy, non-vesicular',
    'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/ObsidianOregon.jpg/800px-ObsidianOregon.jpg',
    'found': 'Some of the best-known occurrences of obsidian are at Mount Hekla in Iceland, the Eolie Islands off the coast of Italy, and Obsidian Cliff in Yellowstone National Park, U.S.'
  },
  'pumice': {
    'rockType': 'Igneous',
    'environmentOfFormation': 'Extrusive',
    'crystalSize': 'non-crystalline',
    'texture': 'glassy, non-vesicular',
    'image': 'https://upload.wikimedia.org/wikipedia/commons/1/18/Pumice_%28upper_Holocene%3B_Johnston_Ridge%2C_north_of_Mt._St._Helens%2C_Washington_State%2C_USA%29_8.jpg',
    'found': 'Pumice can be found all across North America including on the Caribbean Islands. In the United States, pumice is mined in Nevada, Oregon, Idaho, Arizona, California, New Mexico and Kansas.',
  },
  'rhyolite' : {
    'rockType': 'Igneous',
    'environmentOfFormation': 'Extrusive',
    'crystalSize': 'less than 1mm',
    'texture': 'fine, non-vesicular',
    'found': 'Rhyolite rocks can be found in many countries including New Zealand, Germany, Iceland, India, and China, and the deposits can be found near active or extinct volcanoes.'
  },
  'andesite': {
    'rockType': 'Igneous',
    'environmentOfFormation': 'Extrusive',
    'crystalSize': 'less than 1mm',
    'texture': 'fine, non-vesicular',
    'found': 'The word andesite is derived from the Andes Mountains, located along the western edge of South America, where andesite rock is common.'
  },
  'granite': {
    'rockType': 'Igneous',
    'environmentOfFormation': 'Intrusive',
    'crystalSize': '1mm to 10mm',
    'texture': 'coarse, non-vesicular',
    'found': 'Granite is a light-colored plutonic rock found throughout the continental crust, most commonly in mountainous areas.'
  },
  'diorite': {
    'rockType': 'Igneous',
    'environmentOfFormation': 'Intrusive',
    'crystalSize': '1mm to 10mm',
    'texture': 'coarse, non-vesicular',
    'found': 'Diorite results from the partial melting of a mafic rock above a subduction zone. It is found in volcanic arcs, and in mountain building, such as in the Andes Mountains.'
  },
  'pegmatite': {
    'rockType': 'Igneous',
    'environmentOfFormation': 'Intrusive',
    'crystalSize': '10mm or larger',
    'texture': 'coarse, non-vesicular',
    'interestingFact': 'Pegmatites are important because they often contain rare earth minerals and gemstones, such as aquamarine, tourmaline, topaz, fluorite, apatite and corundum, often along with tin, rare earth, and tungsten minerals, among others.'
  }
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/api/:rockName', (req, res) => {
  const rockName = req.params.rockName.toLowerCase()
  if (rocks[rockName]){
    res.json(rocks[rockName])
  } else{
    res.json(rocks['unknown'])
  }
})

app.listen(process.env.PORT || PORT, () => {
  console.log('Server is running')
})
