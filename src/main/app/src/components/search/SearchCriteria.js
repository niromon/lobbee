import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {search} from './actions';
import CategoryCriteria from "./CategoryCriteria";
import LocationCriteria from "./LocationCriteria";
import FilterCriteria from "./FilterCriteria";
import * as _ from "lodash";

const propTypes = {
    search: PropTypes.func,
    query: PropTypes.string,
    results: PropTypes.array
};

function SearchCriteria({search, query, results}) {
    return (
        <div>
            <div>
                <ul className="collapsible popout" data-collapsible="accordion">
                    <CategoryCriteria/>
                    <FilterCriteria/>
                    <LocationCriteria/>
                    <li class="center-align">
                        <button class="btn waves-effect waves-light btn-large" onClick={(e) => search('')}>
                            Je valide ma liste
                            <i class="material-icons right">send</i>
                        </button>
                    </li>
                </ul>
                {!_.isUndefined(results) && results.length > 0 ? (
                    <div>
                        <ul>{results.map((result) => <li key={result.name}>{result.name}</li>)}</ul>
                    </div>
                ) : _.isUndefined(results) ? '' : <div>No results found.</div>}
            </div>
        </div>
    );
}

SearchCriteria.propTypes = propTypes;

function mapStateToProps({query, results}) {
    return {query, results};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({search}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchCriteria);







/*
import React from 'react';
import CategoryCriteria from "./CategoryCriteria";
import FilterCriteria from "./FilterCriteria";
import LocationCriteria from "./LocationCriteria";
import SearchButton from "./SearchButton";
import {connect} from 'react-redux';
import {search} from "./actions";
import * as _ from "lodash";
import bindActionCreators from "redux/es/bindActionCreators";


function SearchCriteria({searchAction, results}) {
    return (
        <div>
            <ul className="collapsible popout" data-collapsible="accordion">
                <CategoryCriteria/>
                <FilterCriteria/>
                <LocationCriteria/>
                <SearchButton action={searchAction}/>
            </ul>
                {!_.isUndefined(results) && results.length > 0 ? (
                    <div>
                        <ul>{results.map((result) => <li key={result.name}>{result.name}</li>)}</ul>
                    </div>
                ) : _.isUndefined(results) ? '' : <div>No results found.</div>}
        </div>
    );
}

function mapStateToProps({results}) {
    return {results};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({search}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchCriteria);

/!*export default connect(
    (state = {}) => {state},
    (dispatch, props) => bindActionCreators({search}, dispatch)
)(SearchCriteria);*!/

*/
