import db from "#db/client";

import { createDepartment } from "#db/queries/departments";
import { createFaculty } from "#db/queries/faculty";
import departments from "#db/departments";
import faculty from "#db/faculty";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  const departmentIds = [];

  for (const dept of departments) {
    const { name, description, images, contactInfo } = dept;
    const created = await createDepartment(
      name,
      description,
      images,
      contactInfo
    );
    departmentIds.push(created.id);
  }

  for (const prof of faculty) {
    const { name, bio, profileImage, contactInfo } = prof;

    const randomDeptId =
      departmentIds[Math.floor(Math.random() * departmentIds.length)];
    await createFaculty(name, bio, profileImage, contactInfo, randomDeptId);
  }
}
