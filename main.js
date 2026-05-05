/*
 * ------------------------------
 * FAMILY DATA (easy to edit)
 * ------------------------------
 * To add a person:
 * 1) Add a new entry in the right family's "members" array.
 * 2) Use a unique `id`.
 * 3) Set `bigId` to the parent's id (or null for the root).
 *
 * To change relationships:
 * - Only update `bigId` for that person.
 * - Keep exactly one root per family (`bigId: null`).
 */
const families = [ //fact checked relationships
  {
    id: "adaeze",
    name: "Adaeze's Family",
    rootId: "a1",
    members: [
      { id: "a1", name: "Adaeze Asonye", bigId: null, pickingUp: false },
      { id: "a2", name: "Dorothy Wongkarnta", bigId: "a1", pickingUp: false },
      { id: "a3", name: "Ashley Kim", bigId: "a1", pickingUp: false },
      { id: "a4", name: "Riddhima Patllollu", bigId: "a1", pickingUp: false },
      { id: "a5", name: "Tejas Garg", bigId: "a1", pickingUp: false },
      { id: "a6", name: "Anu Kherlen", bigId: "a1", pickingUp: false },
      { id: "a7", name: "Claren Dai", bigId: "a1", pickingUp: false },
      { id: "a8", name: "Nivi Senthilkumar", bigId: "a3", pickingUp: false },
      { id: "a9", name: "Elise Feurborn", bigId: "a3", pickingUp: false },
      { id: "a10", name: "Gwendolyn Slaughter", bigId: "a3", pickingUp: false },
      { id: "a11", name: "Jade Carthans", bigId: "a5", pickingUp: false },
      { id: "a12", name: "Brianna Fonseca", bigId: "a5", pickingUp: false },
      { id: "a13", name: "Emma Savage", bigId: "a6", pickingUp: false },
      { id: "a14", name: "Abby Johnson", bigId: "a9", pickingUp: false },
      { id: "a15", name: "Sarah Masud", bigId: "a12", pickingUp: false },
      { id: "a16", name: "Riya Sudana", bigId: "a13", pickingUp: false },
      { id: "a17", name: "Jenny Dong", bigId: "a16", pickingUp: false },
      { id: "a18", name: "Azeem Newaz", bigId: "a16", pickingUp: false },
      { id: "a19", name: "Kelly Lee", bigId: "a16", pickingUp: false },
      { id: "a20", name: "Lillian Ban", bigId: "a8", pickingUp: false },
      { id: "a21", name: "Yashvi Sanam", bigId: "a8", pickingUp: false },
      { id: "a22", name: "BJ Mensah", bigId: "a8", pickingUp: false },
      { id: "a23", name: "Ishani Anand", bigId: "a20", pickingUp: false },
      { id: "a24", name: "Keegan Barbee", bigId: "a14", pickingUp: false },
      { id: "a25", name: "Alex Jacob", bigId: "a14", pickingUp: false },
      { id: "a26", name: "Noah Eischen", bigId: "a24", pickingUp: false },
      { id: "a27", name: "Jared Yung", bigId: "a17", pickingUp: true },
      { id: "a28", name: "Raphael Chen", bigId: "a27", pickingUp: false },

    ],
  },
  { //fact checked relationships
    id: "sunethra",
    name: "Sunethra's Family",
    rootId: "su1",
    members: [
      { id: "su1", name: "Sunethra Kannan", bigId: null, pickingUp: false },
      { id: "su2", name: "Shannon Dwyer", bigId: "su1", pickingUp: false },
      { id: "su3", name: "Aditya Madduluri", bigId: "su1", pickingUp: false },
      { id: "su4", name: "Dorothy Wongkarnta", bigId: "su1", pickingUp: false },
      { id: "su5", name: "Ankushi Dutta", bigId: "su1", pickingUp: false },
      { id: "su6", name: "Chloe Lee", bigId: "su1", pickingUp: false },
      { id: "su7", name: "Shivali Patel", bigId: "su2", pickingUp: false },
      { id: "su8", name: "Sri Nithya Yeragorla", bigId: "su3", pickingUp: false },
      { id: "su9", name: "Sophia Chen", bigId: "su4", pickingUp: false },
      { id: "su10", name: "Josh Kahn", bigId: "su4", pickingUp: false },
      { id: "su11", name: "Samidha Sampat", bigId: "su5", pickingUp: false },
      { id: "su12", name: "Hannah Ip", bigId: "su9", pickingUp: false },
      { id: "su13", name: "Katherine Mei", bigId: "su10", pickingUp: false },
      { id: "su14", name: "Jacky Lin", bigId: "su10", pickingUp: false },
      { id: "su15", name: "Ananya Kavatekar", bigId: "su13", pickingUp: false },
    ],
  },
  { //fact checked relationships
    id: "kaylin",
    name: "Kaylin's Family",
    rootId: "k1",
    members: [
      { id: "k1", name: "Kaylin Hsiao", bigId: null, pickingUp: false },
      { id: "k2", name: "Divya Jain", bigId: "k1", pickingUp: false },
      { id: "k3", name: "Ethan Mathew", bigId: "k1", pickingUp: false },
      { id: "k4", name: "Heowon Kim", bigId: "k1", pickingUp: false },
      { id: "k5", name: "Ethan Handojo", bigId: "k1", pickingUp: false },
      { id: "k6", name: "Subin Pradeep", bigId: "k2", pickingUp: false },
      { id: "k7", name: "Pranavi Challagonda", bigId: "k2", pickingUp: false },
      { id: "k8", name: "Affan Leebe", bigId: "k3", pickingUp: false },
      { id: "k9", name: "Nandil Patel", bigId: "k3", pickingUp: false },
      { id: "k10", name: "Dan Nguyen", bigId: "k5", pickingUp: false },
      { id: "k11", name: "Ruben Abraham", bigId: "k5", pickingUp: false },
      { id: "k12", name: "Hiba Ayub", bigId: "k5", pickingUp: false },
      { id: "k13", name: "Ellis Lee", bigId: "k7", pickingUp: false },
      { id: "k14", name: "Ruchika Rout", bigId: "k7", pickingUp: false },
      { id: "k15", name: "Fiona Campbell", bigId: "k7", pickingUp: false },
      { id: "k16", name: "Sarah Hafeez", bigId: "k8", pickingUp: false },
      { id: "k17", name: "Sabarish Mogallapalli", bigId: "k10", pickingUp: false },
      { id: "k18", name: "Isaac Turk", bigId: "k11", pickingUp: false },
      { id: "k19", name: "Elizabeth Abraham", bigId: "k12", pickingUp: false },
      { id: "k20", name: "Allison Qiu", bigId: "k12", pickingUp: true },
      { id: "k21", name: "Zainab Hashimi", bigId: "k12", pickingUp: false },
      { id: "k22", name: "Ria Bhargava", bigId: "k12", pickingUp: false },
      { id: "k23", name: "Archana Nanthikattu", bigId: "k13", pickingUp: false },
      { id: "k24", name: "Annabelle Zhang", bigId: "k13", pickingUp: false },
      { id: "k25", name: "Jaclyn Rizzo", bigId: "k15", pickingUp: false },
      { id: "k26", name: "Olivia McGrath", bigId: "k15", pickingUp: false },
      { id: "k27", name: "Ritz Mahmood", bigId: "k18", pickingUp: false },
      { id: "k28", name: "Brandon Nunez", bigId: "k18", pickingUp: false },
      { id: "k29", name: "Amy Wang", bigId: "k20", pickingUp: false },
      { id: "k30", name: "Anishka Khurana", bigId: "k22", pickingUp: true },
      { id: "k31", name: "Nao Wainer", bigId: "k25", pickingUp: false },
      { id: "k32", name: "Ryan Tripathy", bigId: "k17", pickingUp: true },
      { id: "k33", name: "Ezra Raj", bigId: "k17", pickingUp: false },
      { id: "k34", name: "Nikhil Bapat", bigId: "k17", pickingUp: false },
      { id: "k35", name: "Satyam Mallhotra", bigId: "k17", pickingUp: false },
      { id: "k36", name: "Santu Singh", bigId: "k17", pickingUp: true },
      { id: "k37", name: "Tanish Bobde", bigId: "k17", pickingUp: false },
      { id: "k38", name: "Upasan Goswami", bigId: "k35", pickingUp: false },
      { id: "k39", name: "Cindy Zou", bigId: "k35", pickingUp: false },
      { id: "k40", name: "Alissa Nettum", bigId: "k35", pickingUp: false },
    ],
  },
  { //fact checked relationships
    id: "shariq",
    name: "Shariq's Family",
    rootId: "sh1",
    members: [
      { id: "sh1", name: "Shariq Waijd", bigId: null, pickingUp: false },
      { id: "sh2", name: "David Pak", bigId: "sh1", pickingUp: false },
      { id: "sh3", name: "Goutham Baskaran", bigId: "sh1", pickingUp: false },
      { id: "sh4", name: "Alia Afeef", bigId: "sh1", pickingUp: false },
      { id: "sh5", name: "Hritik Arasu", bigId: "sh1", pickingUp: false },
      { id: "sh6", name: "Yeni Femi-Saliu", bigId: "sh1", pickingUp: false },
      { id: "sh7", name: "Aarshi Shivakumar", bigId: "sh1", pickingUp: false },
      { id: "sh8", name: "Matt Gruber", bigId: "sh1", pickingUp: false },
      { id: "sh9", name: "Ethan Rasmussen", bigId: "sh2", pickingUp: false },
      { id: "sh10", name: "Veer Pareek", bigId: "sh3", pickingUp: false },
      { id: "sh11", name: "Safa Lakhany", bigId: "sh3", pickingUp: false },
      { id: "sh12", name: "Fabian Martinez", bigId: "sh5", pickingUp: false },
      { id: "sh13", name: "Nishk Patel", bigId: "sh5", pickingUp: false },
      { id: "sh14", name: "Anjali Maddulapali", bigId: "sh7", pickingUp: false },
      { id: "sh15", name: "Tyler Fields", bigId: "sh8", pickingUp: false },
      { id: "sh16", name: "Krishna Damania", bigId: "sh9", pickingUp: false },
      { id: "sh17", name: "Maryam Khatoon", bigId: "sh11", pickingUp: false },
      { id: "sh18", name: "Om Patel", bigId: "sh11", pickingUp: false },
      { id: "sh19", name: "Tanya Jaiswal", bigId: "sh12", pickingUp: false },
      { id: "sh20", name: "Ashka Rastogi", bigId: "sh12", pickingUp: false },
      { id: "sh21", name: "Connor Krinniger", bigId: "sh12", pickingUp: false },
      { id: "sh22", name: "Rishabh Shah", bigId: "sh13", pickingUp: false },
      { id: "sh23", name: "Sanjana Settipalli", bigId: "sh14", pickingUp: false },
      { id: "sh24", name: "Aishi Dua", bigId: "sh14", pickingUp: false },
      { id: "sh25", name: "Magdalena Trzupek", bigId: "sh15", pickingUp: false },
      { id: "sh26", name: "Madison Van", bigId: "sh17", pickingUp: false },
      { id: "sh27", name: "Vishruth Gonur", bigId: "sh18", pickingUp: true },
      { id: "sh28", name: "Hridhay Prabahar", bigId: "sh18", pickingUp: true },
      { id: "sh29", name: "Samantha Mean", bigId: "sh20", pickingUp: false },
      { id: "sh30", name: "Timothy George", bigId: "sh21", pickingUp: false },
      { id: "sh31", name: "Vanisha Janaki", bigId: "sh23", pickingUp: false },
      { id: "sh32", name: "Vihaan Shah", bigId: "sh23", pickingUp: false },
      { id: "sh33", name: "Anee Anisa", bigId: "sh24", pickingUp: false },
      { id: "sh34", name: "Morgan Cahill", bigId: "sh25", pickingUp: false },
      { id: "sh35", name: "Nick Dinh", bigId: "sh26", pickingUp: false },
      { id: "sh36", name: "Victor Li", bigId: "sh26", pickingUp: false },
      { id: "sh37", name: "Vivian Lee", bigId: "sh26", pickingUp: false },
      { id: "sh38", name: "Nishaan Chavla", bigId: "sh28", pickingUp: false },
      { id: "sh39", name: "Kaushik Shetty", bigId: "sh28", pickingUp: false },
      { id: "sh40", name: "Anurag Karthikayen", bigId: "sh22", pickingUp: true },
      { id: "sh41", name: "Soham Solanki", bigId: "sh22", pickingUp: false },
      { id: "sh42", name: "Edwin Joseph", bigId: "sh33", pickingUp: true },
      { id: "sh43", name: "Inika Sahai", bigId: "sh33", pickingUp: false },
      { id: "sh44", name: "Arthur Kim", bigId: "sh37", pickingUp: true },
      { id: "sh45", name: "Krissy Hoi", bigId: "sh37", pickingUp: false },
      { id: "sh46", name: "Hanna Alakkatt", bigId: "sh29", pickingUp: false },
      { id: "sh47", name: "Rishab Peddi", bigId: "sh41", pickingUp: false },
      { id: "sh48", name: "Aswin Suresh Kumar", bigId: "sh42", pickingUp: false },
      { id: "sh49", name: "Apoorva Kulshreshtha", bigId: "sh43", pickingUp: false },
    ],
  },
  {
    id: "jasmine", //fact checked relationships
    name: "Jasmine's Family",
    rootId: "j1",
    members: [
      { id: "j1", name: "Jasmine Yuan", bigId: null, pickingUp: false },
      { id: "j2", name: "Salina Barih", bigId: "j1", pickingUp: false },
      { id: "j3", name: "Michael Khalaf", bigId: "j1", pickingUp: false },
      { id: "j4", name: "Yerin Yun", bigId: "j2", pickingUp: false },
      { id: "j5", name: "Aryan Ravishankar", bigId: "j3", pickingUp: false },
      { id: "j6", name: "Kane Rubel", bigId: "j3", pickingUp: false },
      { id: "j7", name: "Andrew Chen", bigId: "j3", pickingUp: false },
      { id: "j8", name: "Pratham Soni", bigId: "j3", pickingUp: false },
      { id: "j9", name: "Claudia Robles", bigId: "j4", pickingUp: false },
      { id: "j10", name: "Alejandra Arias", bigId: "j6", pickingUp: false },
      { id: "j11", name: "Priyansh Modi", bigId: "j8", pickingUp: false },
      { id: "j12", name: "Mohney Raza", bigId: "j9", pickingUp: false },
      { id: "j13", name: "Stephanie Ramos", bigId: "j9", pickingUp: false },
      { id: "j14", name: "Rick Hu", bigId: "j9", pickingUp: false },
      { id: "j15", name: "Shreya Raj", bigId: "j9", pickingUp: false },
      { id: "j16", name: "Winter Perkins", bigId: "j10", pickingUp: false },
      { id: "j17", name: "Srestha Mukherjee", bigId: "j7", pickingUp: false },
      { id: "j18", name: "Luke Hull", bigId: "j7", pickingUp: false },
      { id: "j19", name: "Henri Duplessisi", bigId: "j7", pickingUp: false },
      { id: "j20", name: "Sahana Rajagopalan", bigId: "j12", pickingUp: false },
      { id: "j21", name: "Tony Leng", bigId: "j13", pickingUp: false },
      { id: "j22", name: "David Lee", bigId: "j14", pickingUp: false },
      { id: "j23", name: "Joy Liang", bigId: "j15", pickingUp: false },
      { id: "j24", name: "Amritha Barani", bigId: "j15", pickingUp: false },
      { id: "j25", name: "Shivam Patel", bigId: "j17", pickingUp: false },
      { id: "j26", name: "Anushe Khan", bigId: "j17", pickingUp: true },
      { id: "j27", name: "Hansika Sathianarayan", bigId: "j17", pickingUp: false },
      { id: "j28", name: "Hannah Li", bigId: "j17", pickingUp: false },
      { id: "j29", name: "Molly Babczak", bigId: "j18", pickingUp: false },
      { id: "j30", name: "Lahari Anantha", bigId: "j20", pickingUp: true },
      { id: "j31", name: "Sana Purdhani", bigId: "j20", pickingUp: false },
      { id: "j32", name: "Justin Li", bigId: "j23", pickingUp: false },
      { id: "j33", name: "Anna Slowinski", bigId: "j24", pickingUp: true },
      { id: "j34", name: "Jihan Karim", bigId: "j24", pickingUp: false },
      { id: "j35", name: "Sharanya Vijayan", bigId: "j24", pickingUp: true },
      { id: "j36", name: "Anshu Andhavarapu", bigId: "j24", pickingUp: false },
      { id: "j37", name: "Josh Joseph", bigId: "j24", pickingUp: false },
      { id: "j38", name: "Samika Karumuri", bigId: "j27", pickingUp: false },
      { id: "j39", name: "Amanda Dorado", bigId: "j28", pickingUp: false },
      { id: "j40", name: "Pavitra Shankar", bigId: "j33", pickingUp: true },
    ],
  },
];

