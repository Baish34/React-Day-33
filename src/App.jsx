import "./App.css";

const Books = ({ books }) => {
  const scienceFictionBooks = books.filter(
    (book) => book.genre === "Science Fiction",
  );

  const bookList = scienceFictionBooks.map((book) => (
    <div key={book.id}>
      <h3>Title: {book.title}</h3>
      <p>Genre: {book.genre}</p>
    </div>
  ));

  return (
    <div>
      <h2>Books</h2>
      {bookList}
    </div>
  );
};

const Users = ({ users }) => {
  const adminRole = users.filter((user) => user.role === "Admin");

  const userList = adminRole.map((user) => (
    <div key={user.id}>
      <h3>Name: {user.name}</h3>
      <p>Role: {user.role}</p>
    </div>
  ));

  return (
    <>
      <h2>Users</h2>
      {userList}
    </>
  );
};

const Products = ({ products }) => {
  const filterProducts = products.filter((product) => product.price > 100);

  const productList = filterProducts.map((product) => (
    <div key={product.id}>
      <h3>Name: {product.name}</h3>
      <p>Price: {product.price}</p>
      <p>Color: {product.features.color}</p>
      <p>Waterproof: {product.features.isWaterProof ? "Yes" : "No"}</p>
    </div>
  ));

  return (
    <>
      <h2>Products</h2>
      {productList}
    </>
  );
};

const Cities = ({ cities }) => {
  const filterCities = cities.filter((city) => city.population > 1000000);

  const citiesList = filterCities.map((city) => (
    <div key={city.id}>
      <h3>Name: {city.name}</h3>
      <p>Population: {city.population}</p>
    </div>
  ));

  return (
    <>
      <h2>Cities</h2>
      {citiesList}
    </>
  );
};

const Movies = ({ movies }) => {
  const filterMovies = movies.filter((movie) => movie.releaseYear > 2015);

  const movieList = filterMovies.map((movie) => (
    <div>
      <h3>{movie.title}</h3>
      <p>Release Year: {movie.releaseYear}</p>
    </div>
  ));

  return (
    <>
      <h2>Movies</h2>
      {movieList}
    </>
  );
};

const Podcasts = ({ podcasts }) => {
  const filterPodcast = podcasts.filter((podcast) => podcast.featured);

  const podcastList = filterPodcast.map((podcast) => (
    <div key={podcast.id}>
      <h3>{podcast.title}</h3>
      <p>Hosts: {podcast.host.join(", ")}</p>
    </div>
  ));

  return (
    <>
      <h2>Podcasts</h2>
      {podcastList}
    </>
  );
};

const MovieData = ({ movieData }) => {
  const movieFilter = movieData.filter((movie) => movie.releaseYear > 2000);

  const totalDuration = movieFilter.reduce(
    (acc, curr) => acc + curr.duration,
    0,
  );

  const averageDuration = totalDuration / movieFilter.length;

  return (
    <div>
      <h2>Average Duration of Movies released after 2000</h2>
      <p>{averageDuration}</p>
    </div>
  );
};

const Tasks = ({ tasks }) => {
  const completedTasksCount = tasks.filter((task) => task.completed).length;

  return (
    <div>
      <h2>Total Completed Tasks</h2>
      <p>{completedTasksCount}</p>
    </div>
  );
};

const Vehicles = ({ vehicles }) => {
  const totalDistance = vehicles.reduce(
    (acc, vehicle) => acc + vehicle.distance,
    0,
  );

  return (
    <div>
      <h2>Total Distance Traveled</h2>
      <p>{totalDistance}</p>
    </div>
  );
};

const Sales = ({ sales }) => {
  const totalRevenue = sales.reduce(
    (acc, sale) => acc + sale.price * sale.quantity,
    0,
  );

  return (
    <div>
      <h2>Total Revenue Generated</h2>
      <p>${totalRevenue}</p>
    </div>
  );
};

export default function App() {
  const books = [
    { id: 1, title: "Dune", genre: "Science Fiction" },
    { id: 2, title: "Neuromancer", genre: "Science Fiction" },
    { id: 3, title: "Foundation", genre: "Sci-fi" },
  ];

  const users = [
    { id: 1, name: "Alice", role: "User" },
    { id: 2, name: "Bob", role: "Admin" },
    { id: 3, name: "Charlie", role: "User" },
    { id: 4, name: "John", role: "Admin" },
  ];

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 1200,
      features: { color: "green", isWaterProof: false },
    },
    {
      id: 2,
      name: "Smartphone",
      price: 800,
      features: { color: "blue", isWaterProof: true },
    },
    {
      id: 3,
      name: "Headphones",
      price: 150,
      features: { color: "silver", isWaterProof: false },
    },
  ];

  const cities = [
    { id: 1, name: "New York", population: 8500000 },
    { id: 2, name: "Los Angeles", population: 539900 },
    { id: 3, name: "Chicago", population: 2700000 },
  ];

  const movies = [
    { id: 1, title: "Inception", releaseYear: 2010 },
    { id: 2, title: "La La Land", releaseYear: 2016 },
    { id: 3, title: "Interstellar", releaseYear: 2014 },
    { id: 4, title: "Dune 2", releaseYear: 2024 },
  ];

  const podcasts = [
    { id: 1, title: "Tech Talk", host: ["host 1"], featured: true },
    { id: 2, title: "Business Insights", host: ["host 2"], featured: false },
    {
      id: 3,
      title: "Science Hour",
      host: ["host 3", "host 4"],
      featured: true,
    },
  ];

  const movieData = [
    { id: 1, title: "The Matrix", duration: 136, releaseYear: 1999 },
    { id: 2, title: "Inception", duration: 148, releaseYear: 2010 },
    { id: 3, title: "Avatar", duration: 162, releaseYear: 2009 },
  ];

  const tasks = [
    { id: 1, description: "Complete project proposal", completed: true },
    { id: 2, description: "Review client feedback", completed: false },
    { id: 3, description: "Submit final report", completed: true },
  ];

  const vehicles = [
    { id: 1, name: "Car", distance: 150 },
    { id: 2, name: "Bicycle", distance: 10 },
    { id: 3, name: "Motorcycle", distance: 75 },
  ];

  const sales = [
    { id: 1, product: "Widget A", price: 25, quantity: 10 },
    { id: 2, product: "Gadget B", price: 50, quantity: 5 },
    { id: 3, product: "Tool C", price: 30, quantity: 8 },
  ];

  return (
    <main>
      <Books books={books} />
      <hr />
      <Users users={users} />
      <hr />
      <Products products={products} />
      <hr />
      <Cities cities={cities} />
      <hr />
      <Movies movies={movies} />
      <hr />
      <Podcasts podcasts={podcasts} />
      <hr />
      <MovieData movieData={movieData} />
      <hr />
      <Tasks tasks={tasks} />
      <hr />
      <Vehicles vehicles={vehicles} />
      <hr />
      <Sales sales={sales} />
    </main>
  );
}
