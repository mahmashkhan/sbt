const Team = require('../../models/teamSchema');
const multer = require('multer');

const storage = multer.memoryStorage();
const updatedUpload = multer({ storage });

const editTeam = async (req, res) => {
    const { name, link, description } = req.body;
    console.log(req.body);
    console.log(req.file);
    const image = req.file;
    const { id } = req.params;

    try {
        if (!name || !link || !description || !image) {
            return res.status(400).json({ error: 'All fields are required to update member' });
        }

        const base64Image = `data:${image.mimetype};base64,${image.buffer.toString("base64")}`;

        const updatedMember = await Team.findByIdAndUpdate(
            id,
            {
                name,
                link,
                description,
                image: base64Image
            },
            { new: true }
        );

        if (!updatedMember) {
            return res.status(404).json({ error: 'Unable to update member. Member not found.' });
        }

        res.status(200).json({ message: 'Team member updated successfully', data: updatedMember });
    } catch (error) {
        console.error('Update error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { editTeam, updatedUpload };
