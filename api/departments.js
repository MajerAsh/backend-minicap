import express from "express";
const router = express.Router();

import {
  getDepartments,
  getDepartmentById,
  createDepartment,
  updateDepartmentById,
  deleteDepartmentById,
} from "#db/queries/departments";

import { getFacultyByDepartmentId } from "#db/queries/faculty";

import requireBody from "#middleware/requireBody";
import requireUser from "#middleware/requireUser";

router.route("/").get(async (req, res) => {
  const departments = await getDepartments();
  res.send(departments);
});

router.route("/:id").get(async (req, res) => {
  const { id } = req.params;
  const department = await getDepartmentById(id);

  if (!department) {
    return res.status(404).json({ error: "Department not found" });
  }

  const faculty = await getFacultyByDepartmentId(id);
  res.send({ ...department, faculty });
});

router
  .route("/")
  .post(
    requireUser,
    requireBody(["name", "description", "images", "contactInfo"]),
    async (req, res) => {
      const { name, description, images, contactInfo } = req.body;

      try {
        const department = await createDepartment(
          name,
          description,
          images,
          contactInfo
        );
        res.status(201).json(department);
      } catch (error) {
        res.status(400).json({ error: "Failed to create department" });
      }
    }
  );

router.put("/:id", requireUser, async (req, res) => {
  const { id } = req.params;
  const { name, description, images } = req.body;

  try {
    const department = await updateDepartmentById(
      id,
      name,
      description,
      images
    );
    res.json(department);
  } catch (error) {
    res.status(400).json({ error: "Failed to update department" });
  }
});

router.delete("/:id", requireUser, async (req, res) => {
  const { id } = req.params;

  try {
    await deleteDepartmentById(id);
    res.json({ success: true });
  } catch (error) {
    res.status(400).json({ error: "Failed to delete department" });
  }
});

export default router;