function validateFamilies(familyList) {
  familyList.forEach((family) => {
    const ids = new Set();
    const byId = new Map();

    family.members.forEach((member) => {
      if (ids.has(member.id)) {
        console.warn(`[Data] Duplicate member id "${member.id}" in ${family.name}`);
      }
      ids.add(member.id);
      byId.set(member.id, member);
    });

    const roots = family.members.filter((member) => member.bigId === null);
    if (roots.length !== 1) {
      console.warn(`[Data] ${family.name} should have exactly 1 root, found ${roots.length}`);
    }
    if (!byId.has(family.rootId)) {
      console.warn(`[Data] rootId "${family.rootId}" is missing in ${family.name}`);
    }

    family.members.forEach((member) => {
      if (member.bigId && !byId.has(member.bigId)) {
        console.warn(
          `[Data] ${family.name}: member "${member.name}" has missing bigId "${member.bigId}"`,
        );
      }
      if (member.bigId === member.id) {
        console.warn(`[Data] ${family.name}: member "${member.name}" cannot be their own big`);
      }
    });
  });
}

validateFamilies(families);

const imageMap = {
  "Jaclyn Rizzo": "images/DSCN1165 - Jaclyn Rizzo.jpeg",
  "Haasini Police": "images/headshot - Haasini Police.JPG",
  "Morgan Cahill": "images/32C8B322-B6EA-458A-A525-5B0E9CDBCC4C_1_201_a - Morgan Cahill.jpeg",
  "Anna Slowinski": "images/DSCF6623 - Anna Slowinski.jpg",
  "Sameer Yamala": "images/IMG_2637 - Sameer Yamala.jpeg",
  "Vanisha Janaki": "images/vanisha 2 - Vanisha Janaki.jpg",
  "Anika Jayanth": "images/headshot - Anika Jayanth.png",
  "Katherine Mei": "images/245A1391 - Katherine Mei.JPG",
  "Aswin Suresh Kumar": "images/1 - Aswin Suresh Kumar.jpg",
  "Veda Kouluru": "images/IMG_6361 - Veda Kouluru.jpeg",
  "Rishab Peddi": "images/Screenshot 2025-08-30 235554 - Rishab Peddi.png",
  "Hiral Palakurty": "images/hiralheadshot - Hiral Palakurty.jpg",
  "Brandon Nunez": "images/_DSC0395 - Brandon Nunez.JPG",
  "BJ Mensah": "images/IMG_0664 - BJ Mensah.jpeg",
  "Mohney Raza": "images/IMG_1217 2 - Mohney Raza.jpg",
  "Raphael Chen": "images/Screenshot_20231106-140519_Original - Raphael Chen.jpeg",
  "Alex Jacob": "images/1000029632 - Alex Jacob.jpeg",
  "Ryan Nguyen": "images/IMG_0029 - Ryan Nguyen.jpeg",
  "Vivian Lee": "images/Vivian Lee Headshot - Vivian Lee.jpg",
  "Pavitra Shankar": "images/IMG_9756 - Pavitra Shankar.JPG",
  "Nao Wainer": "images/profesh headshot 1 - Nao Wainer.JPG",
  "Apoorva Kulshreshtha": "images/_DSC3007 - Apoorva Kulshreshtha.JPG",
  "Upasan Goswami": "images/upasanheadshot - Upasan Goswami.jpg",
  "Isaac Turk": "images/IMG_8914 - Isaac Turk.jpeg",
  "Danny Libert": "images/IMG_4353 - Danny Libert.png",
  "Rehan Hashim": "images/IMG_9333 - Rehan Hashim.jpg",
  "Hanna Alakkatt": "images/46eb833a-e790-46f1-95c8-c392de77fc26 - Hanna Alakkatt.jpeg",
  "Nandana Voolapalli": "images/IMG_6921 - Nandana Voolapalli.jpg",
  "Ishaan Chalana": "images/IMG_4776 - Ishaan Chalana.jpeg",
  "Anishka Khurana": "images/gies_headshot - Anishka Khurana.jpg",
  "Rishabh Shah": "images/P1230470_Original - Rishabh Shah.jpeg",
  "Parth Kumar": "images/headshotParthKumar - Parth Kumar.JPEG",
  "Soham Solanki": "images/Solanki_Soham_pic - Soham Solanki.jpg",
  "Vihaan Shah": "images/IMG_8982 - Vihaan Shah.JPG",
  "Olivia McGrath": "images/IMG_8288 - Olivia McGrath.jpeg",
  "Amanda Dorado": "images/Headshot_2026 - Amanda Dorado.png",
  "Mason Le": "images/MasonLeHeadshot - Mason Le.jpg",
  "Sanika Pande": "images/100_4484 - Sanika Pande.jpeg",
  "Jared Yung": "images/IMG_9344 - Jared Yung.jpeg",
  "Keegan Barbee": "images/Headshot - Keegan Barbee.jpg",
  "Priyansh Modi": "images/professional_headshot - Priyansh Modi.JPG",
  "Irtiza Mahmood": "images/20240823_154357510_iOS - Irtiza Mahmood.jpg",
  "Santusht Singh": "images/IMG_4614 - Santusht Singh.jpeg",
  "Fiona Campbell": "images/IMG_6659 - Fiona Campbell.jpeg",
  "Elise Feuerborn": "images/Headshot - Elise Feuerborn.JPEG",
  "Sahasra Kotarkonda": "images/SAM_5638 2 - Sahasra Kotarkonda.jpg",
  "Lahari Anantha": "images/1761776461633-1 - Lahari Anantha.jpg",
  "Connor Krinninger": "images/DJP01778 - Connor Krinninger.jpg",
  "Krissy Ho": "images/DSC09540 - Krissy Ho.jpg",
  "Pranavi Challagonda": "images/IMG_5032 - Pranavi Challagonda.heic",
  "Jaden Mathew": "images/DSC_0237 - Jaden Mathew.jpeg",
  "Noah Eischen": "images/professionalheadshot - Noah Eischen.png",
  "Sarah Masud": "images/IMG_3809 - Sarah Masud.jpeg",
  "Sana Purdhani": "images/IMG_4092 - Sana Purdhani.JPG",
  "Cindy Zou": "images/Untitled349_20250113212027 (1) - Cindy Zou.jpg",
  "Matthew Ju": "images/Still 2026-03-03 142304_1.126.1 - Matthew Ju.jpg",
  "Hannah Li": "images/IMG_0969 - Hannah Li.jpeg",
  "Ruben Abraham": "images/_DSC2038 - Ruben Abraham.JPG",
  "Magdalena Trzupek": "images/DJP01795 - Magdalena Trzupek.jpg",
  "Hansika Sathianarayanan": "images/IMG_8138 - Hansika Sathianarayanan.JPG",
  "Zahi Rahman": "images/DSC_0103 - Zahi Rahman.jpeg",
  "Ria Bhargava": "images/fin - Ria Bhargava.jpeg",
  "Brady Brooks": "images/Brooks_Brady_003 - Brady Brooks.jpg",
  "Inika Sahai": "images/Inika Headshot - Inika Sahai.JPG",
  "Josh Joseph": "images/IMG_6918 - Josh Joseph.jpeg",
  "Timothy George": "images/1000001036704106_GeorgeTimothy - Timothy George.jpg",
  "Jihan Karim": "images/7A7A8587 (1) - Jihan Karim.jpg",
  "Ashley Crowley": "images/IMG_0203 - Ashley Crowley.jpeg",
  "Jordan Nguyen": "images/headshot v3 - Jordan Nguyen.png",
  "Ellis Lee": "images/IMG_6649 - Ellis Lee.jpeg",
  "Anisha Dan": "images/Anisha_Headshot - Anisha Dan.jpg",
  "Caroline Feng": "images/IMG_9320 - Caroline Feng.jpeg",
  "Madison Van": "images/IMG_8113 - Madison Van.jpeg",
  "Kaushik Setty": "images/IMG_6983 - Kaushik Setty.jpeg",
  "Anna Vanko": "images/DSC_0165 - Anna Vanko.jpg",
  "Servando Diaz": "images/Headshot - Servando Diaz.jpeg",
  "Ryan Tripathy": "images/IMG_1578 - Ryan Tripathy.jpeg",
  "Alan Yom": "images/portrait - Alan Yom.png",
  "Rishi Nayak": "images/IMG_0924 - Rishi Nayak.jpeg",
  "Benjamin Leardi": "images/IMG_3850 - Benjamin Leardi.jpeg",
  "Anurag Karthikeyan": "images/IMG_1893 (1) - Anurag Karthikeyan.jpg",
  "Hannah Ip": "images/ip_hannah_pic - Hannah Ip.jpg",
  "Nishaan Chavla": "images/GP0A7599-Enhanced-NR - Nishaan Chavla.jpeg",
  "Allison Qiu": "images/IMG_9022 - Allison Qiu.jpeg",
  "Amy Wang": "images/IMG_8947 - Amy Wang.jpeg",
  "Sabarish Mogallapalli": "images/IMG_8948_Original - Sabarish Mogallapalli.jpeg",
  "Kelly Yi": "images/headshot - Kelly Yi.jpg",
  "Arnav Kanchi": "images/LINKEDINPFP - Arnav Kanchi.jpeg",
  "Samika Karumuri": "images/DE95BA1B-86F1-4937-94F3-C42E3B937B0A 2 - Samika Karumuri.JPEG",
  "Tanish Bobde": "images/IMG_2076 - Tanish Bobde.jpeg",
  "Abby Johnson": "images/IMG_0248 - Abby Johnson.jpeg",
  "Noah Cha-Price": "images/DSC_0064_headshot - Noah Cha-Price.jpg",
  "Tanya Jaiswal": "images/Tanya Jaiswal- headshot - Tanya Jaiswal.jpeg",
  "Ishani Anand": "images/IMG_8876 - Ishani Anand.jpeg"
};

