import React, {Component} from 'react';
import Rating from "./Rating";

class ProductList extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr class="blue-text">
                        <th></th>
                        <th>
                            <Rating stars={this.props.summary.rate}/>
                        </th>
                        <th>{this.props.summary.price} &euro;</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.products.map((product) =>
                        <tr>
                            <td>{product.product.name}</td>
                            <td>
                                <Rating stars={product.rate}/>
                            </td>
                            <td>{product.price} &euro;</td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }
}

export default ProductList;
