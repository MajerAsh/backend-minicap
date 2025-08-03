import db from "#db/client";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {

    const { rows: departments } = await db.query(
    `INSERT INTO departments (name, description, contactInfo)
     VALUES
       ('Software Engineering', 'Covers software design, development, and testing.', 'se@university.edu'),
       ('Web Development', 'Covers frontend and backend web technologies.', 'web@university.edu'),
       ('AI & Machine Learning', 'Focuses on artificial intelligence and ML techniques.', 'ai@university.edu'),
       ('Cybersecurity', 'Covers network security, cryptography, and risk management.', 'cyber@university.edu'),
       ('Data Analytics', 'Focuses on data analysis, visualization, and big data.', 'data@university.edu')
     RETURNING *;`
  );

    const getId = (deptName) => departments.find(d => d.name === deptName).id;

    await db.query(
    `INSERT INTO faculty (name, description, contactInfo, department_id)
     VALUES
       -- Software Engineering
       ('Alice Johnson', 'Expert in Agile methodologies', 'alice.se@university.edu', $1),
       ('Bob Smith', 'Specializes in software architecture', 'bob.se@university.edu', $1),
       ('Charlie Brown', 'Focuses on testing & QA', 'charlie.se@university.edu', $1),

       -- Web Development
       ('Diana Prince', 'Frontend specialist', 'diana.web@university.edu', $2),
       ('Ethan Hunt', 'Backend developer', 'ethan.web@university.edu', $2),
       ('Fiona Clark', 'Full-stack engineer', 'fiona.web@university.edu', $2),

       -- AI & Machine Learning
       ('Grace Lee', 'Deep learning researcher', 'grace.ai@university.edu', $3),
       ('Henry Kim', 'Natural language processing', 'henry.ai@university.edu', $3),
       ('Ivy Chen', 'Reinforcement learning specialist', 'ivy.ai@university.edu', $3),
       ('Jack Miller', 'Computer vision', 'jack.ai@university.edu', $3),

       -- Cybersecurity
       ('Karen Davis', 'Network security expert', 'karen.cyber@university.edu', $4),
       ('Leo Turner', 'Cryptography researcher', 'leo.cyber@university.edu', $4),
       ('Mona Patel', 'Incident response specialist', 'mona.cyber@university.edu', $4),

       -- Data Analytics
       ('Nina Ross', 'Data visualization expert', 'nina.data@university.edu', $5),
       ('Oscar White', 'Big data systems', 'oscar.data@university.edu', $5),
       ('Paul Green', 'Predictive analytics', 'paul.data@university.edu', $5);`,
    [
      getId('Software Engineering'),
      getId('Web Development'),
      getId('AI & Machine Learning'),
      getId('Cybersecurity'),
      getId('Data Analytics'),
    ]
  );
}
