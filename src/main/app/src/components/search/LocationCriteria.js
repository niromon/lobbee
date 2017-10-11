import React, { Component } from 'react';

class LocationCriteria extends Component {
    render() {
        return (
            <li>
                <div class="collapsible-header"><i class="material-icons">local_activity</i>Filtres</div>
                <div class="collapsible-body">
                    <ul>
                        <li>
                            <input type="checkbox" name="event-type-filter" class="event-type-filter filled-in" id="health" checked="checked" value="social" />
                            <label for="health">Santé</label>
                        </li>
                        <li>
                            <input type="checkbox" name="event-type-filter" class="event-type-filter filled-in" id="environment" checked="checked" value="social" />
                            <label for="environment">Environnement</label>
                        </li>
                        <li>
                            <input type="checkbox" name="event-type-filter" class="event-type-filter filled-in" id="social" checked="checked" value="social" />
                            <label for="social">Social</label>
                        </li>
                    </ul>
                    <p class="range-field">
                        <label>Notes lieux</label>
                        <input type="range" id="place_rate" min="0" max="10" />
                    </p>
                    <p class="range-field">
                        <label>Notes produit</label>
                        <input type="range" id="product_rate" min="0" max="10" />
                    </p>
                </div>
            </li>
        );
    }
}

export default LocationCriteria;