const avatar = (name) =>
  imageMap[name] || `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=172&background=e2e8f0&color=0f172a`;

const majors = ["CS", "Business", "Economics", "Data Science", "Information Systems"];
const years = ["Freshman", "Sophomore", "Junior", "Senior"];
const interestsPool = ["AI", "Consulting", "Product", "Startups", "Finance", "Design"];
const hobbiesPool = ["Gym", "Basketball", "Music", "Travel", "Cooking", "Gaming"];

function hashCode(value) {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) hash = (hash << 5) - hash + value.charCodeAt(i);
  return Math.abs(hash);
}

function withProfile(member, familyName) {
  const seed = hashCode(member.id + member.name);
  const year = years[seed % years.length];
  const major = majors[seed % majors.length];
  const interests = [
    interestsPool[seed % interestsPool.length],
    interestsPool[(seed + 2) % interestsPool.length],
  ];
  const hobbies = [hobbiesPool[seed % hobbiesPool.length], hobbiesPool[(seed + 3) % hobbiesPool.length]];

  return {
    ...member,
    year,
    major,
    interests,
    hobbies,
    bio: `I'm in ${familyName} and love meeting pledges who are excited to contribute to PHM culture.`,
    pitch:
      "I care about mentorship, being present for my littles, and helping pledges find the right fit socially and professionally.",
  };
}

