import React from 'react';

class FilterableProductTable extends React.Component {
	render() {
		return (
			<div>
				<SearchBar />
				<ProductTable products={this.props.products} />
			</div>
		);
	}
}
export default FilterableProductTable;

class SearchBar extends React.Component {
	render() {
		return (
			<form>
				<input type="text" placeholder="Search..." />
				<p>
					<input type="checkbox" />
					{' '}
					only show products in stock 
				</p>
			</form>
		);
	}
}
class ProductTable extends React.Component {
	render() {
			let rows = [];
			let lastCategory = null;
			this.props.products.forEach(function(product) {
				if (product.category !== lastCategory) {
					rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
				}
				rows.push(<ProductRow product={product} key={product.name} />);
				lastCategory = lastCategory;
			});
			return(
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>{rows}</tbody>
				</table>
			);
	}
}

class ProductCategoryRow extends React.Component {
	render() {
		return <tr><th colspan="2">{this.props.category}</th></tr>;
	}
}

class ProductRow extends React.Component {
	render() {
		let name = this.props.product.stocked ? this.props.product.name : <span style={{color: 'red'}}>{this.props.product.name}</span>
		return (
			<tr>
				<td>{name}</td>
				<td>{this.props.product.price}</td>
			</tr>
		);
	}
}