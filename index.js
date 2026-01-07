import express from 'express';
import { readFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Load data
let awkwardData = [];

async function loadData() {
    try {
        const data = await readFile(join(__dirname, 'data.json'), 'utf-8');
        awkwardData = JSON.parse(data);
        console.log(`Loaded ${awkwardData.length} awkward responses.`);
    } catch (error) {
        console.error('Error loading data:', error);
        process.exit(1);
    }
}

// Middleware
app.use(express.json());
app.use(express.static(join(__dirname, 'public')));

// Routes

// GET /
app.get('/', (req, res) => {
    res.json({
        message: "Welcome to Awkward As A Service (AAAS).",
        description: "The API nobody asked for, but everyone secretly needs.",
        endpoints: {
            "GET /": "This help message",
            "GET /random": "Get a random awkward response",
            "GET /random/:category": "Get a random awkward response from a specific category"
        },
        note: "Please don't make eye contact with this API."
    });
});

// GET /random
app.get('/random', (req, res) => {
    if (awkwardData.length === 0) {
        return res.status(503).json({ error: "Data not loaded yet. Awkward..." });
    }
    const randomIndex = Math.floor(Math.random() * awkwardData.length);
    res.json(awkwardData[randomIndex]);
});

// GET /random/:category
app.get('/random/:category', (req, res) => {
    if (awkwardData.length === 0) {
        return res.status(503).json({ error: "Data not loaded yet. Awkward..." });
    }

    const category = req.params.category.toLowerCase();
    const categoryItems = awkwardData.filter(item => item.category === category);

    if (categoryItems.length === 0) {
        return res.status(404).json({
            error: `Category '${category}' not found. That's embarrassing.`,
            available_categories: [...new Set(awkwardData.map(item => item.category))]
        });
    }

    const randomIndex = Math.floor(Math.random() * categoryItems.length);
    res.json(categoryItems[randomIndex]);
});

// Start server
app.listen(PORT, async () => {
    await loadData();
    console.log(`Server is running awkwardly on http://localhost:${PORT}`);
});
