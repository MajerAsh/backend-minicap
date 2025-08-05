import db from "#db/client";

export async function createDepartment(name, description, images, contactInfo) {
  const sql = `
  INSERT INTO departments
    (name, description, images, contactInfo)
  VALUES
    ($1, $2, $3, $4)
  RETURNING *
  `;
  const {
    rows: [department],
  } = await db.query(sql, [name, description, images, contactInfo]);
  return department;
}

export async function getDepartments() {
  // --- CORRECTED SQL QUERY ---
  // We explicitly select columns and alias them to the expected camelCase format.
  const sql = `
  SELECT 
    id,
    name,
    description,
    images,
    contactInfo AS "contactInfo"
  FROM departments
  `;
  const { rows: departments } = await db.query(sql);
  return departments;
}

export async function getDepartmentById(id) {
  // --- CORRECTED SQL QUERY ---
  // We do the same aliasing here for consistency.
  const sql = `
  SELECT 
    id,
    name,
    description,
    images,
    contactInfo AS "contactInfo"
  FROM departments
  WHERE id = $1
  `;
  const {
    rows: [department],
  } = await db.query(sql, [id]);
  return department;
}

export async function deleteDepartmentById(id) {
  const sql = `
  DELETE FROM departments
  WHERE id = $1
  `;
  await db.query(sql, [id]);
}

export async function updateDepartmentById(id, name, description, images) {
  const sql = `
  UPDATE departments
  SET
    name = $2,
    description = $3,
    images = $4
  WHERE id = $1
  RETURNING *
  `;
  const {
    rows: [department],
  } = await db.query(sql, [id, name, description, images]);
  return department;
}