import db from "#db/client";

export async function createFaculty(
  name,
  bio,
  profileImage,
  contactInfo,
  department_id
) {
  const sql = `
  INSERT INTO faculty
    (name, bio, profileImage, contactInfo, department_id)
  VALUES
    ($1, $2, $3, $4, $5)
  RETURNING *
  `;
  const {
    rows: [faculty],
  } = await db.query(sql, [
    name,
    bio,
    profileImage,
    contactInfo,
    department_id,
  ]);
  return faculty;
}

export async function getFaculty() {
  const sql = `
  SELECT *
  FROM faculty
  ORDER BY id ASC
  `;
  const { rows: faculty } = await db.query(sql);
  return faculty;
}

export async function getFacultyByDepartmentId(department_id) {
  const sql = `
  SELECT f.*, d.name AS department_name
  FROM faculty f
  LEFT JOIN departments d ON f.department_id = d.id
  WHERE f.id = $1
  `;
  const {
    rows: [faculty],
  } = await db.query(sql, [department_id]);
  return faculty;
}

export async function getFacultyById(id) {
  const sql = `
  SELECT *
  FROM faculty
  WHERE id = $1
  `;
  const {
    rows: [faculty],
  } = await db.query(sql, [id]);
  return faculty;
}

export async function deleteFacultyById(id) {
  const sql = `
  DELETE FROM faculty
  WHERE id = $1
  `;
  await db.query(sql, [id]);
}

export async function updateFacultyById(
  id,
  name,
  bio,
  profileImage,
  contactInfo,
  department_id
) {
  const sql = `
  UPDATE faculty
  SET
    name = $2,
    bio = $3,
    profileImage = $4,
    contactInfo = $5,
    department_id = $6
  WHERE id = $1
  RETURNING *
  `;
  const {
    rows: [faculty],
  } = await db.query(sql, [
    id,
    name,
    bio,
    profileImage,
    contactInfo,
    department_id,
  ]);
  return faculty;
}