const familySelect = document.querySelector("#familySelect");
const familyTitle = document.querySelector("#familyTitle");
const treeRoot = document.querySelector("#treeRoot");
const treeStage = document.querySelector("#treeStage");
const treeViewport = document.querySelector("#treeViewport");
const miniMap = document.querySelector("#miniMap");
const fitViewBtn = document.querySelector("#fitViewBtn");
const statTotal = document.querySelector("#statTotal");
const statPicking = document.querySelector("#statPicking");
const statDepth = document.querySelector("#statDepth");
const modal = document.querySelector("#memberModal");
const modalCloseBtn = document.querySelector("#modalCloseBtn");
const modalAvatar = document.querySelector("#modalAvatar");
const modalName = document.querySelector("#modalName");
const modalMeta = document.querySelector("#modalMeta");
const modalBio = document.querySelector("#modalBio");
const modalInterests = document.querySelector("#modalInterests");
const modalHobbies = document.querySelector("#modalHobbies");
const modalPitch = document.querySelector("#modalPitch");

const MAX_DEPTH = 8;
const MAX_NODES_RENDERED = 140;
let renderedNodeCount = 0;
let activeFamilyMembers = [];
const viewState = {
  scale: 1,
  x: 0,
  y: 0,
  isDragging: false,
  hasDragged: false,
  suppressClick: false,
  pointerDownMemberId: null,
  dragStartX: 0,
  dragStartY: 0,
  startX: 0,
  startY: 0,
};

