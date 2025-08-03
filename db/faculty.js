const faculty = [
  {
    id: 1,
    name: "Sundar Pichai",
    bio: "Mr. Pichai completed schooling in Jawahar Vidyalaya Senior Secondary School in Ashok Nagar, Chennai and completed the Class XII from Vana Vani school at IIT Madras. He earned a B.Tech in metallurgical engineering from IIT Kharagpur. He holds an MS from Stanford University in materials science and engineering and an MBA from the Wharton School of the University of Pennsylvania,where he was named a Siebel Scholar and a Palmer Scholar, respectively.",
    profileImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Sundar_Pichai_-_2023_%28cropped%29.jpg/250px-Sundar_Pichai_-_2023_%28cropped%29.jpg",
    contactInfo: "sundar.pichai@fsu.edu",
  },
  {
    id: 2,
    name: "Ian Goodfellow",
    bio: "Mr. Goodfellow got his B.S. and M.S. in computer science from Stanford University, where he was under the supervision of Andrew Ng. He earned his PhD in the April of 2014 from the Université de Montréal, where he was under the supervision of Yoshua Bengio and Aaron Courville. After graduating, Mr. Goodfellow joined Google, where he worked as part of the research team of Google brain. He then quit Google to join Open Ai, which was then still a new institute. In 2017, he returned to Google Research.",
    profileImage:
      "https://charonhub.deeplearning.ai/content/images/2022/10/Screen20Shot202020-09-2920at201.03.5020PM.png",
    contactInfo: "ian.goodfellow@fsu.edu",
  },
  {
    id: 3,
    name: "Linus Torvalds",
    bio: "Mr. Torvalds attended the University of Helsinki from 1988 to 1996,graduating with a master's degree in computer science from the NODES research group. In 1990, he was exposed to Unix for the first time in the form of a DEC MicroVAX running ULTRIX. Later, he bought computer science professor Andrew Tanenbaum's book Operating Systems: Design and Implementation, in which Tanenbaum describes MINIX, an educational stripped-down version of Unix. On 5 January 1991, he purchased an Intel 80386-based IBM PC clone before receiving a copy of MINIX, which in turn enabled him to begin work on Linux.",
    profileImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Lc3_2018_%28263682303%29_%28cropped%29.jpeg/250px-Lc3_2018_%28263682303%29_%28cropped%29.jpeg",
    contactInfo: "linus.torvalds@fsu.edu",
  },
  {
    id: 4,
    name: "Jeff Bezos",
    bio: 'George Orwell’s dystopian masterpiece, "1984," presents a chilling vision of a totalitarian society ruled by the Party and its omnipresent leader, Big Brother. The novel follows Winston Smith, a citizen of Airstrip One, as he navigates a world of surveillance, propaganda, and thought control. "1984" serves as a stark warning about the erosion of individuality, truth, and freedom in a surveillance state.',
    profileImage:
      "https://images.pexels.com/photos/7034646/pexels-photo-7034646.jpeg",
    contactInfo: "1984",
  },
  {
    id: 5,
    name: "Bill Gates",
    bio: 'George Orwell’s dystopian masterpiece, "1984," presents a chilling vision of a totalitarian society ruled by the Party and its omnipresent leader, Big Brother. The novel follows Winston Smith, a citizen of Airstrip One, as he navigates a world of surveillance, propaganda, and thought control. "1984" serves as a stark warning about the erosion of individuality, truth, and freedom in a surveillance state.',
    profileImage:
      "https://images.pexels.com/photos/7034646/pexels-photo-7034646.jpeg",
    contactInfo: "1984",
  },
  {
    id: 6,
    name: "Satya Nadella",
    bio: 'George Orwell’s dystopian masterpiece, "1984," presents a chilling vision of a totalitarian society ruled by the Party and its omnipresent leader, Big Brother. The novel follows Winston Smith, a citizen of Airstrip One, as he navigates a world of surveillance, propaganda, and thought control. "1984" serves as a stark warning about the erosion of individuality, truth, and freedom in a surveillance state.',
    profileImage:
      "https://images.pexels.com/photos/7034646/pexels-photo-7034646.jpeg",
    contactInfo: "1984",
  },
  {
    id: 7,
    name: "Larry Page",
    bio: 'George Orwell’s dystopian masterpiece, "1984," presents a chilling vision of a totalitarian society ruled by the Party and its omnipresent leader, Big Brother. The novel follows Winston Smith, a citizen of Airstrip One, as he navigates a world of surveillance, propaganda, and thought control. "1984" serves as a stark warning about the erosion of individuality, truth, and freedom in a surveillance state.',
    profileImage:
      "https://images.pexels.com/photos/7034646/pexels-photo-7034646.jpeg",
    contactInfo: "1984",
  },
  {
    id: 8,
    name: "Sergey Brin",
    bio: 'George Orwell’s dystopian masterpiece, "1984," presents a chilling vision of a totalitarian society ruled by the Party and its omnipresent leader, Big Brother. The novel follows Winston Smith, a citizen of Airstrip One, as he navigates a world of surveillance, propaganda, and thought control. "1984" serves as a stark warning about the erosion of individuality, truth, and freedom in a surveillance state.',
    profileImage:
      "https://images.pexels.com/photos/7034646/pexels-photo-7034646.jpeg",
    contactInfo: "1984",
  },
  {
    id: 9,
    name: "Elon Musk",
    bio: 'George Orwell’s dystopian masterpiece, "1984," presents a chilling vision of a totalitarian society ruled by the Party and its omnipresent leader, Big Brother. The novel follows Winston Smith, a citizen of Airstrip One, as he navigates a world of surveillance, propaganda, and thought control. "1984" serves as a stark warning about the erosion of individuality, truth, and freedom in a surveillance state.',
    profileImage:
      "https://images.pexels.com/photos/7034646/pexels-photo-7034646.jpeg",
    contactInfo: "1984",
  },
  {
    id: 10,
    name: "Ginni Rometty",
    bio: 'George Orwell’s dystopian masterpiece, "1984," presents a chilling vision of a totalitarian society ruled by the Party and its omnipresent leader, Big Brother. The novel follows Winston Smith, a citizen of Airstrip One, as he navigates a world of surveillance, propaganda, and thought control. "1984" serves as a stark warning about the erosion of individuality, truth, and freedom in a surveillance state.',
    profileImage:
      "https://images.pexels.com/photos/7034646/pexels-photo-7034646.jpeg",
    contactInfo: "1984",
  },
  {
    id: 11,
    name: "Mark Zuckerberg",
    bio: 'George Orwell’s dystopian masterpiece, "1984," presents a chilling vision of a totalitarian society ruled by the Party and its omnipresent leader, Big Brother. The novel follows Winston Smith, a citizen of Airstrip One, as he navigates a world of surveillance, propaganda, and thought control. "1984" serves as a stark warning about the erosion of individuality, truth, and freedom in a surveillance state.',
    profileImage:
      "https://images.pexels.com/photos/7034646/pexels-photo-7034646.jpeg",
    contactInfo: "1984",
  },
  {
    id: 12,
    name: "Tim Berners-Lee",
    bio: 'George Orwell’s dystopian masterpiece, "1984," presents a chilling vision of a totalitarian society ruled by the Party and its omnipresent leader, Big Brother. The novel follows Winston Smith, a citizen of Airstrip One, as he navigates a world of surveillance, propaganda, and thought control. "1984" serves as a stark warning about the erosion of individuality, truth, and freedom in a surveillance state.',
    profileImage:
      "https://images.pexels.com/photos/7034646/pexels-photo-7034646.jpeg",
    contactInfo: "1984",
  },
  {
    id: 13,
    name: "Lynn Conway",
    bio: 'George Orwell’s dystopian masterpiece, "1984," presents a chilling vision of a totalitarian society ruled by the Party and its omnipresent leader, Big Brother. The novel follows Winston Smith, a citizen of Airstrip One, as he navigates a world of surveillance, propaganda, and thought control. "1984" serves as a stark warning about the erosion of individuality, truth, and freedom in a surveillance state.',
    profileImage:
      "https://images.pexels.com/photos/7034646/pexels-photo-7034646.jpeg",
    contactInfo: "1984",
  },
  {
    id: 14,
    name: "Sam Altman",
    bio: 'George Orwell’s dystopian masterpiece, "1984," presents a chilling vision of a totalitarian society ruled by the Party and its omnipresent leader, Big Brother. The novel follows Winston Smith, a citizen of Airstrip One, as he navigates a world of surveillance, propaganda, and thought control. "1984" serves as a stark warning about the erosion of individuality, truth, and freedom in a surveillance state.',
    profileImage:
      "https://images.pexels.com/photos/7034646/pexels-photo-7034646.jpeg",
    contactInfo: "1984",
  },
  {
    id: 15,
    name: "Steve Ballmer",
    bio: 'George Orwell’s dystopian masterpiece, "1984," presents a chilling vision of a totalitarian society ruled by the Party and its omnipresent leader, Big Brother. The novel follows Winston Smith, a citizen of Airstrip One, as he navigates a world of surveillance, propaganda, and thought control. "1984" serves as a stark warning about the erosion of individuality, truth, and freedom in a surveillance state.',
    profileImage:
      "https://images.pexels.com/photos/7034646/pexels-photo-7034646.jpeg",
    contactInfo: "1984",
  },
  {
    id: 16,
    name: "Larry Ellison",
    bio: 'George Orwell’s dystopian masterpiece, "1984," presents a chilling vision of a totalitarian society ruled by the Party and its omnipresent leader, Big Brother. The novel follows Winston Smith, a citizen of Airstrip One, as he navigates a world of surveillance, propaganda, and thought control. "1984" serves as a stark warning about the erosion of individuality, truth, and freedom in a surveillance state.',
    profileImage:
      "https://images.pexels.com/photos/7034646/pexels-photo-7034646.jpeg",
    contactInfo: "1984",
  },
  {
    id: 17,
    name: "Jensen Huang",
    bio: 'George Orwell’s dystopian masterpiece, "1984," presents a chilling vision of a totalitarian society ruled by the Party and its omnipresent leader, Big Brother. The novel follows Winston Smith, a citizen of Airstrip One, as he navigates a world of surveillance, propaganda, and thought control. "1984" serves as a stark warning about the erosion of individuality, truth, and freedom in a surveillance state.',
    profileImage:
      "https://images.pexels.com/photos/7034646/pexels-photo-7034646.jpeg",
    contactInfo: "1984",
  },
  {
    id: 18,
    name: "Steve Wozniak",
    bio: 'George Orwell’s dystopian masterpiece, "1984," presents a chilling vision of a totalitarian society ruled by the Party and its omnipresent leader, Big Brother. The novel follows Winston Smith, a citizen of Airstrip One, as he navigates a world of surveillance, propaganda, and thought control. "1984" serves as a stark warning about the erosion of individuality, truth, and freedom in a surveillance state.',
    profileImage:
      "https://images.pexels.com/photos/7034646/pexels-photo-7034646.jpeg",
    contactInfo: "1984",
  },
  {
    id: 19,
    name: "Andrew Ng",
    bio: 'George Orwell’s dystopian masterpiece, "1984," presents a chilling vision of a totalitarian society ruled by the Party and its omnipresent leader, Big Brother. The novel follows Winston Smith, a citizen of Airstrip One, as he navigates a world of surveillance, propaganda, and thought control. "1984" serves as a stark warning about the erosion of individuality, truth, and freedom in a surveillance state.',
    profileImage:
      "https://images.pexels.com/photos/7034646/pexels-photo-7034646.jpeg",
    contactInfo: "1984",
  },
  {
    id: 20,
    name: "Demis Hassabis",
    bio: 'George Orwell’s dystopian masterpiece, "1984," presents a chilling vision of a totalitarian society ruled by the Party and its omnipresent leader, Big Brother. The novel follows Winston Smith, a citizen of Airstrip One, as he navigates a world of surveillance, propaganda, and thought control. "1984" serves as a stark warning about the erosion of individuality, truth, and freedom in a surveillance state.',
    profileImage:
      "https://images.pexels.com/photos/7034646/pexels-photo-7034646.jpeg",
    contactInfo: "1984",
  },
];

export default faculty;
