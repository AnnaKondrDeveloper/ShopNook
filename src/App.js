import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Items } from './components/Items';

function App() {

	const initState = [
		{
			id: 1,
			title: "Green chair",
			img: "chair1.jpeg",
			descr: "The upholstery of the chair is made of wear-resistant velour, which will last you a long time and is easy to care for. The sturdy supports are made of solid birch.",
			category: "chair",
			price: "150"
		},
		{
			id: 2,
			title: "Wood table",
			img: "table1.jpeg",
			descr: "Gather around the beautifully crafted wooden table, where rustic simplicity meets modern design, creating the perfect centerpiece for memorable moments.",
			category: "table",
			price: "350"
		},
		{
			id: 3,
			title: "Light",
			img: "light1.jpeg",
			descr: "Minimalistic modern pendant chandelier with adjustable brightness, ring-shaped lamps.",
			category: "light",
			price: "100"
		},
		{
			id: 4,
			title: "Bill sofa",
			img: "sofa2.jpeg",
			descr: "Immerse yourself in tranquil serenity within this minimalist bedroom adorned with warm textures and soft hues.",
			category: "sofa",
			price: "1250"
		},
		{
			id: 5,
			title: "Modern light fixtures",
			img: "light2.jpeg",
			descr: "Illuminate your Nordic home with a captivating glass ball and brass crystal pendant lamp, complemented by an integrated LED wall moon lamp for a touch of modern sophistication.",
			category: "light",
			price: "120"
		},
		{
			id: 6,
			title: "Wooden sofa",
			img: "sofa1.jpeg",
			descr: "Explore rustic elegance with this intricately designed bedroom featuring a weathered wood accent wall and a cozy, neutral-toned bedding ensemble.",
			category: "sofa",
			price: "1050"
		},
		{
			id: 7,
			title: "Leather chair",
			img: "chair2.jpeg",
			descr: "The unique harmony of natural leather with wood is the right choice for those who want to create an original and masculine style in their living space",
			category: "chair",
			price: "170"
		},
		{
			id: 8,
			title: "Desk",
			img: "table2.jpeg",
			descr: "Embrace the fusion of industrial and rustic aesthetics with this captivating table featuring a reclaimed wood top and sturdy metal framework",
			category: "table",
			price: "270"
		}
	]



  return (
    <div className='container'>
		<Header/>
		<Items state = {initState}/>
		<Footer/>
    </div>
  );
}

export default App;