function applyViewTransform() {
  treeStage.style.transform = `translate(${viewState.x}px, ${viewState.y}px) scale(${viewState.scale})`;
}

function getContentSize() {
  return {
    width: treeRoot.scrollWidth || 1,
    height: treeRoot.scrollHeight || 1,
  };
}

function fitTreeToView() {
  const { width, height } = getContentSize();
  const viewportWidth = treeViewport.clientWidth;
  const viewportHeight = treeViewport.clientHeight;
  const scale = Math.max(0.22, Math.min(1.15, Math.min(viewportWidth / (width + 80), viewportHeight / (height + 80))));
  viewState.scale = scale;
  viewState.x = (viewportWidth - width * scale) / 2;
  viewState.y = Math.max(20, (viewportHeight - height * scale) / 2);
  applyViewTransform();
  drawMiniMap();
}

function getElementOffset(element, root) {
  let x = 0;
  let y = 0;
  let node = element;
  while (node && node !== root) {
    x += node.offsetLeft;
    y += node.offsetTop;
    node = node.offsetParent;
  }
  return { x, y };
}

function drawMiniMap() {
  const ctx = miniMap.getContext("2d");
  if (!ctx) return;

  const mapWidth = miniMap.width;
  const mapHeight = miniMap.height;
  const { width: contentWidth, height: contentHeight } = getContentSize();
  const viewportWidth = treeViewport.clientWidth;
  const viewportHeight = treeViewport.clientHeight;

  ctx.clearRect(0, 0, mapWidth, mapHeight);
  ctx.fillStyle = "#0b1224";
  ctx.fillRect(0, 0, mapWidth, mapHeight);
  ctx.strokeStyle = "rgba(148, 163, 184, 0.6)";
  ctx.strokeRect(0.5, 0.5, mapWidth - 1, mapHeight - 1);

  const scaleX = (mapWidth - 10) / contentWidth;
  const scaleY = (mapHeight - 10) / contentHeight;
  const mapScale = Math.min(scaleX, scaleY);
  const offsetX = (mapWidth - contentWidth * mapScale) / 2;
  const offsetY = (mapHeight - contentHeight * mapScale) / 2;

  treeRoot.querySelectorAll(".person").forEach((person) => {
    const { x, y } = getElementOffset(person, treeRoot);
    const isPickingUp = person.classList.contains("picking-up");
    ctx.fillStyle = isPickingUp ? "#35e182" : "#64748b";
    ctx.beginPath();
    ctx.arc(offsetX + x * mapScale, offsetY + y * mapScale, isPickingUp ? 2.3 : 1.6, 0, Math.PI * 2);
    ctx.fill();
  });

  const visibleLeft = (-viewState.x / viewState.scale) * mapScale + offsetX;
  const visibleTop = (-viewState.y / viewState.scale) * mapScale + offsetY;
  const visibleWidth = (viewportWidth / viewState.scale) * mapScale;
  const visibleHeight = (viewportHeight / viewState.scale) * mapScale;

  ctx.strokeStyle = "#60a5fa";
  ctx.lineWidth = 1.5;
  ctx.strokeRect(visibleLeft, visibleTop, visibleWidth, visibleHeight);
}

