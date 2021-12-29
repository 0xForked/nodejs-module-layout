import user from '../data/models/user'
import mongo from '../data/sources/mongodb'
import redis from '../data/sources/redis'

function fetch() {
    // fetch all data
}

function find(...args) {
    // find data by ...
}

function store(...args) {
    // store new data ...
}

function update(...args) {
    // update selected data
}

function destroy(...args) {
    // erase data ...
    // to trash or permanent
}

function restore(...args) {
    // restore trash data ...
}

module.exports = {
    fetch,
    find,
    store,
    update,
    destroy,
    restore
}