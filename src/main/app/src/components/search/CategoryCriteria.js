import React, { Component } from 'react';

class CategoryCriteria extends Component {
    render() {
        return (
            <li>
                <div class="collapsible-header active"><i class="material-icons">event_note</i>Catégorie</div>
                <div class="collapsible-body filter-container">
                    <ul class="collection with-header">
                        <li class="collection-header"><h6><b>Alimentation></b></h6></li>
                        <li class="collection-item"><div>Yahourt</div></li>
                        <li class="collection-item"><div>Tomate</div></li>
                    </ul>
                    <p><a href="#"><b>Entrer un produit</b><i class="material-icons tiny">add</i></a></p>
                </div>
            </li>
        );
    }
}

export default CategoryCriteria;
