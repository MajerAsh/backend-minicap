import db from "#db/client";

export async function createDepartments(name,description,contact_info) {
  const sql = `INSERT INTO departments (name, description, contactInfo) VALUES ($1, $2, $3) RETURNING *`;
  const { rows: [department] } = await db.query(sql,[name,description,contact_info]);
  return department;
}

export async function getDepartments() {
  const sql = `
  SELECT *
  FROM departments
  `;
  const { rows: departments } = await db.query(sql);
  return departments;
}

export async function getDepartmentsById(id) {
  const sql = `SELECT d.*,json_agg(json_build_object('id', f.id,'name', f.name,
        'description', f.description,'contactInfo', f.contactInfo)) AS faculty
       FROM departments d
       JOIN faculty f ON d.id = f.department_id
       WHERE d.id = $1
       GROUP BY d.id`;
  const { rows: [department] } = await db.query(sql,[id]);
  return department;
}

export async function updateDepartmentsById(id, name, description, contactInfo) {
  const sql = `UPDATE departments SET name = $1, description = $2, contactInfo = $3 WHERE id = $4 RETURNING *`;
  const { rows: [department] } = await db.query(sql,[name, description, contactInfo, id]);
  return department;
}

export async function deleteDepartment(id) {
  const sql = `DELETE FROM departments WHERE id = $1 RETURNING *`;
  const { rows: [department] } = await db.query(sql,[id]);
  return department;
}

