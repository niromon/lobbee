import React, { Component } from 'react';
import Rating from "./Rating";
import ProductList from "./ProductList";

class SearchResult extends Component {
    render() {
        return (
            <div class="card">
                <div class="card-content">
                    <span class="card-title grey-text text-darken-4">
                        <i class="small material-icons">room</i> <a href="#">{this.props.item.store.name}</a> - {this.props.item.store.distance} m
                        <Rating stars={this.props.item.store.rate}/>
                    </span>
                    <p class="card-subtitle grey-text text-darken-2">
                        <ProductList products={this.props.item.products} summary={this.props.item.summary}/>
                    </p>
                </div>
                <div class="card-action right-align">
                    <a href="#"><i class="material-icons">send</i>J'y vais</a>
                </div>
            </div>
        );
    }
}

export default SearchResult;
