interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Next.js Website - ⚽ Football Maniac',
    description: `The project is centered around showcasing trips to football games. Its primary business goal is to drive conversions by guiding visitors to a user-friendly contact form where they can inquire about their dream football game experience. The website features an innovative world map feature that allows interested individuals to easily explore and plan their next football adventure.`,
    imgSrc: '/static/images/football-maniac.png',
    href: 'https://footballmaniac.pl',
  },
  {
    title: 'Mobile App - 📚 SocialBooks',
    description: `My Engineering Thesis project. SocialBooks is your ultimate reading app, crafted with React Native and Typescript. Immerse yourself in a vast library of books via the Google Books API. Create your reading profile, curate your book collection, engage in community challenges, pen book reviews, and connect with fellow readers.`,
    imgSrc: '/static/images/social-books.jpg',
    href: 'https://github.com/augustynglowacki/SocialBooks',
  },
  {
    title: 'Mobile App - 🎬 MoviePicker',
    description: `MoviePicker is a captivating React Native application for all your movie and TV series needs. Discover what's trending, curate your favorites, track what you've watched, and build a watchlist. Plus, personalize your profile!`,
    imgSrc: '/static/images/movie-picker.jpg',
    href: 'https://github.com/augustynglowacki/MoviePicker',
  },
]

export default projectsData