function setupPanZoom() {
  treeViewport.addEventListener("dragstart", (event) => {
    event.preventDefault();
  });

  treeViewport.addEventListener(
    "wheel",
    (event) => {
      event.preventDefault();
      const zoomIntensity = 0.0012;
      const nextScale = Math.min(2, Math.max(0.2, viewState.scale - event.deltaY * zoomIntensity));
      const rect = treeViewport.getBoundingClientRect();
      const cursorX = event.clientX - rect.left;
      const cursorY = event.clientY - rect.top;

      const worldX = (cursorX - viewState.x) / viewState.scale;
      const worldY = (cursorY - viewState.y) / viewState.scale;

      viewState.scale = nextScale;
      viewState.x = cursorX - worldX * viewState.scale;
      viewState.y = cursorY - worldY * viewState.scale;
      applyViewTransform();
      drawMiniMap();
    },
    { passive: false },
  );

  treeViewport.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    event.preventDefault();
    const downCard = event.target.closest(".person");
    viewState.pointerDownMemberId = downCard ? downCard.dataset.memberId : null;
    viewState.isDragging = true;
    viewState.hasDragged = false;
    viewState.dragStartX = event.clientX;
    viewState.dragStartY = event.clientY;
    viewState.startX = viewState.x;
    viewState.startY = viewState.y;
    treeViewport.classList.add("dragging");
    treeViewport.setPointerCapture(event.pointerId);
  });

  treeViewport.addEventListener("pointermove", (event) => {
    if (!viewState.isDragging) return;
    event.preventDefault();
    const movedX = event.clientX - viewState.dragStartX;
    const movedY = event.clientY - viewState.dragStartY;
    if (Math.abs(movedX) > 4 || Math.abs(movedY) > 4) {
      viewState.hasDragged = true;
    }
    viewState.x = viewState.startX + (event.clientX - viewState.dragStartX);
    viewState.y = viewState.startY + (event.clientY - viewState.dragStartY);
    applyViewTransform();
    drawMiniMap();
  });

  treeViewport.addEventListener("pointerup", (event) => {
    if (!viewState.isDragging) return;
    viewState.isDragging = false;
    viewState.suppressClick = viewState.hasDragged;
    if (!viewState.hasDragged && viewState.pointerDownMemberId) {
      const member = activeFamilyMembers.find((item) => item.id === viewState.pointerDownMemberId);
      if (member && member.pickingUp) {
        openMemberModal(member);
      }
    }
    viewState.pointerDownMemberId = null;
    treeViewport.classList.remove("dragging");
    treeViewport.releasePointerCapture(event.pointerId);
    requestAnimationFrame(() => {
      viewState.hasDragged = false;
    });
    setTimeout(() => {
      viewState.suppressClick = false;
    }, 60);
  });

  fitViewBtn.addEventListener("click", fitTreeToView);
  window.addEventListener("resize", () => {
    drawMiniMap();
  });
}

