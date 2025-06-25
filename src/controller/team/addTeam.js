const Team = require('../../models/teamSchema');
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage });

const addTeam = async (req, res) => {
    try {
        const { name, link, description } = req.body;
        const image = req.file;
        console.log(req.body);

        if (!name || !link || !description || !image) {
            return res.status(400).json({ message: 'All fields are mandatory' });
        }

        const base64Image = `data:${image.mimetype};base64,${image.buffer.toString("base64")}`;

        const newMember = new Team({
            name,
            link,
            description,
            image: base64Image
        });

        await newMember.save();
        res.status(201).json({ message: 'Team Member added successfully', data: newMember });

    } catch (error) {
        console.error("Error adding team member:", error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { addTeam, upload };
