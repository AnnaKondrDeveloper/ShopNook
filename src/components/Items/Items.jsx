import React, { useState } from "react";
import { Item } from "./Item/Item";
import "./Items.css";
import EditItemForm from "./EditItemForm/EditItemForm";

export function Items({addItem, state, orders, addOrder, increaseOrderCount, deleteItem, changeFilter}) {

	const [ adminMode, setAdminMode ] = useState(false);

	function editItem(img_url, title, descr, category, price) {
		addItem(img_url, title, descr, category, price);

	}

  return (
    <main className="main">
      <div className="main_filters">
			<div>
				<button className="main_filter" onClick={() => {
					changeFilter("all");
				}}
			> All</button>
			<button className="main_filter" onClick={() => {
					changeFilter("chairs");
				}}
			> Chairs </button>
			<button className="main_filter" onClick={() => {
					changeFilter("sofas");
				}}
			> Sofas </button>
			<button className="main_filter" onClick={() => {
					changeFilter("lights");
				}}
			> Lights </button>
			<button className="main_filter" onClick={() => {
					changeFilter("tables");
				}}
			> Tables </button>
			</div>
			<label className="switch">
				<input type="checkbox" 
				checked={adminMode} 
				onChange={() => {
					setAdminMode(!adminMode); 
					}}/>
				<span className="slider"></span>
			</label>
      </div>
		{adminMode && <div className="main_new">
		<h2 className='main_new_title'>Add new item</h2>
			<EditItemForm editItem={editItem} item={"item"}/>
		</div>
		}
      <div className="main_items">
        {state.map((item) => {
          return (
            <Item
              key={item.id}
              item={item}
              orders={orders}
              addOrder={addOrder}
				  increaseOrderCount={increaseOrderCount} 
				  deleteItem={deleteItem}
				  adminMode={adminMode}
				  editItem={editItem}
            />
          );
        })}
      </div>
    </main>
  );
}