function buildNode(member, childrenMap, visited = new Set(), depth = 0) {
  if (visited.has(member.id) || depth > MAX_DEPTH || renderedNodeCount > MAX_NODES_RENDERED) {
    return { member, children: [] };
  }
  renderedNodeCount += 1;
  const nextVisited = new Set(visited);
  nextVisited.add(member.id);
  return {
    member,
    children: (childrenMap.get(member.id) ?? []).map((child) =>
      buildNode(child, childrenMap, nextVisited, depth + 1),
    ),
  };
}

function createBranch(node) {
  const li = document.createElement("li");
  const card = document.createElement("div");
  card.className = `person ${node.member.pickingUp ? "picking-up pickable" : ""}`;
  card.dataset.memberId = node.member.id;
  card.innerHTML = `
    <img src="${avatar(node.member.name)}" alt="${node.member.name}" loading="lazy" />
    <div class="name">${node.member.name}</div>
    ${node.member.pickingUp ? '<span class="status-tag">PICKING UP</span>' : ""}
  `;
  li.appendChild(card);

  if (node.children.length) {
    const ul = document.createElement("ul");
    node.children.forEach((child) => ul.appendChild(createBranch(child)));
    li.appendChild(ul);
  }
  return li;
}

function countDepth(node) {
  if (!node.children.length) return 1;
  return 1 + Math.max(...node.children.map(countDepth));
}

