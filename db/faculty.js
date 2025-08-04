const faculty = [
  {
    id: 1,
    name: "Sundar Pichai",
    bio: "Mr. Pichai completed schooling in Jawahar Vidyalaya Senior Secondary School in Ashok Nagar, Chennai and completed the Class XII from Vana Vani school at IIT Madras. He earned a B.Tech in metallurgical engineering from IIT Kharagpur. He holds an MS from Stanford University in materials science and engineering and an MBA from the Wharton School of the University of Pennsylvania, where he was named a Siebel Scholar and a Palmer Scholar, respectively. He is the CEO of Alphabet Inc. and its subsidiary Google.",
    profileImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Sundar_Pichai_-_2023_%28cropped%29.jpg/250px-Sundar_Pichai_-_2023_%28cropped%29.jpg",
    contactInfo: "sundar.pichai@fsu.edu",
  },
  {
    id: 2,
    name: "Ian Goodfellow",
    bio: "Mr. Goodfellow got his B.S. and M.S. in computer science from Stanford University, where he was under the supervision of Andrew Ng. He earned his PhD in the April of 2014 from the Université de Montréal, where he was under the supervision of Yoshua Bengio and Aaron Courville. After graduating, Mr. Goodfellow joined Google, where he worked as part of the research team of Google brain. He then quit Google to join Open Ai, which was then still a new institute. In 2017, he returned to Google Research.",
    profileImage:
      "https://mn2s.com/wp-content/uploads/2024/12/Ian-Goodfellow.png",
    contactInfo: "ian.goodfellow@fsu.edu",
  },
  {
    id: 3,
    name: "Linus Torvalds",
    bio: "Mr. Torvalds attended the University of Helsinki from 1988 to 1996,graduating with a master's degree in computer science from the NODES research group. In 1990, he was exposed to Unix for the first time in the form of a DEC MicroVAX running ULTRIX. Later, he bought computer science professor Andrew Tanenbaum's book Operating Systems: Design and Implementation, in which Tanenbaum describes MINIX, an educational stripped-down version of Unix. On 5 January 1991, he purchased an Intel 80386-based IBM PC clone before receiving a copy of MINIX, which in turn enabled him to begin work on Linux.",
    profileImage:
      "https://upload.wikimedia.org/wikipedia/commons/e/e8/Lc3_2018_%28263682303%29_%28cropped%29.jpeg",
    contactInfo: "linus.torvalds@fsu.edu",
  },
  {
    id: 4,
    name: "Jeff Bezos",
    bio: "Mr. Bezos graduated from college in 1986. He first worked at Fitel, a fintech telecommunications start-up, where he was tasked with building a network for international trade. Mr. Bezos was promoted to head of development and director of customer service. He transitioned into the banking industry when he became a product manager at Bankers Trust from 1988 to 1990. From 1990 to 1994, he worked at D. E. Shaw & Co, a newly created hedge fund with a strong emphasis on mathematical modelling. Bezos became D. E. Shaw's fourth senior vice-president by age 30. In 1994, Mr. Bezos read that web usage was growing at a rate of 2300% a year and eventually decided to establish an online bookstore. He left his job at D. E. Shaw and founded Amazon in a rented garage in Bellevue, Washington on July 5, 1994.",
    profileImage:
      "https://upload.wikimedia.org/wikipedia/commons/0/03/Jeff_Bezos_visits_LAAFB_SMC_%283908618%29_%28cropped%29.jpeg",
    contactInfo: "jeff.bezos@fsu.edu",
  },
  {
    id: 5,
    name: "Bill Gates",
    bio: "At age 17, Mr. Gates formed a venture called Traf-O-Data to make traffic counters based on the Intel 8008 processor.In 1972, he served as a congressional page in the House of Representatives. He was a national merit scholar when he graduated from Lakeside School in 1973. He scored 1590 out of 1600 on the Scholastic Aptitude Tests (SAT) and enrolled at Harvard University in the autumn of 1973. Mr. Gates did not stay at Harvard long enough to choose a concentration, but took mathematics and graduate level computer science courses. While at Harvard, he met fellow student and future Microsoft CEO Steve Ballmer. Gates left Harvard after two years while Ballmer stayed and graduated magna cum laude. Years later, Ballmer succeeded Gates as Microsoft's CEO and maintained that position from 2000 until his resignation in 2014.",
    profileImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Bill_Gates_at_the_European_Commission_-_2025_-_P067383-987995_%28cropped%29.jpg/640px-Bill_Gates_at_the_European_Commission_-_2025_-_P067383-987995_%28cropped%29.jpg",
    contactInfo: "bill.gates@fsu.edu",
  },
  {
    id: 6,
    name: "Satya Nadella",
    bio: "Mr. Nadella attended the Hyderabad Public School, Begumpet before receiving a bachelor's degree in electrical engineering from the Manipal Institute of Technology in Karnataka in 1988. He then traveled to the United States to study for an MS in computer science at the University of Wisconsin,receiving his degree in 1990.He received an MBA from the University of Chicago Booth School of Business in 1997. Mr. Nadella is the chairman and CEO of Microsoft, succeeding Steve Ballmer in 2014 as CEO and John W. Thompson in 2021 as chairman.",
    profileImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/MS-Exec-Nadella-Satya-2017-08-31-22_%28cropped%29.jpg/960px-MS-Exec-Nadella-Satya-2017-08-31-22_%28cropped%29.jpg",
    contactInfo: "satya.nadella@fsu.edu",
  },
  {
    id: 7,
    name: "Larry Page",
    bio: "Mr. Page received a Bachelor of Science in Engineering with a major in Computer Engineering with honors from the University of Michigan in 1995 and a Master of Science in Computer Science from Stanford University in 1998. After enrolling in a computer science PhD program at Stanford University, Mr. Page was in search of a dissertation theme and considered exploring the mathematical properties of the World Wide Web, understanding its link structure as a huge graph. Mr. Page focused on the problem of finding out which web pages linked to a given page, considering the number and nature of such backlinks as valuable information for that page. He is best known for co-founding Google with his fellow Stanford PhD student, Mr. Sergey Brin.",
    profileImage:
      "https://imageio.forbes.com/specials-images/imageserve/5c76bcaaa7ea43100043c836/0x0.jpg?format=jpg&crop=1795,1795,x227,y22,safe&height=416&width=416&fit=bounds",
    contactInfo: "larry.page@fsu.edu",
  },
  {
    id: 8,
    name: "Sergey Brin",
    bio: "Mr. Brin enrolled in the University of Maryland in September 1990, where he received his Bachelor of Science from the Department of Computer Science in 1993 with honors in computer science and mathematics at the age of 19. In 1993, he interned at Wolfram Research, the developers of Mathematica. Mr. Brin began his graduate study in computer science at Stanford University on a graduate fellowship from the National Science Foundation, receiving an M.S. in computer science in 1995. As of 2008, he was on leave from his PhD studies at Stanford. He is best known for co-founding Google with his fellow Stanford PhD student, Mr. Larry Page.",
    profileImage:
      "https://imageio.forbes.com/specials-images/imageserve/5c7d7c254bbe6f78090d831f/0x0.jpg?format=jpg&crop=2412,2414,x475,y168,safe&height=416&width=416&fit=bounds",
    contactInfo: "sergey.brin@fsu.edu",
  },
  {
    id: 9,
    name: "Elon Musk",
    bio: "Mr. Musk entered Queen's University in Kingston, Ontario, in 1990. Two years later, he transferred to the University of Pennsylvania, where he studied until 1995, receiving a Bachelor of Arts in physics and a Bachelor of Science in economics from the university's Wharton School. In 1995, Mr. Musk co-founded the software company Zip2. Following its sale in 1999, he co-founded X.com, an online payment company that later merged to form PayPal, which was acquired by eBay in 2002. In 2002, Mr. Musk founded the space technology company SpaceX, becoming its CEO and chief engineer; the company has since led innovations in reusable rockets and commercial spaceflight. He joined the automaker Tesla as an early investor in 2004 and became its CEO and product architect in 2008; it has since become a leader in electric vehicles.",
    profileImage:
      "https://upload.wikimedia.org/wikipedia/commons/f/f4/USAFA_Hosts_Elon_Musk_%28Image_1_of_17%29_%28cropped%29.jpg",
    contactInfo: "elon.musk@fsu.edu",
  },
  {
    id: 10,
    name: "Ginni Rometty",
    bio: "Mrs. Rometty began attending Northwestern University in Illinois in 1975 on a scholarship from General Motors, where she interned between her junior and senior years. She graduated with high honors from the Robert R. McCormick School of Engineering and Applied Science at Northwestern University in 1979, receiving a bachelor's degree in computer science and electrical engineering. She has received honorary doctoral degrees from Rensselaer Polytechnic Institute (2014) and Northwestern University (2015). She also received an honorary degree from North Carolina State University. She was previously chairman, president and CEO of IBM, becoming the first woman to head the company. She retired from IBM on December 31, 2020, after a near-40 year career there.",
    profileImage:
      "https://upload.wikimedia.org/wikipedia/commons/a/ab/Ginni_Rometty_at_the_Fortune_MPW_Summit_in_2011.jpg",
    contactInfo: "ginni.rometty@fsu.edu",
  },
  {
    id: 11,
    name: "Mark Zuckerberg",
    bio: 'Mark Zuckerberg, born on May 14, 1984, is an American technology entrepreneur best known as the co-founder and CEO of Meta Platforms (formerly Facebook). He launched Facebook in 2004 while studying at Harvard, which has since grown into one of the world’s largest social media companies, also owning Instagram, WhatsApp, and Threads. Along with his wife Priscilla Chan, he runs the Chan Zuckerberg Initiative, focusing on education, science, and social causes.',
    profileImage:
      "https://imageio.forbes.com/specials-images/imageserve/5c76b7d331358e35dd2773a9/0x0.jpg?format=jpg&crop=4401,4401,x0,y0,safe&height=416&width=416&fit=bounds",
    contactInfo: "mark.zuckerberg@fsu.edu",
  },
  {
    id: 12,
    name: "Tim Berners-Lee",
    bio: 'Tim Berners-Lee, born on June 8, 1955, is a British computer scientist best known as the inventor of the World Wide Web. In 1989, while working at CERN, he proposed and developed the first web browser and server, which made it possible to access and share information over the internet using websites and hyperlinks. He has since become a strong advocate for keeping the web open, free, and accessible to everyone.',
    profileImage:
      "https://cdn.britannica.com/22/221822-050-3B0A657F/British-scientist-Tim-Berners-Lee.jpg?w=300",
    contactInfo: "tim.berners@fsu.edu",
  },
  {
    id: 13,
    name: "Lynn Conway",
    bio: 'Lynn Conway (1938–2024) was an American computer scientist and electrical engineer who revolutionized microchip design. After pioneering out-of-order execution at IBM, she co-developed the Mead–Conway VLSI design methods at Xerox PARC in the 1970s, which transformed how modern computer chips are built. She later became a professor at the University of Michigan and was also a prominent advocate for transgender rights, inspiring generations through her technical innovations and activism.',
    profileImage:
      "https://500queerscientists.com/lynn-conway/",
    contactInfo: "lyn.conway@fsu.edu",
  },
  {
    id: 14,
    name: "Sam Altman",
    bio: 'Sam Altman (born April 22, 1985) is an American entrepreneur and investor, best known as the CEO of OpenAI, the company behind ChatGPT and other AI technologies. A Stanford dropout, he co-founded the app Loopt, later became president of the Y Combinator startup accelerator, and has been a key figure in advancing artificial intelligence while also speaking publicly about its potential risks and benefits.',
    profileImage:
      "https://fortune.com/img-assets/wp-content/uploads/2024/09/GettyImages-2153474303-e1727373782574.jpg?w=1440&q=90",
    contactInfo: "sam.altman@fsu.edu",
  },
  {
    id: 15,
    name: "Steve Ballmer",
    bio: 'Steve Ballmer (born march in Detroit, Michigan) is an American businessman and investor best known for serving as CEO of Microsoft from 2000 to 2014. He joined Microsoft in 1980 as its first business manager, eventually succeeding Bill Gates as CEO and leading the company through a period of rapid growth—tripling sales and doubling profits—though critics saw missed opportunities in mobile and internet innovation ',
    profileImage:
      "https://cdn.nba.com/teams/legacy/i.cdn.turner.com/nba/nba/.element/media/2.0/teamsites/clippers/Ballmer.Headshot300x358.png?imwidth=512",
    contactInfo: "steve.ballmer@fsu.edu",
  },
  {
    id: 16,
    name: "Larry Ellison",
    bio: 'American entrepreneur and cofounder of Oracle Corporation, one of the world’s largest software and database companies, where he now serves as executive chairman and chief technology officer',
    profileImage:
      "https://image.cnbcfm.com/api/v1/image/100432242-larry-ellison-ceo-oracle-getty.jpg?v=1737485726&w=1480&h=833&ffmt=webp&vtcrop=y",
    contactInfo: "larry.ellison@fsu.edu",
  },
  {
    id: 17,
    name: "Jensen Huang",
    bio: 'Taiwanese-American entrepreneur and cofounder and CEO of NVIDIA, known for pioneering graphics processing units (GPUs) and driving advancements in AI and high-performance computing.',
    profileImage:
      "https://api.time.com/wp-content/uploads/2020/09/jensen-huang-time-100-2021.jpg",
    contactInfo: "jensen.huang@fsu.edu",
  },
  {
    id: 18,
    name: "Steve Wozniak",
    bio: 'American engineer and cofounder of Apple Inc., credited with designing the Apple I and Apple II computers, which helped launch the personal computer revolution.',
    profileImage:
      "https://upload.wikimedia.org/wikipedia/commons/6/6e/Steve_Wozniak_by_Gage_Skidmore_3_%28cropped%29.jpg",
    contactInfo: "steve.woznaik@fsu.edu",
  },
  {
    id: 19,
    name: "Andrew Ng",
    bio: 'Computer scientist and AI researcher, cofounder of Google Brain and Coursera, and a leading figure in machine learning and online education.',
    profileImage:
      "https://upload.wikimedia.org/wikipedia/commons/2/20/Andrew_Ng_at_TechCrunch_Disrupt_SF_2017.jpg",
    contactInfo: "andrew.ng@fsu.edu",
  },
  {
    id: 20,
    name: "Demis Hassabis",
    bio: 'British AI researcher, neuroscientist, and cofounder/CEO of DeepMind, a company known for breakthroughs in artificial intelligence such as AlphaGo.',
    profileImage:
      "https://www.nobelprize.org/images/165765-portrait-medium.jpg",
    contactInfo: "demis.hassabis@fsu.edu",
  },
];

export default faculty;
