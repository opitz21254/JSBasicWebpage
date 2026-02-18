const buildHeader = () => {
  return `<header><a href="#">Logo</a></header>`;
};

function buildAnimalCards(animalsArray) {
  const queryString = window.location.search.slice(1);

const splitArray = queryString.split('&');
const offsetInput = splitArray[0].split('=')[1];
const countInput = splitArray[1].split('=')[1];
let countError = ``;
let offsetError =  ``;
let offset = ``;
let count = ``;


//Invalid numbers
if(Number.isNaN(Number(offsetInput))){
  offsetError = `Offset was not a number, please enter a valid number`;
}else{
  offset = Number(offsetInput);
}
if(Number.isNaN(Number(countInput))){
  countError = `Count was not a number, please enter a valid number`;
}else{
  count = Number(countInput);
}
if(Number.isNaN(Number(countInput))&&Number.isNaN(Number(offsetInput))){
  countError = `Both Offset and Count were not numbers, please enter valid numbers`;
  offsetError = ``;
}

//Blank Detection
if(offsetInput === ``){
  offsetError = `Offset was blank, please enter a valid number`;
}
if(countInput === ``){
  countError = `Count was blank, please enter a valid number`;
}
if(offsetInput === `` && countInput === ``){
  countError = `Both were blank, please enter a valid number`;
  offsetError = ``;
}
//Check if the number is negative
if(offset < 0){
  offsetError = `Offset is too small`;
}
if(count < 0){
  countError = `Count is too small`;
}
if(offset < 0 && count < 0){
  offsetError = `Both are too small`;
  countError = ``;
}

//Check if the stuff in in bonds
if(offset > 5 || offset+count > 5)
  {




  offsetError = `You have 5 animals, Your offset is ${offset} and your count is ${count}. This would result in ${offset+count} which is too big`;
    
  
  countError = ``;
}





//Combine Strings
const comErrorStg = offsetError + countError;

if(comErrorStg !== ``){
  return `<p>${comErrorStg}<p/>`;
}else{
    const animalCards = animalsArray.map((element) =>
      `${buildSingleAnimalCard(element)}`);
    const newArray = animalCards.slice(offset,count+offset);
    return newArray.join('');
  }
}

function buildSingleAnimalCard(singleAnimal) {
  return `<div class="card">
              <img src=${singleAnimal.imageLocation} alt=${singleAnimal.alt} />
              <div class="card-text">
                <h3>${singleAnimal.title}</h3>
                <p>
                ${singleAnimal.description}
                </p>
              </div>
            </div>`;
}

function buildMain() {
  const animals = [
    {
      title: "This is a Giraffe",
      alt: "giraffe",
      description:
        "According to wikipedia: The giraffe's chief distinguishing characteristics are its extremely long neck and legs, its horn-like ossicones, and its spotted coat patterns. It is classified under the family Giraffidae, along with its closest extant relative, the okapi. Its scattered range extends from Chad in the north to South Africa in the south, and from Niger in the west to Somalia in the east. Giraffes usually inhabit savannahs and woodlands. Their food source is leaves, fruits, and flowers of woody plants, primarily acacia species, which they browse at heights most other herbivores cannot reach.",
      imageLocation: "/images/giraffe.jpeg",
    },
    {
      title: `This is a Lion`,
      alt: `lion`,
      description: `According to wikipedia: The lion (Panthera leo) is a large cat
                  of the genus Panthera native to Africa and India. It has a
                  muscular, broad-chested body; short, rounded head; round ears;
                  and a hairy tuft at the end of its tail. It is sexually
                  dimorphic; adult male lions are larger than females and have a
                  prominent mane. It is a social species, forming groups called
                  prides. A lion's pride consists of a few adult males, related
                  females, and cubs. Groups of female lions usually hunt
                  together, preying mostly on large ungulates. The lion is an
                  apex and keystone predator; although some lions scavenge when
                  opportunities occur and have been known to hunt humans, lions
                  typically do not actively seek out and prey on humans.`,
      imageLocation: "/images/lion.jpg",
    },
    {
      title: `This is a zebra`,
      alt: `zebra`,
      description: `According to wikipedia: Zebras are primarily grazers and can
                  subsist on lower-quality vegetation. They are preyed on mainly
                  by lions, and typically flee when threatened but also bite and
                  kick. Zebra species differ in social behaviour, with plains
                  and mountain zebra living in stable harems consisting of an
                  adult male or stallion, several adult females or mares, and
                  their young or foals; while Grévy's zebra live alone or in
                  loosely associated herds. In harem-holding species, adult
                  females mate only with their harem stallion, while male
                  Grévy's zebras establish territories which attract females and
                  the species is promiscuous. Zebras communicate with various
                  vocalisations, body postures and facial expressions. Social
                  grooming strengthens social bonds in plains and mountain
                  zebras.`,
      imageLocation: "/images/zebra.jpg",
    },
    {
      title: `This is a Elephant`,
      alt: `elephant`,
      description: `According to wikipedia: Elephants are scattered throughout
                  sub-Saharan Africa, South Asia, and Southeast Asia and are
                  found in different habitats, including savannahs, forests,
                  deserts, and marshes. They are herbivorous, and they stay near
                  water when it is accessible. They are considered to be
                  keystone species, due to their impact on their environments.
                  Elephants have a fission-fusion society, in which multiple
                  family groups come together to socialise. Females (cows) tend
                  to live in family groups, which can consist of one female with
                  her calves or several related females with offspring. The
                  leader of a female group, usually the oldest cow, is known as
                  the matriarch.`,
      imageLocation: "/images/elephant.jpg",
    },
    {
      title: `This is a Water buffalo`,
      alt: `water buffalo`,
      description: `According to wikipedia: Water buffalo (Bubalus bubalis), also
                  called the domestic water buffalo or Asian water buffalo, is a
                  large bovid originating in the Indian subcontinent and
                  Southeast Asia. Today, it is also found in Italy, the Balkans,
                  Australia, North America, South America and some African
                  countries.[1] Two extant types of water buffalo are
                  recognized, based on morphological and behavioural criteria:
                  the river buffalo of the Indian subcontinent and further west
                  to the Balkans, Egypt and Italy and the swamp buffalo, found
                  from Assam in the west through Southeast Asia to the Yangtze
                  valley of China in the east.[1][2]`,
      imageLocation: "/images/waterBuffalo.jpg",
    },
  ];





  return `
<article id="page-container">
  <nav>
        <ul>
          <li>Home</li>
          <li>Page 1</li>
          <li>Page 2</li>
        </ul>
      </nav>

      <section class="main-container">
        <main>
          <h1>Hello Class</h1>
          <article class="card-container">

          ${buildAnimalCards(animals)}

          </article>
        </main>
      </section>
      </article>`;
}

function buildFooter() {
  return `<footer>
      <ul>
        <li>Contact</li>
        <li>About</li>
        <li>Privacy</li>
      </ul>
    </footer>`;
}

const buildSiteLayout = () => {
  const header = buildHeader();
  const body = buildMain();
  const footer = buildFooter();
  return `${header} ${body} ${footer}`;
};

const siteHTML = buildSiteLayout();
document.write(siteHTML);

// const offset = 1; // get from query string
// const count = 2; // get from query string
// const animalsToShow = animals.slice(offset, offset + count);
// console.log(animalsToShow);
