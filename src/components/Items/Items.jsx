import React from "react";
import { Item } from "./Item/Item";
import "./Items.css";
import CreateItem from "./CreateItem/CreateItem";

export function Items(props) {
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
			<div className="switch">
				<input type="checkbox"></input>
				<span className="slider"></span>
			</div>
      </div>
		<div className="main_new">
			<CreateItem />
		</div>
      <div className="main_items">
        {props.state.map((item) => {
          return (
            <Item
              key={item.id}
              item={item}
              orders={props.orders}
              addOrder={props.addOrder}
            />
          );
        })}
      </div>
    </main>
  );
}
