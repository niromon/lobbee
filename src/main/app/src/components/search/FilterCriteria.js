import React, { Component } from 'react';

const FilterCriteria = () => (
    <li>
        <div class="collapsible-header"><i class="material-icons">sort</i>Trier par</div>
        <div class="collapsible-body filter-container">
            <ul>
                <li>
                    <input type="checkbox" name="event-type-filter" class="event-type-filter filled-in" id="notes" checked="checked" value="social" />
                    <label for="notes">Notes</label>
                </li>
                <li>
                    <input type="checkbox" name="event-type-filter" class="event-type-filter  filled-in" id="kms" checked="checked" value="class" />
                    <label for="kms">Distance à parcourir</label>
                </li>
                <li>
                    <input type="checkbox" name="event-type-filter" class="event-type-filter filled-in" id="nb_places_to_visit" checked="checked" value="festival" />
                    <label for="nb_places_to_visit">Nombre de lieux à visiter</label>
                </li>
                <li>
                    <input type="checkbox" name="event-type-filter" class="event-type-filter filled-in" id="price" checked="checked" value="festival" />
                    <label for="price">Prix</label>
                </li>
            </ul>
        </div>
    </li>
)

export default FilterCriteria;
