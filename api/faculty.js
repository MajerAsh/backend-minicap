import express from "express";
const router = express.Router();

import {
  getFaculty,
  getFacultyById,
  createFaculty,
  getFacultyByDepartmentId,
  updateFacultyById,
  deleteFacultyById,
} from "#db/queries/faculty";

import requireUser from "#middleware/requireUser";

router.route("/").get(async (req, res) => {
  const faculty = await getFaculty();
  res.send(faculty);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const professor = await getFacultyById(id);

  if (!professor) {
    return res.status(404).json({ error: "Professor not found" });
  }

  res.json(professor);
});

router.get("/department/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const departmentFaculty = await getFacultyByDepartmentId(id);
    res.json(departmentFaculty);
  } catch (err) {
    res.status(500).json({ error: "Could not fetch faculty for department" });
  }
});

router.post("/", requireUser, async (req, res) => {
  // Change 'department_id' to 'departmentId' to match the frontend
  const { name, bio, profileImage, contactInfo, departmentId } = req.body;

  try {
    // Pass the correct variable to the create function
    const newFaculty = await createFaculty(
      name,
      bio,
      profileImage,
      contactInfo,
      departmentId
    );
    res.status(201).json(newFaculty);
  } catch (error) {
    res.status(400).json({ error: "Failed to create faculty member" });
  }
});

router.put("/:id", requireUser, async (req, res) => {
  const { id } = req.params;

  try {
    // Pass the id and the entire request body as a single object.
    const faculty = await updateFacultyById(id, req.body);
    res.json(faculty);
  } catch (error) {
    res.status(400).json({ error: "Failed to update faculty" });
  }
});

router.delete("/:id", requireUser, async (req, res) => {
  const { id } = req.params;

  try {
    await deleteFacultyById(id);
    res.json({ success: true });
  } catch (error) {
    res.status(400).json({ error: "Failed to delete faculty" });
  }
});

export default router;
