require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;
const MongoClient = require("mongodb").MongoClient;

app.use(cors());
app.use(express.json());

/*const rocks = {
  'obsidian': {
    'rockType': 'Igneous (Extrusive)',
    'observableCharacteristics': 'glassy, non-vesicular',
    'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/ObsidianOregon.jpg/800px-ObsidianOregon.jpg',
    'fact': 'Some of the best-known occurrences of obsidian are at Mount Hekla in Iceland, the Eolie Islands off the coast of Italy, and Obsidian Cliff in Yellowstone National Park, U.S.'
  },
  'pumice': {
    'rockType': 'Igneous (Extrusive)',
    'observableCharacteristics': 'non-crystalline, glassy, vesicular (gas pockets)',
    'image': 'https://upload.wikimedia.org/wikipedia/commons/1/18/Pumice_%28upper_Holocene%3B_Johnston_Ridge%2C_north_of_Mt._St._Helens%2C_Washington_State%2C_USA%29_8.jpg',
    'fact': 'Pumice can be found all across North America including on the Caribbean Islands. In the United States, pumice is mined in Nevada, Oregon, Idaho, Arizona, California, New Mexico and Kansas.',
  },
  'rhyolite' : {
    'rockType': 'Igneous (Extrusive)',
    'observableCharacteristics': 'fine, non-vesicular, crystal size less than 1mm',
    'image':
    'fact': 'Rhyolite rocks can be found in many countries including New Zealand, Germany, Iceland, India, and China, and the deposits can be found near active or extinct volcanoes.'
  },
  'andesite': {
    'rockType': 'Igneous (Extrusive)',
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
  'gabbro': {
    'rockType': 'Igneous (Intrusive)',
    'observableCharacteristics': 'coarse, non-vesicular, crystalSize: 1mm to 10mm',
    'image':
    'fact': 'Gabbro has a variety of uses in the construction industry. It is used for everything from crushed stone base materials at construction sites to polished stone counter tops and floor tiles.'
  }
  'dunite': {
    'rockType': 'Igneous (Intrusive)',
    'observableCharacteristics': 'coarse, non-vesicular, crystalSize: 1mm to 10mm',
    'image':
    'fact': 'Dunite is an important commercial source of chromium, a silvery metal used to harden steel and manufacture stainless steel.'
  }
  'peridotite': {
    'rockType': 'Igneous (Intrusive)',
    'observableCharacteristics': 'coarse, non-vesicular, crystalSize: 1mm to 10mm',
    'image':
    'fact': 'Peridotite can potentially be used to isolate carbon dioxide. Scientists are investigating its use to store carbon dioxide responsible for global warming.'
  }
  'diabase': {
    'rockType': 'Igneous (Intrusive)',
    'observableCharacteristics': 'coarse, non-vesicular, crystalSize: 1mm to 10mm',
    'image':
    'fact': 'Diabase can be cut for use as headstones and memorials; the base of the Marine Corps War Memorial is made of black diabase "granite" (a commercial term, not actual granite).'
  }
  'basalt': {
    'rockType': 'Igneous (Extrusive)',
    'observableCharacteristics': 'fine, non-vesicular, crystal size less than 1mm',
    'image':
    'fact': 'Basalt is the most common rock type in the Earth's crust. It has also formed on Earth's moon, Mars and Venus.'
  },
  'scoria': {
    'rockType': 'Igneous (Extrusive)',
    'observableCharacteristics': 'non-crystalline, glassy, vesicular (gas pockets)',
    'image': '',
    'fact': 'Scoria is often used in landscaping and drainage works. It is also commonly used in gas barbecue grills.'
  },
  'basaltic glass': {
    'rockType': 'Igneous (Extrusive)',
    'observableCharacteristics': 'non-crystalline, glassy, non-vesicular',
    'image': 'https://cdn.shopify.com/s/files/1/0960/7650/products/tachyliteropyD25kpcl_large.jpg?v=1678518939',
    'fact': 'Basaltic glass is a black glassy form of basalt.'
  },
  'vesicular rhyolite' : {
    'rockType': 'Igneous (Extrusive)',
    'observableCharacteristics': 'crystal size less than 1mm, fine, vesicular (gas pockets)',
    'image':
    'fact': 'Rhyolite rocks can be found in many countries including New Zealand, Germany, Iceland, India, and China, and the deposits can be found near active or extinct volcanoes.'
  },
  'vesicular andesite': {
    'rockType': 'Igneous (Extrusive)',
    'observableCharacteristics': 'crystal size less than 1mm, fine, vesicular (gas pockets)',
    'image':
    'fact': 'The word andesite is derived from the Andes Mountains, located along the western edge of South America, where andesite rock is common.'
  },
  'vesicular basalt': {
    'rockType': 'Igneous (Extrusive)',
    'observableCharacteristics': 'crystal size less than 1mm, fine, vesicular (gas pockets)',
    'image':
    'fact': 'Basalt is the most common rock type in the Earth's crust. It has also formed on Earth's moon, Mars and Venus.'
  },
  'conglomerate': {
    'rockType': 'Sedimentary',
    'observableCharacteristics': 'Rounded fragments(pebbles, cobbles and or boulders embedded in sand, silt, and or clay',
    'image':
    'fact': ''
  },
  'breccia': {
    'rockType': 'Sedimentary',
    'observableCharacteristics': 'Angular fragments(pebbles, cobbles and or boulders embedded in sand, silt, and or clay',
    'image':
    'fact': ''
  'sandstone': {
    'rockType': 'Sedimentary',
    'observableCharacteristics': 'Grains of sand compacted and cemented together',
    'image':
    'fact': 'Sandstone is a very common mineral and can be found all over the world. Germany holds the most locations of sandstone deposits in the world.'
  },
  'siltstone': {
    'rockType': 'Sedimentary',
    'observableCharacteristics': 'Grains of silt compacted and cemented together',
    'image':
    'fact': ''
  'shale': {
    'rockType': 'Sedimentary',
    'observableCharacteristics': 'Grains of clay compacted and cemented together',
    'image':
    'fact': ''
  'rock salt': {
    'rockType': 'Sedimentary',
    'observableCharacteristics': 'Fine to coarse crystals',
    'image':
    'fact': ''
  'rock gypsum': {
    'rockType': 'Sedimentary',
    'observableCharacteristics': 'Fine to coarse crystals',
    'image':
    'fact': ''
  'dolostone': {
    'rockType': 'Sedimentary',
    'observableCharacteristics': 'Fine to coarse crystals',
    'image':
    'fact': ''
  'limestone': {
    'rockType': 'Sedimentary',
    'observableCharacteristics': 'Microscopic to very coarse crystals, cemented shell fragments',
    'image': 'https://www.sandatlas.org/wp-content/uploads/01019-Limestone-varieties.jpg'
    'fact': ''
  'bituminous coal': {
    'rockType': 'Sedimentary',
    'observableCharacteristics': 'Microscopic to very coarse crystals, compacted plant remains',
    'image':
    'fact': ''
  'slate': {
    'rockType': 'Metamorphic',
    'observableCharacteristics': 'Foliated, Mineral Alignment',
    'image':
    'fact': ''
  'phyllite': {
    'rockType': 'Metamorphic',
    'observableCharacteristics': 'Foliated, Mineral Alignment',
    'image':
    'fact': ''
  'schist': {
    'rockType': 'Metamorphic',
    'observableCharacteristics': 'Foliated, Mineral Alignment',
    'image':
    'fact': ''
  'gneiss': {
    'rockType': 'Metamorphic',
    'observableCharacteristics': 'Foliated, Banding',
    'image':
    'fact': ''
  'anthracite coal': {
    'rockType': 'Metamorphic',
    'observableCharacteristics': 'Foliated, Mineral Alignment',
    'image':
    'fact': ''
  'hornfels': {
    'rockType': 'Metamorphic',
    'observableCharacteristics': 'Fine crystals',
    'image':
    'fact': ''
  'quartzite': {
    'rockType': 'Metamorphic',
    'observableCharacteristics': 'Fine to coarse crystals',
    'image':
    'fact': ''
  'marble': {
    'rockType': 'Metamorphic',
    'observableCharacteristics': 'Fine to coarse crystals',
    'image':
    'fact': ''
  'metaconglomerate': {
    'rockType': 'Metamorphic',
    'observableCharacteristics': 'Coarse crystals',
    'image':
    'fact': ''
}*/

MongoClient.connect(connectionString)
  .then((client) => {
    console.log("Connected to Database");
    const db = client.db("Rocks-api");
    const infoCollection = db.collection("Rocks Info");

    app.get("/", (req, res) => {
      res.sendFile(__dirname + "/index.html");
    });

    app.get("/api/:rockName", (req, res) => {
      const rockName = req.params.rockName.toLowerCase();
      infoCollection
        .find({ name: rockName })
        .toArray()
        .then((results) => {
          console.log(results);
          res.json(results[0]);
        })
        .catch((error) => console.error(error));
    });
  })
  .catch((error) => console.error(error));

app.listen(process.env.PORT || PORT, () => {
  console.log("Server is running");
});
