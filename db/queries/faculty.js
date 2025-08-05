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
  SELECT 
    id, 
    name, 
    bio, 
    profileimage AS "profileImage", 
    contactinfo AS "contactInfo", 
    department_id AS "departmentId"
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
  WHERE f.department_id = $1
  `;
  const {
    rows: [faculty],
  } = await db.query(sql, [department_id]);
  return faculty;
}

export async function getFacultyById(id) {
  const sql = `
  SELECT 
    id, 
    name, 
    bio, 
    profileimage AS "profileImage", 
    contactinfo AS "contactInfo", 
    department_id AS "departmentId"
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


// --- THIS IS THE CORRECTED FUNCTION ---
export async function updateFacultyById(id, data) {
  // Fetch the existing record from the database.
  const {
    rows: [existing],
  } = await db.query("SELECT * FROM faculty WHERE id = $1", [id]);

  if (!existing) {
    throw new Error("Faculty not found");
  }

  // Destructure all possible properties from the incoming request data.
  const { name, bio, profileImage, contactInfo, departmentId } = data;

  // For each property, use the new value if it was provided, otherwise fall back to the existing value.
  const updatedName = name ?? existing.name;
  const updatedBio = bio ?? existing.bio;
  const updatedProfileImage = profileImage ?? existing.profileimage;
  const updatedContactInfo = contactInfo ?? existing.contactinfo;

  // --- THIS IS THE CORRECTED LOGIC ---
  // We check if the 'departmentId' key *exists* in the request data.
  // If it does, we use its value (which can be null).
  // If it does not exist, we use the existing value from the database.
  const updatedDepartmentId = 'departmentId' in data ? departmentId : existing.department_id;

  const sql = `
    UPDATE faculty
    SET name = $1,
        bio = $2,
        profileimage = $3,
        contactinfo = $4,
        department_id = $5
    WHERE id = $6
    RETURNING *
  `;

  const values = [
    updatedName,
    updatedBio,
    updatedProfileImage,
    updatedContactInfo,
    updatedDepartmentId,
    id,
  ];

  const {
    rows: [faculty],
  } = await db.query(sql, values);

  return faculty;
}