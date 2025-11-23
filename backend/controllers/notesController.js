//fetch all notes data

export async function getAllNotes(req, res) {
    res.status(200).send("Note fetch successfully!");
};

export async function addNotes(req, res) {
    res.status(201).json({message: "Note created successfully!"});
};

export async function updateNotes(req, res) {
    res.status(200).json({message: "Note updated successfully!"});
};

export async function deleteNotes(req, res) {
    res.status(200).json({message: "Note deleted successfully!"});
};