function renderFamily(familyId) {
  const family = families.find((item) => item.id === familyId);
  if (!family) return;

  activeFamilyMembers = family.members.map((member) => withProfile(member, family.name));
  familyTitle.textContent = family.name;
  const map = new Map(activeFamilyMembers.map((member) => [member.id, member]));
  const childrenMap = new Map();
  activeFamilyMembers.forEach((member) => {
    if (!member.bigId) return;
    childrenMap.set(member.bigId, [...(childrenMap.get(member.bigId) ?? []), member]);
  });

  const rootMember =
    map.get(family.rootId) || activeFamilyMembers.find((member) => member.bigId === null);
  treeRoot.innerHTML = "";

  if (!rootMember) {
    treeRoot.innerHTML = "<p>No root member configured.</p>";
    return;
  }

  renderedNodeCount = 0;
  const rootNode = buildNode(rootMember, childrenMap);
  const topList = document.createElement("ul");
  topList.appendChild(createBranch(rootNode));
  treeRoot.appendChild(topList);
  requestAnimationFrame(fitTreeToView);

  statTotal.textContent = String(activeFamilyMembers.length);
  statPicking.textContent = String(activeFamilyMembers.filter((member) => member.pickingUp).length);
  statDepth.textContent = String(countDepth(rootNode));
}

function openMemberModal(member) {
  modalAvatar.src = avatar(member.name);
  modalAvatar.alt = member.name;
  modalName.textContent = member.name;
  modalMeta.textContent = `${member.year} - ${member.major}`;
  modalBio.textContent = member.bio;
  modalInterests.textContent = member.interests.join(" | ");
  modalHobbies.textContent = member.hobbies.join(" | ");
  modalPitch.textContent = member.pitch;

  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
}

function closeMemberModal() {
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
}

families.forEach((family) => {
  const option = document.createElement("option");
  option.value = family.id;
  option.textContent = family.name;
  familySelect.appendChild(option);
});

familySelect.addEventListener("change", (event) => {
  renderFamily(event.target.value);
});

modal.addEventListener("click", (event) => {
  if (event.target.dataset.closeModal === "true") closeMemberModal();
});
modalCloseBtn.addEventListener("click", closeMemberModal);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) closeMemberModal();
});

setupPanZoom();
renderFamily(families[0].id);
