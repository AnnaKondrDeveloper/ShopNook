import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Items } from "./components/Items/Items";
import { v1 } from 'uuid';

function App() {

  const initState = [
    {
      id: v1(),
      title: "Green chair",
      img_url: "https://i.pinimg.com/564x/53/6a/bd/536abdda79e99c294529c382e709eb2a.jpg",
      descr:
        "The upholstery of the chair is made of wear-resistant velour, which will last you a long time and is easy to care for. The sturdy supports are made of solid birch.",
      category: "chairs",
      price: "1150",
    },
    {
      id: v1(),
      title: "Wood table",
      img_url: "https://lh3.googleusercontent.com/Bl2-nW-Xbm_vlH3Ln1VbqdFTkxPkWjD7EeystziVaC4e7zapByPvjG0Xlcx5gGE13Rqpmz47MbvJCDa5s7CBBm5D0EUiibxGf3uVxU8x",
      descr:
        "Gather around the beautifully crafted wooden table, where rustic simplicity meets modern design, creating the perfect centerpiece for memorable moments.",
      category: "tables",
      price: "1350",
    },
    {
      id: v1(),
      title: "Light",
      img_url: "https://www.prof-svet.ru/netcat_files/122/236/321_112_xx_det01_1235e.jpg",
      descr:
        "Minimalistic modern pendant chandelier with adjustable brightness, ring-shaped lamps.",
      category: "lights",
      price: "1100",
    },
    {
      id: v1(),
      title: "Bill sofa",
      img_url: "https://lh3.googleusercontent.com/X8hgVgiz31llYxNC9tovp74alF50qmMM96S1JqOzID3dxvs8c9q6fnWf4mUyzT405_HYJkCrfxHet6tgvGpC4vNbYGf-nnFlPYyRo7RNbA",
      descr:
        "Immerse yourself in tranquil serenity within this minimalist bedroom adorned with warm textures and soft hues.",
      category: "sofas",
      price: "12250",
    },
    {
      id: v1(),
      title: "Modern light fixtures",
      img_url: "https://i.pinimg.com/564x/0a/28/7a/0a287aec5cca9ab08bc8571e4e56d0cb.jpg",
      descr:
        "Illuminate your Nordic home with a captivating glass ball and brass crystal pendant lamp, complemented by an integrated LED wall moon lamp for a touch of modern sophistication.",
      category: "lights",
      price: "920",
    },
    {
      id: v1(),
      title: "Wooden sofa",
      img_url: "https://i.pinimg.com/564x/4b/f7/ad/4bf7ad0fea960ef2e5ef604ba1ff8365.jpg",
      descr:
        "Explore rustic elegance with this intricately designed bedroom featuring a weathered wood accent wall and a cozy, neutral-toned bedding ensemble.",
      category: "sofas",
      price: "11050",
    },
    {
      id: v1(),
      title: "Leather chair",
      img_url: "https://lh3.googleusercontent.com/ds61mtUDplOMEsk4nZo6_-QSS8xKznYT0MflZ8T4bm7MPIWFx4CwkJ4SYlitpSmlwgyUlY13j2QTezwRXD0CBSICOi_ksxiGJy5n9ww",
      descr:
        "The unique harmony of natural leather with wood is the right choice for those who want to create an original and masculine style in their living space",
      category: "chairs",
      price: "1170",
    },
    {
      id: v1(),
      title: "Desk",
      img_url: "https://i.pinimg.com/564x/e9/c0/1d/e9c01d99338fbb3a06e64cb749bfd36e.jpg",
      descr:
        "Embrace the fusion of industrial and rustic aesthetics with this captivating table featuring a reclaimed wood top and sturdy metal framework",
      category: "tables",
      price: "1270",
    },
  ];

  const [ items, setItems] = useState(initState)
  const [ currentItems, setCurrentItems ] = useState(items);
  const [ orders, setOrders ] = useState([]);

  function addOrder(item) {
    setOrders([item, ...orders]);
  }

  function deleteOrder(orderId) {
    const filteredOrders = orders.filter((i) => i.id !== orderId);
    setOrders(filteredOrders);
  }

  function changeFilter(filter) {
    if (filter === "all") {
      setCurrentItems(items);
      return;
    }
    const filteredItems = items.filter((i) => i.category === filter);
    setCurrentItems(filteredItems);
  }

  function addItem(img, title, descr, category, price) {
	const newItem = {
      id: v1(),
      title: title,
      img_url: img,
      descr: descr,
      category: category,
      price: price,
    }
	 setItems([newItem, ...items]);
	 setCurrentItems([ newItem, ...items]);
  }

  function deleteItem(id) {
	const filteredItems = items.filter(i => i.id !== id);
	setItems(filteredItems);
	setCurrentItems(filteredItems);
  }

  return (
    <div className="container">
      <Header orders={orders} deleteOrder={deleteOrder} />
      <Items
        state={currentItems}
        orders={orders}
        addOrder={addOrder}
        changeFilter={changeFilter}
		  addItem={addItem}
		  deleteItem={deleteItem}
      />
      <Footer />
    </div>
  );
}

export default App;
