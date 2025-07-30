const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// ------------------- Datos en memoria --------------------

let platillos = [
    {
        id: "1",
        platilloId: 1,
        nombre: "Quesadillas de flor",
        precio: 40,
        estacionDelPlatillo: "Primavera",
        imagen: "http://recetario.lavillita.com.mx/assets/images/recetas/Quesadillas-flor-calabaza-Oaxaca.jpg"
    },
    {
        id: "2",
        platilloId: 2,
        nombre: "Mole poblano",
        precio: 90,
        estacionDelPlatillo: "Otoño",
        imagen: "https://www.seriouseats.com/thmb/qxfXHOw3gKw_rKMM87aVxTvSCws=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2012__10__20121024-227412-mole-poblano-8aa343f2cb384508834ed888a4b65df2.jpg"
    },
    {
        id: "3",
        platilloId: 3,
        nombre: "Tamales oaxaqueños",
        precio: 35,
        estacionDelPlatillo: "Invierno",
        imagen: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/68D64DAE-9605-42AC-BDCF-328A509EC776/Derivates/7AC0E9FD-F0DA-410B-9D78-19D3C3BEA1F3.jpg"
    }
];

let ordenes = [];
let platilloIdCounter = 4;
let ordenIdCounter = 1;

// ------------------- Endpoints de Platillos --------------------

app.get('/platillos', (req, res) => {
    const { limit, page } = req.query;
    let result = [...platillos];

    const lim = parseInt(limit) || result.length;
    const pag = parseInt(page) || 1;
    const start = (pag - 1) * lim;
    const end = start + lim;

    res.json(result.slice(start, end));
});

app.get('/platillos/:id', (req, res) => {
    const id = req.params.id;
    const platillo = platillos.find(p => p.id === id);

    if (!platillo) {
        return res.status(404).json({ error: 'Platillo no encontrado' });
    }

    res.json(platillo);
});

app.post('/platillos', (req, res) => {
    const { nombre, precio, estacionDelPlatillo, imagen } = req.body;

    if (!nombre || !precio || !estacionDelPlatillo || !imagen) {
        return res.status(400).json({ error: 'Faltan campos requeridos' });
    }

    const nuevoPlatillo = {
        id: String(platilloIdCounter++),
        platilloId: platilloIdCounter,
        nombre,
        precio,
        estacionDelPlatillo,
        imagen
    };

    platillos.push(nuevoPlatillo);
    res.status(201).json(nuevoPlatillo);
});

app.put('/platillos/:id', (req, res) => {
    console.log("Modificando...");
    const id = req.params.id;
    const platillo = platillos.find(p => p.id === id);

    if (!platillo) {
        return res.status(404).json({ error: 'Platillo no encontrado' });
    }

    const { nombre, precio, estacionDelPlatillo, imagen } = req.body;

    if (nombre) platillo.nombre = nombre;
    if (precio) platillo.precio = precio;
    if (estacionDelPlatillo) platillo.estacionDelPlatillo = estacionDelPlatillo;
    if (imagen) platillo.imagen = imagen;

    res.json(platillo);
});

app.delete('/platillos/:id', (req, res) => {
    const id = req.params.id;
    const index = platillos.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ error: 'Platillo no encontrado' });
    }

    platillos.splice(index, 1);
    res.status(204).send();
});

app.post('/reset', (req, res) => {
    platillos = [
        {
            id: "1",
            platilloId: 1,
            nombre: "Quesadillas de flor",
            precio: 40,
            estacionDelPlatillo: "Primavera",
            imagen: "http://recetario.lavillita.com.mx/assets/images/recetas/Quesadillas-flor-calabaza-Oaxaca.jpg"
        },
        {
            id: "2",
            platilloId: 2,
            nombre: "Mole poblano",
            precio: 90,
            estacionDelPlatillo: "Otoño",
            imagen: "https://www.seriouseats.com/thmb/qxfXHOw3gKw_rKMM87aVxTvSCws=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2012__10__20121024-227412-mole-poblano-8aa343f2cb384508834ed888a4b65df2.jpg"
        },
        {
            id: "3",
            platilloId: 3,
            nombre: "Tamales oaxaqueños",
            precio: 35,
            estacionDelPlatillo: "Invierno",
            imagen: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/68D64DAE-9605-42AC-BDCF-328A509EC776/Derivates/7AC0E9FD-F0DA-410B-9D78-19D3C3BEA1F3.jpg"
        }
    ];

    ordenes = [];

    res.status(200).send();
});

// ------------------- Endpoints de Ordenes --------------------

app.get('/ordenes', (req, res) => {
    const { tipo, estado } = req.query;
    let result = [...ordenes];

    if (tipo) {
        result = result.filter(o => o.tipo === tipo);
    }

    if (estado) {
        result = result.filter(o => o.estado === estado);
    }

    res.json(result);
});

app.get('/ordenes/:id', (req, res) => {
    const id = req.params.id;
    const orden = ordenes.find(o => o.id === id);

    if (!orden) {
        return res.status(404).json({ error: 'Orden no encontrada' });
    }

    res.json(orden);
});

app.post('/ordenes', (req, res) => {
    const { platillos: listaPlatillos, tipo, estado } = req.body;

    if (!Array.isArray(listaPlatillos) || !tipo || !estado) {
        return res.status(400).json({ error: 'Faltan datos o lista de platillos inválida' });
    }

    const nuevaOrden = {
        id: String(ordenIdCounter++),
        platillos: listaPlatillos,
        tipo,   // presencial o en línea
        estado  // entregado, pendiente, cancelado, en proceso, en envío, recibido
    };

    ordenes.push(nuevaOrden);
    res.status(201).json(nuevaOrden);
});

app.delete('/ordenes/:id', (req, res) => {
    const id = req.params.id;
    const index = ordenes.findIndex(o => o.id === id);

    if (index === -1) {
        return res.status(404).json({ error: 'Orden no encontrada' });
    }

    ordenes.splice(index, 1);
    res.status(204).send();
});

// ------------------- Iniciar servidor --------------------

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
