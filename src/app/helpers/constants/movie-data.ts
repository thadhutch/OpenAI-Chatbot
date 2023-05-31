// Might need to convert this into a sitemap
export const bookData = `
<url>
<loc>https://books.toscrape.com/</loc>
<desc>Your book store</desc>
</url>
<url>
<loc>https://books.toscrape.com/catalogue/category/books_1/index.html</loc>
<desc>An overview about our book collection</desc>
</url>
<url>
<loc>https://books.toscrape.com/catalogue/category/books/travel_2/index.html</loc>
<content>
    <book>
    <url>https://books.toscrape.com/catalogue/its-only-the-himalayas_981/index.html</url>
    <desc>A book about travelling the himalayas</desc>
    <price>45.17</price>
    <availability>in stock</availability>
    </book>
    <book>
    <url>https://books.toscrape.com/catalogue/full-moon-over-noahs-ark-an-odyssey-to-mount-ararat-and-beyond_811/index.html</url>
    <desc>A book by Rick Ansonson about his journey to Mount Ararat</desc>
    <price>49.43</price>
    <availability>in stock</availability>
    </book>
</content>
</url>
<url>
<loc>https://books.toscrape.com/catalogue/category/books/mystery_3/index.html</loc>
<content>
    <book>
    <url>https://books.toscrape.com/catalogue/sharp-objects_997/index.html</url>
    <desc>A book about by Gillian Flynn about Camille Preaker's troubled past</desc>
    <price>47.87</price>
    <availability>in stock</availability>
    </book>
    <book>
    <url>https://books.toscrape.com/catalogue/the-past-never-ends_942/index.html</url>
    <desc>A book by Jackson Burnett about the attourney Chester Morgan. His friend died in an unexplained accidental death.</desc>
    <price>56.50</price>
    <availability>in stock</availability>
    </book>
</content>
</url>
`
export const movieData = [
  {
  title:"Leave",
  img:"https://occ-0-39-41.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABZcELanc7RlKq5hHl3TvQimXyJswOza3dVckpOCwc9XoN8HuMELJN4mIZa_Nn6kYNldRejPU7VKPF9nOX1tr4n2G6YnlSsZs-g.jpg?r=ea4", 
  title_type:"movie",
  netflix_id:81684842,
  synopsis:"Twenty years after being abandoned at a cemetery swaddled in a cloth marked with satanic symbols, Hunter embarks on a haunting journey to find her roots.",
  rating:"5.9",
  year:"2022",
  runtime:"6380",
  imdb_id:"tt1446695",
  poster:"https://m.media-amazon.com/images/M/MV5BMTMzMzg1MTMwNV5BMl5BanBnXkFtZTcwNzY5MjY2Ng@@._V1_SX300.jpg",
  top250:0,
  top250tv: 0,
  title_date:"2023-05-12",
  }, {
    title:"Monsieur Naphtali",
    img:"https://occ-0-2774-1490.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABdgp8VwRnzB9mWknSv6T_ezyGkNq1iLCSSHGtw0hh6gKyEknv7s0mutUw1wEYQRlkmSkNm5KSgCUagRvd56C2dTS5E8q64_sYg.jpg?r=544",
    title_type:"movie",
    netflix_id:81667277,
    synopsis:"A middle-aged man leaves his sheltered life, and his childlike ways cause problems for other guests during his visit to a country manor.",
    rating:"4.9",
    year:"1999",
    runtime:"5011",
    imdb_id:"tt0205269",
    poster:"https://m.media-amazon.com/images/M/MV5BMWI0ODA1NGUtMWUyZC00YjFkLWFhNWItNmU3ZTNiZjA3ZjQ4XkEyXkFqcGdeQXVyMjQzMzQzODY@._V1_SX300.jpg",
    top250:0,
    top250tv:0,
    title_date:"2023-05-12",
  }
]