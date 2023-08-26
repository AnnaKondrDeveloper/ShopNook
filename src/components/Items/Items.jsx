import React, { useState } from "react";
import { Item } from "./Item/Item";
import "./Items.css";
import CreateItem from "./CreateItem/CreateItem";

export function Items(props) {

	const [ adminMode, setAdminMode ] = useState(false);

  return (
    <main className="main">
      <div className="main_filters">
			<div>
				<button className="main_filter" onClick={() => {
					props.changeFilter("all");
				}}
			> All</button>
			<button className="main_filter" onClick={() => {
					props.changeFilter("chairs");
				}}
			> Chairs </button>
			<button className="main_filter" onClick={() => {
					props.changeFilter("sofas");
				}}
			> Sofas </button>
			<button className="main_filter" onClick={() => {
					props.changeFilter("lights");
				}}
			> Lights </button>
			<button className="main_filter" onClick={() => {
					props.changeFilter("tables");
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
			 <CreateItem addItem={props.addItem}/>
		</div>
		}
      <div className="main_items">
        {props.state.map((item) => {
          return (
            <Item
              key={item.id}
              item={item}
              orders={props.orders}
              addOrder={props.addOrder}
				  deleteItem={props.deleteItem}
				  adminMode={adminMode}
				  editItem={props.editItem}
            />
          );
        })}
      </div>
    </main>
  );
}
