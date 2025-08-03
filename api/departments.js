import express from "express";
const router = express.Router();


import {createDepartments, getDepartments, getDepartmentsById, updateDepartmentsById,deleteDepartment,} from "#db/queries/departments.js";

router.get("/", async (req, res) => {
  const departments = await getDepartments();
  res.send(departments);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const department = await getDepartmentsById(id);

  if (!department) {
    return res.status(404).send("Department not found");
  }

  res.send(department);
});

router.post("/", async (req, res) => {
  const { name, description, contactInfo } = req.body;

  if (!name || !description || !contactInfo) {
    return res
      .status(400)
      .send("Request body requires: name, description, contactInfo");
  }

  const department = await createDepartments(name, description, contactInfo);
  res.status(201).send(department);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, description, contactInfo } = req.body;

  if (!name || !description || !contactInfo) {
    return res
      .status(400)
      .send("Request body requires: name, description, contactInfo");
  }

  const department = await updateDepartmentsById(
    id,
    name,
    description,
    contactInfo
  );

  if (!department) {
    return res.status(404).send("Department not found");
  }

  res.send(department);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const department = await deleteDepartment(id);

  if (!department) {
    return res.status(404).send("Department not found");
  }

  res.sendStatus(204);
});

export default router;